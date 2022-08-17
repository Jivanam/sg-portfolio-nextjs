import { Fragment } from "react";
import StyleHome from "../app/components/home/home.module.css";
import AboutMe from "../app/components/aboutMe/aboutMe";
import FeatureBanner from "../app/components/blog/featureBanner.js/featureBanner";
import ButtonBorderLess from "../app/components/button/btnBorderLess";
import Contact from "../app/components/contact/contact";
import HeroSection from "../app/components/hero-section/hero-section";
import Projects from "../app/components/projects/projects";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AboutMe />
      <FeatureBanner sectionTitle="Latest blog" sectionId="latest-blog"/>
      <div className={StyleHome.exploreWrapper}>
        <ButtonBorderLess btnCaption="Explore more blogs" href="/blogs" />
      </div>
      <Projects sectionTitle="Projects" />
      <Contact />
    </Fragment>
  );
}
