import Styles from "./button.module.css";
import Link from "next/link";
export default function ButtonBorder(props) {
  const { btnCaption, href } = props;

  return (
    <Link href={href}>
      <a className={Styles.btnBorder}>{btnCaption}</a>
    </Link>
  );
}
