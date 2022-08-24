import { Fragment } from "react";
import Footer from "../footer/footer";
import NavBar from "../nav-bar/nav-bar";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();

  const showNav = router.pathname === "/404" ? false : true;
  const style = router.pathname.startsWith("/blogs")
    ? { marginTop: "2.2vh" }
    : { marginTop: "6.2vh" };
  return (
    <Fragment>
      {showNav && <NavBar />}
      <section style={style}>{props.children}</section>
      {showNav && <Footer />}
    </Fragment>
  );
}
