import Styles from "./button.module.css";
import Link from "next/link";
export default function ButtonBorderLess(props) {
  const { btnCaption, href } = props;

  return (
    <Link href={href}>
      <a className={Styles.btnBorderLess}>
        {btnCaption}
        {props.children}
      </a>
    </Link>
  );
}
