import { Fragment } from "react";
import Icon from "../icons/icon";
import Link from "next/link";
import Styles from "./footer.module.css";
export default function Footer() {
  const contactEmail = "shasongurung@protonmail.com";
  return (
    <Fragment>
      <div className={Styles.footerFixer}></div>
      <footer className={Styles.footer}>
        <div className={Styles.container}>
          <div className={Styles.contactEmail}>
            <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
          </div>
          <ul className={Styles.footerMenus}>
            <li>
              <Link href="#">
                <a>
                  <Icon iconName="GithubLink" />
                </a>
              </Link>
            </li>
            <li className={Styles.linkedin}>
              <Link href="#">
                <a>
                  <Icon iconName="Linkedin" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
}
