"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return a?r.createElement(d,l(l({ref:t},s),{},{components:a})):r.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},l="Create a Page",i={permalink:"/blog/tutorial-basics/create-a-page",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tutorial-basics/create-a-page.md",source:"@site/blog/tutorial-basics/create-a-page.md",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",date:"2023-06-29T06:50:38.902Z",formattedDate:"June 29, 2023",tags:[],readingTime:.52,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:1},prevItem:{title:"Congratulations!",permalink:"/blog/tutorial-basics/congratulations"},nextItem:{title:"Tutorial Intro",permalink:"/blog/intro"}},p={authorsImageUrls:[]},c=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Add ",(0,n.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}m.isMDXComponent=!0}}]);