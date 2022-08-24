import Styles from "./hero-section.module.css";
import Bounce from "../bounce/bounce";
import Link from "next/link";
import Icon from "../icons/icon";
import DOMPurify from "isomorphic-dompurify";
import { sgHeroDescription } from "../../content/content";

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

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(sgHeroDescription),
            }}
            className={Styles.introDescription}
          />
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
