import Styles from "./blogContent.module.css";
import defaultCardImg from "../../../../public/img/defaultBannerImg.jpg";
import Image from "next/image";
import Moment from "react-moment";
import DOMPurify from "isomorphic-dompurify";
import dynamic from "next/dynamic";

export default function BlogContentSection(props) {
  const { content } = props;

  const blog = content &&
    content.data && {
      title: content?.data?.title,
      tags: content?.data?.blog_tags,
      description: JSON.parse(content?.data?.description),
      publishedDate: content?.data?.date_updated,
      coverImage: content?.data?.cover_image,
    };
  // const blogDescriptionSantised = DOMPurify.sanitize(blog?.description);
  const editorHolderId = "blogContent";
  
  const EditorJSComponent = dynamic(() => import("../../editor/editor"), {ssr: false});

  return (
    <section className={`${Styles.blogContent} defaultSection`}>
      <div className={Styles.container}>
        <div className={Styles.content}>
          <h1 className={Styles.contentTitle}>{blog?.title}</h1>

          <ul className={Styles.contentTags}>
            {blog?.tags &&
              blog?.tags?.length > 0 &&
              blog.tags.map((tag, index) => {
                return <li key={index}>#{tag}</li>;
              })}
          </ul>

          <div className={Styles.date}>
            Published on{" "}
            <span>
              <Moment format="Do MMM YYYY">{blog?.publishedDate}</Moment>{" "}
            </span>
          </div>
          <div className={Styles.blogCoverImage}>
            <Image
              alt="Blog cover image"
              src={blog?.coverImage ? blog.coverImage : defaultCardImg}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <EditorJSComponent
            editorHolderId={editorHolderId}
            data={blog.description}
          />
        </div>
      </div>
    </section>
  );
}
