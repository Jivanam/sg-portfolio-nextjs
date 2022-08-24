import BlogContentSection from "../../app/components/blog/blogContent/blogContent";
import { apiSGDirectusCustom } from "../../app/utils/apiCaller";
import { getSGPortfolioBlog } from "../../app/constants/constant";

export default function BlogContent(props) {
  const { blogContent } = props;
  return <BlogContentSection content={blogContent} />;
}

export async function getServerSideProps(context) {
  const blogContent = await apiSGDirectusCustom(
    getSGPortfolioBlog(context.params.blogSlug)
  );

  if (blogContent.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogContent },
  };
}
