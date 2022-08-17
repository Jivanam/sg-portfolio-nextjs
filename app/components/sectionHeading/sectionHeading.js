import Styles from "./sectionHeading.module.css";

export default function SectionHeading(props) {
  const { sectionTitle } = props;
  return (
    <div className={Styles.sectionHeading}>
      <h1>{sectionTitle}</h1>
    </div>
  );
}
