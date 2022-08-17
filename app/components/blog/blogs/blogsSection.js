import BlogCard from "../blogCard/blogCard";
import Styles from "./blogsSection.module.css";
import Link from "next/link";
import { Fragment } from "react";
import SectionHeading from "../../sectionHeading/sectionHeading";
import defaultCoverImg from "../../../../public/img/defaultBannerImg.jpg";
export default function BlogsSection(props) {
  const blogsData = [
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 1",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 2",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 3",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 4",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 5",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 6",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 7",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 8",
      publishedDate: "17/08/2022",
    },
    {
      coverImg: defaultCoverImg,
      tags: ["tag1", "tag2", "tag3"],
      title: "This is an example of blog title 9",
      publishedDate: "17/08/2022",
    },
  ];

  return (
    <Fragment>
      <SectionHeading sectionTitle="More blogs" />
      <section className={Styles.blogsCards}>
        {blogsData &&
          blogsData.length > 0 &&
          blogsData.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                cardCoverImg={blog.coverImg}
                cardTags={blog.tags}
                cardTitle={blog.title}
                cardPublishedDate={blog.publishedDate}
              />
            );
          })}
      </section>
    </Fragment>
  );
}
