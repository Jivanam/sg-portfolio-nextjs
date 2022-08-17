import Styles from "./hero-section.module.css";
import Bounce from "../bounce/bounce";
import Link from "next/link";
import Icon from "../icons/icon";
export default function HeroSection() {
  return (
    <section className={Styles.heroSection}>
      <div className={Styles.logoBgWrapper}>
        <Icon iconName="Logo" />
      </div>

      <div className={Styles.container}>
        <div className={Styles.heroContent}>
          <div className={Styles.introTxt}>
            Hi <span>नमस्ते</span>, I am
          </div>
          <div className={Styles.highlight}>Shason Gurung.</div>
          <div className={Styles.introDescription}>
            <p>
              I'm a tech enthusiast currently based in UK. I enjoy learning and
              tinkering with various aspects of web apps. Here, you will find
              some of the projects I have worked or currently been working on.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.bounceIcon}>
        <Link href="#">
          <a>
            <Bounce direction="Bottom">
              <div className={Styles.iconWrapper}>
                <Icon iconName="ArrowDown" />
              </div>
            </Bounce>
          </a>
        </Link>
      </div>
    </section>
  );
}
