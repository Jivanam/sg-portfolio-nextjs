import BlogCard from "../blogCard/blogCard";
import Styles from "./blogsSection.module.css";
import Link from "next/link";
import { Fragment } from "react";
import SectionHeading from "../../sectionHeading/sectionHeading";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { apiSGDirectusCustom } from "../../../utils/apiCaller";
import { getSGPortfolioBlogsBasic } from "../../../constants/constant";

export default function BlogsSection(props) {
  const { blogsCardData } = props;

  const [blogsForCards, setBlogsForCards] = useState(blogsCardData.data);
  const [cardNumberPerFetch, setCardNumberPerFetch] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogsCardData = async () => {
    console.log("Fetch called");
    const response = await apiSGDirectusCustom(
      getSGPortfolioBlogsBasic(
        cardNumberPerFetch,
        pageNumber * cardNumberPerFetch + 1
      )
    );

    if (response.data.length < 3) {
      setHasMore(false);
    }

    if (response.data) {
      console.log(response.data);
      setBlogsForCards((oldArr) => [...oldArr, ...response.data]);
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <Fragment>
      <SectionHeading sectionTitle="More blogs" />

      <InfiniteScroll
        dataLength={blogsForCards.length}
        next={fetchBlogsCardData}
        hasMore={hasMore}
        loader={
          <span className={Styles.scrollDownMsg}>
            scroll down to see more ...
          </span>
        }
      >
        <section className={Styles.blogsCards}>
          {blogsForCards &&
            blogsForCards.length > 0 &&
            blogsForCards.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  cardCoverImg={blog.cover_image}
                  cardTags={blog.blog_tags}
                  cardTitle={blog.title}
                  cardPublishedDate={blog.date_updated}
                />
              );
            })}
        </section>
      </InfiniteScroll>
    </Fragment>
  );
}
