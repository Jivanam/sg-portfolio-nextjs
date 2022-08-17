import Styles from "./button.module.css";
import Link from "next/link";
export default function ButtonFill(props) {
  const { btnCaption, href } = props;

  return (
    <Link href={href}>
      <a className={Styles.btnFillWrapper}>
        <span className={Styles.btnFill}>{btnCaption}</span>
        {props.children && props.children}
      </a>
    </Link>
  );
}
