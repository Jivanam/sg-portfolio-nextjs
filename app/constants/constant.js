// export const apiSGDirectusURL = process.env.NEXT_PUBLIC_DIRECTUS_URL;
export const apiSGDirectusURLCustom =
  process.env.NEXT_PUBLIC_SG_DIRECTUS_URL_CUSTOM;
export const getSGPortfolioBlogsBasic = (postLimit, postOffSet) => {
  return `/get-blogs-basic?postLimit=${postLimit}&postOffSet=${postOffSet}`;
};

export const getSGPortfolioBlog = (blogSlugTitle) => {
  return `/get-blog?blogSlugTitle=${blogSlugTitle}`;
};

export const getSGPortfolioBlogsFeature = "/get-feature-blog";
