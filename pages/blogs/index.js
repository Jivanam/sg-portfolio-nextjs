import { Fragment } from "react";
import BlogsSection from "../../app/components/blog/blogs/blogsSection";
import FeatureBanner from "../../app/components/blog/featureBanner.js/featureBanner";
import {
  getSGPortfolioBlogsBasic,
  getSGPortfolioBlogsFeature,
} from "../../app/constants/constant";
import { apiSGDirectusCustom } from "../../app/utils/apiCaller";

export default function Blogs(props) {
  const { blogsCardData, blogsFeatureData } = props;

  return (
    <Fragment>
      <FeatureBanner
        sectionTitle="Latest blog"
        featureBlog={blogsFeatureData?.data}
        href={`blogs/${blogsFeatureData?.data.blog_title_slug}`}
      />

      <BlogsSection blogsCardData={blogsCardData} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const blogsFeatureData = await apiSGDirectusCustom(
    getSGPortfolioBlogsFeature
  );

  const blogsCardData = await apiSGDirectusCustom(
    getSGPortfolioBlogsBasic(3, 1)
  );

  if (blogsCardData.error || blogsFeatureData.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogsCardData, blogsFeatureData },
  };
}
