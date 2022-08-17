import LogoIcon from "./logo";
import Github from "./github";
import ExternalLink from "./externalLink";
import ArrowDown from "./arrrowDown";
import ArrowRight from "./arrowRight";
import PropTypes from "prop-types";
import LinkedIn from "./linkedin";

export default function Icon(props) {
  const { iconName } = props;
  switch (iconName) {
    case "Logo":
      return <LogoIcon />;
    case "ExternalLink":
      return <ExternalLink />;
    case "GithubLink":
      return <Github />;
    case "ArrowDown":
      return <ArrowDown />;
    case "ArrowRight":
      return <ArrowRight />;
    case "Linkedin":
      return <LinkedIn />;
    default:
      return <ExternalLink />;
  }
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};
