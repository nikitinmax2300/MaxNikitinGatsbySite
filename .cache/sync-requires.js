const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/pages/projects.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/pages/tags.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/admin/Desktop/MaxNikitinGatsbySite/src/templates/tags.js")))
}

