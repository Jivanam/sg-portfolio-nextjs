import { Fragment } from "react";
import Icon from "../icons/icon";
import Link from "next/link";
import Styles from "./footer.module.css";
import { sgContactInfo } from "../../content/content";
export default function Footer() {
  return (
    <Fragment>
      <div className={Styles.footerFixer}></div>
      <footer className={Styles.footer}>
        <div className={Styles.container}>
          <div className={Styles.contactEmail}>
            <Link href={`mailto:${sgContactInfo?.email}`}>
              {sgContactInfo?.email}
            </Link>
          </div>
          <ul className={Styles.footerMenus}>
            <li>
              <Link href={sgContactInfo?.github} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Icon iconName="GithubLink" />
                </a>
              </Link>
            </li>
            <li className={Styles.linkedin}>
              <Link href={sgContactInfo?.linkedin} passHref>
                <a target="_blank" rel="noopener noreferrer">
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
