import { Fragment } from "react";
import ButtonBorder from "../button/btnBorder";
import ButtonFill from "../button/btnFill";
import SectionHeading from "../sectionHeading/sectionHeading";
import Styles from "./aboutMe.module.css";
export default function AboutMe() {
  const sectionTitle = `About me`;
  const description = () => {
    return (
      <Fragment>
        <p>
          A tech enthusiast with a blend of an impressive academic background
          and technical skills, underpinned by a unique mix of professional
          experience enjoyed in multifaceted and service-driven
          settings,necessitating self-motivation and a positive response to
          pressure.
        </p>

        <p>
          Energetic, dynamic, relishes challenges and is agile and willing to
          assimilate and implement innovative processes and procedures.
          Optimistic of attaining new skills every day. Competent and flexible
          with proactive leadership capacity. Strong cultural awareness and
          language skills (English, Nepali and Hindi). Receptive to new and
          emerging technologies.
        </p>
      </Fragment>
    );
  };

  return (
    <section className={`${Styles.aboutMe} defaultSection`}>
      <div className={Styles.container}>
        <SectionHeading sectionTitle={sectionTitle}/>
        <div className={Styles.description}>{description()}</div>
        <div className={Styles.buttons}>
          <ButtonBorder href="#" btnCaption="Download" />
          <ButtonFill href="#" btnCaption="Say hello" />
        </div>
      </div>
    </section>
  );
}
