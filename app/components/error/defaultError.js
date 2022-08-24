import { useEffect } from "react";
import Icon from "../icons/icon";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "./error.module.css";
import SectionHeading from "../sectionHeading/sectionHeading";
export default function DefaultError() {
  const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
        router.replace("/");
      }, 3000);
    }, []);

  const logoTitle = "Shason";
  return (
    <section className={Styles.errorSectionContainer}>
      <div className={Styles.logoHolder}>
        <div className={Styles.logoWrapper}>
          <Icon iconName="Logo" />
        </div>
        <Link href="/">
          <a>
            <h1>{logoTitle}</h1>
          </a>
        </Link>
      </div>

      <div className={Styles.title}>
        <SectionHeading sectionTitle="Page not found" />
      </div>

      <div className={Styles.msgDescription}>
        We are so sorry. We cannot seem to find the page you are looking for.
      </div>

      <div className={Styles.redirect}>Redirecting to home page</div>
    </section>
  );
}
