import { Fragment } from "react";
import StyleHome from "../app/components/home/home.module.css";
import AboutMe from "../app/components/aboutMe/aboutMe";
import FeatureBanner from "../app/components/blog/featureBanner.js/featureBanner";
import ButtonBorderLess from "../app/components/button/btnBorderLess";
import Contact from "../app/components/contact/contact";
import HeroSection from "../app/components/hero-section/hero-section";
import Projects from "../app/components/projects/projects";
import { apiSGDirectusCustom } from "../app/utils/apiCaller";
import { getSGPortfolioBlogsFeature } from "../app/constants/constant";

export default function Home(props) {
  const { blogsFeatureData } = props;

  return (
    <Fragment>
      <HeroSection />
      <AboutMe />
      <FeatureBanner
        featureBlog={blogsFeatureData?.data}
        sectionTitle="Latest blog"
        sectionId="latest-blog"
        href={`blogs/${blogsFeatureData?.data.blog_title_slug}`}
      />
      <div className={StyleHome.exploreWrapper}>
        <ButtonBorderLess btnCaption="Explore more blogs" href="/blogs" />
      </div>
      <Projects sectionTitle="Projects" />
      <Contact />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const blogsFeatureData = await apiSGDirectusCustom(
    getSGPortfolioBlogsFeature
  );

  if (blogsFeatureData.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogsFeatureData },
  };
}
