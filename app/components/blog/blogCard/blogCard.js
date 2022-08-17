import Styles from "./blogCard.module.css";
import Image from "next/image";
import defaultCardImg from "../../../../public/img/defaultBannerImg.jpg";
export default function BlogCard(props) {
  const cardContent = {
    cardCoverImg: props.cardCoverImg,
    cardTags: props.cardTags,
    cardTitle: props.cardTitle,
    cardPublishedDate: props.cardPublishedDate,
  };

  return (
    <div className={Styles.card}>
      <div className={Styles.cardImg}>
        <Image
          alt="Blog image"
          layout="fill"
          objectFit="cover"
          src={cardContent.cardCoverImg}
        />
      </div>

      <div className={Styles.cardTxt}>
        <ul className={Styles.tags}>
          {cardContent.cardTags &&
            cardContent.cardTags.length > 0 &&
            cardContent.cardTags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })}
        </ul>

        <h1 className={Styles.cardTitle}>{cardContent.cardTitle}</h1>

        <div className={Styles.cardDate}>
          Published on <span>{cardContent.cardPublishedDate}</span>
        </div>
      </div>
    </div>
  );
}
