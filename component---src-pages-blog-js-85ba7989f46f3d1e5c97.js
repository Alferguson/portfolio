(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return s});var a=n(0),r=n.n(a),o=n(210),l=n(214),i=n(212),c=n(215);t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return r.a.createElement(l.a,{location:e.location,title:n},r.a.createElement(i.a,{title:"All posts"}),a.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25)}},r.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))};var s="2785444898"},209:function(e,t,n){var a;e.exports=(a=n(211))&&a.default||a},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(66),l=n.n(o);n.d(t,"a",function(){return l.a});n(209),n(9).default.enqueue,r.a.createContext({})},211:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),r=n.n(a),o=n(92);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},212:function(e,t,n){"use strict";var a=n(213),r=n(0),o=n.n(r),l=n(217),i=n.n(l);function c(e){var t=e.description,n=e.lang,r=e.meta,l=e.title,c=a.data.site,s=t||c.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},213:function(e){e.exports={data:{site:{siteMetadata:{title:"John Alexander Ferguson's Portfolio",description:"Portfolio for John Alexander Ferguson, a Software Engineer with an emphasis in Front-End Technologies",author:"John Alexander Ferguson"}}}}},214:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(210),l=n(200),i=n.n(l),c=function(e){return r.a.createElement("nav",{className:i.a.navbar},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"blog"},"Blog!"))))},s=n(201),u=n.n(s),m=(n(133),n(134),function(e){var t=e.children;return r.a.createElement("div",{className:u.a.pageTemp},r.a.createElement("header",null,r.a.createElement("h1",null,"John Alexander Ferguson"),r.a.createElement("hr",null)),r.a.createElement(c,null),r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))});n.d(t,"a",function(){return m})},215:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(221),r=n.n(a),o=n(222),l=n.n(o);l.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete l.a.googleFonts;var i=new r.a(l.a);var c=i.rhythm,s=i.scale}}]);
//# sourceMappingURL=component---src-pages-blog-js-85ba7989f46f3d1e5c97.js.map