export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT_DETAIL: (slug: string) => `/projects/${slug}`,
  BLOG: "/blog",
  BLOG_POST: (slug: string) => `/blog/${slug}`,
  CONTACT: "/contact",
};
