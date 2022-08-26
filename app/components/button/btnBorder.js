import Styles from "./button.module.css";
import Link from "next/link";
export default function ButtonBorder(props) {
  const { btnCaption, href } = props;

  return (
    <Link href={href}>
      <a className={Styles.btnFillWrapper}>
        <span className={Styles.btnBorder}>{btnCaption}</span>
        {props.children && props.children}
      </a>
    </Link>
  );
}
