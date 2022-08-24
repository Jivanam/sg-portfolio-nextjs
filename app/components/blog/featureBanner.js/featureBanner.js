import ButtonFill from "../../button/btnFill";
import SectionHeading from "../../sectionHeading/sectionHeading";
import Styles from "./featureBanner.module.css";
import Image from "next/image";
import Bounce from "../../bounce/bounce";
import Icon from "../../icons/icon";
import Moment from "react-moment";
import Link from "next/link";
export default function FeatureBanner(props) {
  const { href, sectionTitle, sectionId, featureBlog } = props;

  return (
    <section
      id={sectionId && sectionId}
      className={`${Styles.featureBanner} defaultSection`}
    >
      <div className={Styles.container}>
        {sectionTitle && <SectionHeading sectionTitle={sectionTitle} />}
        <Link href={href}>
          <a>
            <div className={Styles.banner}>
              <div className={Styles.bannerTxt}>
                <ul className={Styles.tags}>
                  {featureBlog &&
                    featureBlog?.blog_tags &&
                    featureBlog?.blog_tags.length > 0 &&
                    featureBlog?.blog_tags.map((tag, index) => {
                      return <li key={index}>#{tag}</li>;
                    })}
                </ul>
                <h1 className={Styles.title}>{featureBlog?.title}</h1>
                <div className={Styles.date}>
                  Published on{" "}
                  <span>
                    <Moment format="Do MMM YYYY">
                      {featureBlog?.date_updated}
                    </Moment>
                  </span>
                </div>

                {/* <ButtonFill href="#" btnCaption="Continue reading">
                  <Bounce direction="Right">
                    <div className={Styles.iconWrapper}>
                      <Icon iconName="ArrowRight" />
                    </div>
                  </Bounce>
                </ButtonFill> */}
              </div>
              {featureBlog?.cover_image && (
                <div className={Styles.bannerImg}>
                  <Image
                    alt="Feature banner Image"
                    src={featureBlog?.cover_image}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
