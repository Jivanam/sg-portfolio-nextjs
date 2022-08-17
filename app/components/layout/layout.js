import { Fragment } from "react";
import Footer from "../footer/footer";
import NavBar from "../nav-bar/nav-bar";

export default function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      <section>{props.children}</section>
      <Footer />
    </Fragment>
  );
}
