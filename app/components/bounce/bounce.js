import Styles from "./bounce.module.css";

function Bounce(props) {
  const { direction } = props;

  const bounceStyle = () => {
    switch (direction) {
      case "Right":
        return Styles.bounceRight;
      case "Left":
        return Styles.bounceLeft;
      case "Top":
        return Styles.bounceTop;
      case "Bottom":
        return Styles.bounceBottom;
    }
  };

  return (
    <span className={`${Styles.icon} ${bounceStyle()}`}>{props.children}</span>
  );
}

export default Bounce;
