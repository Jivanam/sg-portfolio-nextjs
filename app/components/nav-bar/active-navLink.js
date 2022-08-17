import { useRouter } from "next/router";
import Link from "next/link";
import Styles from "./nav-bar.module.css";

export default function (props) {
  const { href, children } = props;
  const router = useRouter();
  return (
    <Link href={href}>
      <a>
        <li
          className={
            router.pathname.startsWith(href)
              ? `${Styles.link} ${Styles.activeLink}`
              : Styles.link
          }
        >
          {children}
        </li>
      </a>
    </Link>
  );
}
