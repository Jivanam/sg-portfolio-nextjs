import ButtonFill from "../../button/btnFill";
import SectionHeading from "../../sectionHeading/sectionHeading";
import Styles from "./featureBanner.module.css";
import Image from "next/image";
import defaultBannerImg from "../../../../public/img/defaultBannerImg.jpg";
import Bounce from "../../bounce/bounce";
import Icon from "../../icons/icon";
export default function FeatureBanner(props) {
  const { sectionTitle, sectionId } = props;
  const featureBanner = {
    title:
      "Introducing Project Planner: The best way to build an integrated project plan",
    tags: "",
    publishedDate: "15/08/2022",
    tags: ["1", "2", "Item 3"],
  };

  return (
    <section
      id={sectionId && sectionId}
      className={`${Styles.featureBanner} defaultSection`}
    >
      <div className={Styles.container}>
        {sectionTitle && <SectionHeading sectionTitle={sectionTitle} />}
        <div className={Styles.banner}>
          <div className={Styles.bannerTxt}>
            <ul className={Styles.tags}>
              {featureBanner &&
                featureBanner.tags &&
                featureBanner.tags.length > 0 &&
                featureBanner.tags.map((tag, index) => {
                  return <li key={index}>{tag}</li>;
                })}
            </ul>
            <h1 className={Styles.title}>{featureBanner?.title}</h1>
            <div className={Styles.date}>
              Published on <span>{featureBanner?.publishedDate}</span>
            </div>

            <ButtonFill href="#" btnCaption="Continue reading">
              <Bounce direction="Right">
                <div className={Styles.iconWrapper}>
                  <Icon iconName="ArrowRight" />
                </div>
              </Bounce>
            </ButtonFill>
          </div>
          <div className={Styles.bannerImg}>
            <Image
              alt="Feature banner Image"
              src={defaultBannerImg}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
