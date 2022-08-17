import Styles from "./button.module.css";
import Icon from "../icons/icon";
import Link from "next/link";
export default function ButtonBorderLess(props) {
  const { btnCaption, href } = props;

  return (
    <Link href={href}>
      <a className={Styles.btnBorderLess}>
        {btnCaption} <Icon iconName="ArrowRight" />
      </a>
    </Link>
  );
}
