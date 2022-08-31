import { Fragment } from "react";
import StyleHome from "../app/components/home/home.module.css";
import AboutMe from "../app/components/aboutMe/aboutMe";
import FeatureBanner from "../app/components/blog/featureBanner.js/featureBanner";
import ButtonBorderLess from "../app/components/button/btnBorderLess";
import Contact from "../app/components/contact/contact";
import HeroSection from "../app/components/hero-section/hero-section";
import Projects from "../app/components/projects/projects";
import { sgProjectData } from "../app/content/content";
import { apiSGDirectusCustom } from "../app/utils/apiCaller";
import { getSGPortfolioBlogsFeature } from "../app/constants/constant";
import Icon from "../app/components/icons/icon";

export default function Home(props) {
  const { blogsFeatureData } = props;

  return (
    <Fragment>
      <HeroSection />
      <AboutMe />

      {blogsFeatureData?.data && (
        <FeatureBanner
          featureBlog={blogsFeatureData?.data}
          sectionTitle="Latest blog"
          sectionId="latest-blog"
          href={`blogs/${blogsFeatureData?.data.blog_title_slug}`}
        />
      )}

      <div className={StyleHome.exploreWrapper}>
        <ButtonBorderLess href="/blogs" btnCaption="Explore more">
          <Icon iconName="ArrowRight" />
        </ButtonBorderLess>
      </div>
      {sgProjectData && sgProjectData.length > 0 && (
        <Projects sectionTitle="Projects" sgProjectData={sgProjectData} />
      )}

      <Contact />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const blogsFeatureDataFetch = await apiSGDirectusCustom(
    getSGPortfolioBlogsFeature
  );
  const blogsFeatureData = blogsFeatureDataFetch?.data
    ? blogsFeatureDataFetch
    : null;

  return {
    props: { blogsFeatureData },
  };
}
