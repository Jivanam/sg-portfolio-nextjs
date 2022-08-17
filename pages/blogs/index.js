import { Fragment } from "react";
import BlogsSection from "../../app/components/blog/blogs/blogsSection";
import FeatureBanner from "../../app/components/blog/featureBanner.js/featureBanner";

export default function Blogs() {
  return (
    <Fragment>
      <FeatureBanner sectionTitle="Latest blog" />

      <BlogsSection />
    </Fragment>
  );
}
