(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"58AG":function(e,t,a){},"7IdH":function(e,t,a){},Mdw5:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("hpys"),i=a("tXeH"),c=a("N1om"),m=a.n(c),o=(a("vNGM"),a("9eSz")),s=a.n(o),u=a("Wbzz"),d=function(e){var t=e.posts,a=e.notFeatured;return t.length>0?r.a.createElement("div",{className:"post-preview-cards"},r.a.createElement("ul",null,t.map((function(e){var t=e.node,a=t.id,n=t.frontmatter,l=n.title,i=n.date,c=n.authors,o=n.image;return r.a.createElement(u.Link,{key:a,to:"/blog/"+m()(l)+"/"},r.a.createElement("li",{className:"post-preview-card__item"},r.a.createElement(s.a,{className:"post-preview-card__image",alt:l,fluid:o.childImageSharp.fluid}),r.a.createElement("div",{className:"post-preview-card__content"},r.a.createElement("span",null,new Date(i).toDateString()),r.a.createElement("p",null,l),r.a.createElement("span",{className:"author-span"},c.length>0?"by ":null," ",c.map((function(e){return e.name})).join(", ")))))})))):a?null:r.a.createElement("div",null,"This author has no posts yet!")},f=a("rY18"),p=(a("7IdH"),function(e){var t=e.node,a=e.large,n=void 0!==a&&a;return r.a.createElement("div",{className:"thumbnail-custom "+f.a+" "+(n?"thumbnail-custom--large":"")},r.a.createElement("div",{key:t.fields.slug,className:"thumbnail-grid"},r.a.createElement(u.Link,{to:"/blog/"+m()(t.frontmatter.title)+"/"},r.a.createElement(s.a,{className:"post-thumbnail-image",fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title})),r.a.createElement("div",{className:"post-thumbnail-description"},r.a.createElement(u.Link,{to:"/blog/"+m()(t.frontmatter.title)+"/"},r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("h3",null,t.frontmatter.title||t.fields.slug),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}})),r.a.createElement("small",null,(t.frontmatter.authors&&t.frontmatter.authors.length)>0?"by ":null,!!t.frontmatter.authors&&t.frontmatter.authors.map((function(e){return r.a.createElement(u.Link,{to:"/author/"+e.id,key:e.id,className:"author"},e.name)}))))))}),h=a("XhDg");t.default=function(e){var t,a=e.pageContext,n=e.data,c=e.location,m=a.category,o=n.allMarkdownRemark.edges,s=[],u=[];(void 0===o?[]:o).forEach((function(e,a){0===a?t=e:a>0&&a<4?s.push(e):u.push(e)}));var f=n.site.siteMetadata.title;return Object(h.a)(),r.a.createElement(l.a,{title:f,location:"/blog/"+m},r.a.createElement("div",{style:{background:"#e5e5e5"}},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{links:[{href:"/blog",title:"Blog"},{href:c.pathname,title:m}]}),r.a.createElement("h2",null,m),r.a.createElement("div",{style:{paddingTop:"2rem"}},r.a.createElement(p,{large:!0,node:t.node})),r.a.createElement("div",{style:{paddingTop:"4rem",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"4rem"}},s.map((function(e){var t=e.node;return r.a.createElement(p,{key:t.id,node:t})}))),r.a.createElement("div",{style:{paddingTop:"4rem"}},r.a.createElement(d,{posts:u,notFeatured:!0})))))}},XhDg:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a("rY18");function l(){Object(n.useEffect)((function(){r.b()}),[]),Object(n.useEffect)((function(){r.c()}))}},tXeH:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=(a("58AG"),function(e){var t=e.links,a=void 0===t?[]:t;return r.a.createElement("div",{className:"breadcrumb"},a.map((function(e,t){return r.a.createElement("span",{key:t,className:t===a.length-1?"breadcrumb-item breadcrumb-item--last":"breadcrumb-item"},r.a.createElement(l.Link,{to:e.href,replace:!0,className:0===t?"breadcrumb-item-first":""},e.title),a.length!==t+1?r.a.createElement("span",{className:"arrow-icon"}):null)})))})},vNGM:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-js-0a60ef694b7951444ce2.js.map