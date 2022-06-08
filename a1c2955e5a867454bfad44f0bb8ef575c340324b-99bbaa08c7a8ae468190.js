"use strict";(self.webpackChunkordina_blog=self.webpackChunkordina_blog||[]).push([[253],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},9230:function(e,t,r){r.d(t,{G:function(){return N},L:function(){return y},M:function(){return k},P:function(){return C},_:function(){return s},a:function(){return o},b:function(){return p},c:function(){return c},d:function(){return d},g:function(){return g},h:function(){return l}});var a=r(7294),n=(r(4811),r(5697)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},d=function(e){var t,r,a;return null==(t=c(e))||null==(r=t.images)||null==(a=r.fallback)?void 0:a.src};function p(e,t,r,a,n){return void 0===n&&(n={}),u()||(n=o({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function g(e,t,r,a,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}var m,f=["children"],h=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){var t=e.children,r=s(e,f);return a.createElement(a.Fragment,null,a.createElement(h,o({},r)),t,null)},v=["src","srcSet","loading","alt","shouldLoad"],w=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,u=e.shouldLoad,c=s(e,v);return a.createElement("img",o({},c,{decoding:"async",loading:n,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:l}))},E=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,u=s(e,w),c=u.sizes||(null==t?void 0:t.sizes),d=a.createElement(b,o({},u,t,{sizes:c,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:c})})),d):d};b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var L=["fallback"],C=function(e){var t=e.fallback,r=s(e,L);return t?a.createElement(E,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};C.displayName="Placeholder",C.propTypes={fallback:n.string,sources:null==(m=E.propTypes)?void 0:m.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var k=function(e){return a.createElement(a.Fragment,null,a.createElement(E,o({},e)),a.createElement("noscript",null,a.createElement(E,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=E.propTypes;var I,S,T=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:i().object.isRequired,alt:T},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],O=new Set,q=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,p=e.className,g=e.class,m=e.onStartLoad,f=e.onLoad,h=e.onError,y=s(e,x),v=i.width,w=i.height,b=i.layout,E=function(e,t,r){var a={},n="gatsby-image-wrapper";return u()||(a.position="relative",a.overflow="hidden"),"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(u()||(a.display="inline-block",a.verticalAlign="top"),n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,w,b),L=E.style,C=E.className,k=s(E,A),T=(0,a.useRef)(),_=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);g&&(p=g);var q=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,w);return(0,a.useEffect)((function(){I||(I=Promise.all([r.e(774),r.e(36)]).then(r.bind(r,9036)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return S=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=T.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void O.add(_)):S&&O.has(_)?void 0:(I.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;T.current.innerHTML=a(o({isLoading:!0,isLoaded:O.has(_),image:i},y)),O.has(_)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,_,O,c,m,f,h))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){O.has(_)&&S&&(T.current.innerHTML=S(o({isLoading:O.has(_),isLoaded:O.has(_),image:i},y)),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},k,{style:o({},L,c,{backgroundColor:d}),className:C+(p?" "+p:""),ref:T,dangerouslySetInnerHTML:{__html:q},suppressHydrationWarning:!0}))},N=(0,a.memo)((function(e){return e.image?(u(),(0,a.createElement)(q,e)):null}));N.propTypes=_,N.displayName="GatsbyImage";var R,z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],M=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:T,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(R=N,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,z);return n&&console.warn(n),r?a.createElement(R,o({image:r},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=j},4928:function(e,t,r){r.d(t,{MI:function(){return n},bm:function(){return a}});var a="Home",n={ALL:"All"}}}]);
//# sourceMappingURL=a1c2955e5a867454bfad44f0bb8ef575c340324b-99bbaa08c7a8ae468190.js.map