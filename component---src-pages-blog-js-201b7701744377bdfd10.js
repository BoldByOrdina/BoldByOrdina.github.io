"use strict";(self.webpackChunkordina_blog=self.webpackChunkordina_blog||[]).push([[7],{8922:function(e,t,n){n.d(t,{V:function(){return r}});var l=n(7294),r=function(e){var t=e.tags,n=e.filterTags,r=l.useState(!1),a=r[0],i=r[1],o=l.useState("All"),s=o[0],c=o[1],g=function(){return i(!a)},u=function(e){c(s===e?"All":e),window.innerWidth<=768&&g(),n(e)};return l.createElement("div",{className:"blog-filters"},l.createElement("div",{className:"blog-filters__toggle",onClick:g},l.createElement("span",{className:"blog-filters__toggle--filter-name"},"Filter:"),l.createElement("span",{className:a?"blog-filters__toggle--open":"blog-filters__toggle--close"})),l.createElement("div",{className:"blog-filters__tags "+(a?"blog-filters__tags--open":"blog-filters__tags--close")},l.createElement("div",{className:"blog-filters__tags--tag clickable"},l.createElement("span",{onClick:function(){return u("All")},key:"All",className:"All"===s?"blog-filters__tags--highlight":""},"All")),t.sort((function(e,t){return e>t?1:-1})).map((function(e){return l.createElement("div",{className:"blog-filters__tags--tag clickable"},l.createElement("span",{key:e,onClick:function(){return u(e)},className:s===e?"blog-filters__tags--highlight":""},e))}))))}},5502:function(e,t,n){n.r(t);var l=n(5785),r=n(4908),a=n.n(r),i=n(7294),o=n(7850),s=n(4928),c=n(8692),g=n(7931),u=n(2950),f=n(1735),m=n(905),d=n(164),_=n(2894),b=n(4441),h=n(8922);t.default=function(e){var t=e.data,n=e.location,r=t.site.siteMetadata,p=r.configs.countOfInitialPost,E=t.popularPosts.edges,v=(0,i.useMemo)((function(){return a()(E.map((function(e){return e.node.frontmatter.category})))}),[]),k=[];E.map((function(e){return e.node.frontmatter.tags.map((function(e){return k.push(e)}))}));var w=new Set(k);k=(0,l.Z)(w);var N=(0,u.l)(),A=N[0],y=N[1],C=N[2],O=(0,c.b)(),S=O[0],x=O[1],I=i.useState((0,l.Z)(E)),L=I[0],P=I[1];return(0,g.S)(),(0,f.O)((function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return d.Ti()-e}(e)<80};return _.G(C,{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&E.length>y.current*p}})()})),i.createElement(m.A,{location:n,title:r.title},i.createElement(o.F,{title:s.bm,keywords:r.keywords}),i.createElement("div",{className:"blog-page"},i.createElement("div",{className:"blog-page__intro"},i.createElement("h1",{className:"blog-page__intro--title"},"BOLD ",i.createElement("strong",null,"BLOG")),i.createElement("p",null,"Catch up on the latest design and technology insights with our collection of articles and case studies")),i.createElement(h.V,{tags:v,filterTags:function(e){var t;if("All"===e)return t=(0,l.Z)(E),void P(t);t=E.filter((function(t){return-1!==t.node.frontmatter.category.indexOf(e)})),P(t)}}),i.createElement(b.b,{showAll:!0,categoriesAsLink:!0,posts:L,countOfInitialPost:p,count:A,categories:v,selectCategory:x,category:S,searchIndex:t.siteSearchIndex.index})))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-201b7701744377bdfd10.js.map