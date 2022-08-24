import Link from "next/link";
import ActiveNavLink from "./active-navLink";
import Styles from "./nav-bar.module.css";
import Icon from "../icons/icon";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const logoTitle = "Shason";
  return (
    <section className={show ? Styles.navBar : Styles.navBarHidden}>
      <div className={Styles.container}>
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
        <ul className={Styles.navLinks}>
          <ActiveNavLink href="/blogs">Blogs</ActiveNavLink>
          <ActiveNavLink href="/#projects-list">Projects</ActiveNavLink>
          <ActiveNavLink href="/#contact-section">Contact</ActiveNavLink>
        </ul>
      </div>
    </section>
  );
}
