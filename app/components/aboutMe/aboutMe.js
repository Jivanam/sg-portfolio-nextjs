import ButtonBorder from "../button/btnBorder";
import ButtonFill from "../button/btnFill";
import SectionHeading from "../sectionHeading/sectionHeading";
import Styles from "./aboutMe.module.css";
import DOMPurify from "isomorphic-dompurify";
import { sgAboutMe } from "../../content/content";
export default function AboutMe() {
  const sectionTitle = `About me`;

  return (
    <section className={`${Styles.aboutMe} defaultSection`}>
      <div className={Styles.container}>
        <SectionHeading sectionTitle={sectionTitle} />

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(sgAboutMe),
          }}
          className={Styles.description}
        />

        <div className={Styles.buttons}>
          <ButtonBorder href="#" btnCaption="Download" />
          <ButtonFill href="#" btnCaption="Say hello" />
        </div>
      </div>
    </section>
  );
}
