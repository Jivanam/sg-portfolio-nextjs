import Icon from "../icons/icon";
import SectionHeading from "../sectionHeading/sectionHeading";
import Styles from "./projects.module.css";
import Link from "next/link";

export default function Projects(props) {
  const { sectionTitle, sgProjectData } = props;

  return (
    <section id="projects-list" className={`${Styles.projects} defaultSection`}>
      <div className={Styles.container}>
        <SectionHeading sectionTitle={sectionTitle} />
        <div className={Styles.projectList}>
          <div className={Styles.tblHeadings}>
            <div className={Styles.title}>Project title</div>
            <div className={Styles.techStack}>Tech used</div>
            <div className={Styles.projectLink}>Link</div>
          </div>
          {sgProjectData &&
            sgProjectData.length > 0 &&
            sgProjectData.map((project, index) => {
              return (
                <div key={index} className={Styles.tableRow}>
                  <div className={Styles.title}>{project.title}</div>
                  <div className={Styles.techStack}>
                    {project.techStack &&
                      project.techStack.length > 0 &&
                      project.techStack.map((techStack, index) => {
                        return <span key={index}>{techStack}</span>;
                      })}
                  </div>
                  <div className={Styles.projectLink}>
                    {project.externalLink && (
                      <Link href={project.externalLink}>
                        <a>
                          <Icon iconName="ExternalLink" />
                        </a>
                      </Link>
                    )}

                    {project.gitHubLink && (
                      <Link href={project.gitHubLink}>
                        <a>
                          <Icon iconName="GithubLink" />
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
