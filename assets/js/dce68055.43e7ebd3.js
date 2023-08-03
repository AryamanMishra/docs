"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1441],{3905:(e,t,i)=>{i.d(t,{Zo:()=>j,kt:()=>N});var a=i(7294);function M(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){M(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function L(e,t){if(null==e)return{};var i,a,M=function(e,t){if(null==e)return{};var i,a,M={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(M[i]=e[i]);return M}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(M[i]=e[i])}return M}var c=a.createContext({}),o=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},j=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var i=e.components,M=e.mdxType,n=e.originalType,c=e.parentName,j=L(e,["components","mdxType","originalType","parentName"]),l=o(i),N=M,r=l["".concat(c,".").concat(N)]||l[N]||u[N]||n;return i?a.createElement(r,s(s({ref:t},j),{},{components:i})):a.createElement(r,s({ref:t},j))}));function N(e,t){var i=arguments,M=t&&t.mdxType;if("string"==typeof e||M){var n=i.length,s=new Array(n);s[0]=l;var L={};for(var c in t)hasOwnProperty.call(t,c)&&(L[c]=t[c]);L.originalType=e,L.mdxType="string"==typeof e?e:M,s[1]=L;for(var o=2;o<n;o++)s[o]=i[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}l.displayName="MDXCreateElement"},6024:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>L,toc:()=>o});var a=i(7462),M=(i(7294),i(3905));const n={title:"OpenLineage 1.0, Featuring Static Lineage, is Coming Soon",date:new Date("2023-07-18T00:00:00.000Z"),author:"Michael Robinson",image:"./image.svg",banner:"./banner.svg",description:"The release of OpenLineage 1.0 will add static lineage support."},s=void 0,L={permalink:"/blog/static-lineage",source:"@site/blog/static-lineage/index.mdx",title:"OpenLineage 1.0, Featuring Static Lineage, is Coming Soon",description:"The release of OpenLineage 1.0 will add static lineage support.",date:"2023-07-18T00:00:00.000Z",formattedDate:"July 18, 2023",tags:[],readingTime:2.29,hasTruncateMarker:!0,authors:[{name:"Michael Robinson"}],frontMatter:{title:"OpenLineage 1.0, Featuring Static Lineage, is Coming Soon",date:"2023-07-18T00:00:00.000Z",author:"Michael Robinson",image:"./image.svg",banner:"./banner.svg",description:"The release of OpenLineage 1.0 will add static lineage support."},prevItem:{title:"Meet Us in San Francisco on August 30th!",permalink:"/blog/sf-meetup-2"},nextItem:{title:"Join us in New York on June 22nd",permalink:"/blog/nyc-collibra-meetup"}},c={image:i(9904).Z,authorsImageUrls:[void 0]},o=[{value:"Static, AKA &quot;Design,&quot; Lineage is Coming Soon",id:"static-aka-design-lineage-is-coming-soon",level:3},{value:"What is Static Lineage?",id:"what-is-static-lineage",level:4},{value:"What Use Cases are Served by Static Lineage?",id:"what-use-cases-are-served-by-static-lineage",level:4},{value:"Implementation Details",id:"implementation-details",level:4},{value:"More Information",id:"more-information",level:4}],j={toc:o};function u(e){let{components:t,...n}=e;return(0,M.kt)("wrapper",(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,M.kt)("p",null,"The first major release of OpenLineage, 1.0, will add static lineage support."),(0,M.kt)("p",null,(0,M.kt)("img",{src:i(4142).Z+"#banner",width:"670",height:"160"})),(0,M.kt)("h3",{id:"static-aka-design-lineage-is-coming-soon"},'Static, AKA "Design," Lineage is Coming Soon'),(0,M.kt)("p",null,"OpenLineage 1.0, which is expected early in August, will add support for static lineage to the project."),(0,M.kt)("p",null,'An initiative to add the provision of static lineage, sometimes also called "design" or "design-time" lineage, to OpenLineage came out of conversations with community members at Collibra, Manta and Marquez.'),(0,M.kt)("p",null,"Data catalogs like those offered by Collibra and Manta will benefit from static lineage support, but so will other users. In one way, this addition represents an exciting new chapter in the history of the project. In another, it represents a return to our roots. Before OpenLineage focused on operational lineage, it supported a form of static lineage."),(0,M.kt)("h4",{id:"what-is-static-lineage"},"What is Static Lineage?"),(0,M.kt)("p",null,'OpenLineage has traditionally supported only operational, or "runtime," lineage -- metadata emitted when jobs run. In other words, OpenLineage has been engineered to capture information as transformations of datasets are happening, enabling precise descriptions of those transformations.'),(0,M.kt)("p",null,"As part of this process, OpenLineage has nonetheless also captured some static metadata -- specifically, information about jobs (such as the current version of the code) and datasets (such as the schema)."),(0,M.kt)("p",null,"What was called for was a way to collect such static metadata outside of the run context. "),(0,M.kt)("h4",{id:"what-use-cases-are-served-by-static-lineage"},"What Use Cases are Served by Static Lineage?"),(0,M.kt)("p",null,"Use cases include:"),(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"bootstrapping of a lineage graph with prospective runs for auditing"),(0,M.kt)("li",{parentName:"ul"},"capturing dataset ownership changes "),(0,M.kt)("li",{parentName:"ul"},"consuming facets from external systems"),(0,M.kt)("li",{parentName:"ul"},"creating dataset symlinks more easily")),(0,M.kt)("h4",{id:"implementation-details"},"Implementation Details"),(0,M.kt)("p",null,"In order to add static lineage to the spec, two new event types were proposed: ",(0,M.kt)("inlineCode",{parentName:"p"},"DatasetEvent")," and ",(0,M.kt)("inlineCode",{parentName:"p"},"JobEvent"),"."),(0,M.kt)("p",null,"These new events will add facets at a point in time that will apply to an entity until a new version of the same facet is produced. "),(0,M.kt)("p",null,"The first step in implementing static lineage was completed with the release of ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/releases/tag/0.29.2"},"OpenLineage 0.29.2"),', which included two types in the spec for "runless" metadata: a ',(0,M.kt)("inlineCode",{parentName:"p"},"DatasetEvent")," and ",(0,M.kt)("inlineCode",{parentName:"p"},"JobEvent")," (along with support for the new types in the Python client)."),(0,M.kt)("p",null,"The next steps will include changing the event lifecycle (from running to complete, failed, or aborted) to handle events of the new types, and adding facet deletion to handle the case in which a user adds and deletes a dataset in the same request."),(0,M.kt)("p",null,"Adding support for static lineage in Marquez is also ongoing, and we are excited about the progress there. ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/releases/tag/0.37.0"},"Marquez 0.37.0")," includes support in the API for decoding static events via a new ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez/pull/2495"},(0,M.kt)("inlineCode",{parentName:"a"},"EventTypeResolver")),"."),(0,M.kt)("h4",{id:"more-information"},"More Information"),(0,M.kt)("p",null,"For more details including the code changes, see:"),(0,M.kt)("ul",null,(0,M.kt)("li",{parentName:"ul"},"the ",(0,M.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/proposals/1837/static_lineage.md"},"static lineage proposal")," by Julien Le Dem, Maciej Obuchowski, Benji Lampel and Ross Turk "),(0,M.kt)("li",{parentName:"ul"},"the initial ",(0,M.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1880"},"pull request")," by Pawe\u0142 Leszczy\u0144ski")))}u.isMDXComponent=!0},4142:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDE2MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1ZjdmMzA7fS5jbHMtMntmaWxsOnJnYmEoMTI2LDE0MCwxMzcsLjUpO30uY2xzLTN7ZmlsbDpyZ2JhKDEwMSwxNDIsMzksLjUpO30uY2xzLTR7ZmlsbDpyZ2JhKDE1MiwxOTEsNTMsLjUpO30uY2xzLTV7ZmlsbDpyZ2JhKDEzMiwxNjcsNDMsLjUpO30uY2xzLTZ7ZmlsbDpyZ2JhKDE0MCwxNzksNjksLjUpO30uY2xzLTd7ZmlsbDpyZ2JhKDE0MSwxODAsNTUsLjUpO30uY2xzLTh7ZmlsbDpyZ2JhKDY4LDg1LDUzLC41KTt9LmNscy05e2ZpbGw6cmdiYSg2MSw4OCwzMywuNSk7fS5jbHMtMTB7ZmlsbDpyZ2JhKDcyLDExNCwzNywuNSk7fS5jbHMtMTF7ZmlsbDpyZ2JhKDU2LDg1LDE5LC41KTt9LmNscy0xMntmaWxsOnJnYmEoNTEsOTAsMjksLjUpO30uY2xzLTEze2ZpbGw6cmdiYSg3NSwxMDcsMjAsLjUpO30uY2xzLTE0e2ZpbGw6cmdiYSg2OSwxMDIsMzcsLjUpO30uY2xzLTE1e2ZpbGw6cmdiYSg5MywxMTIsNTksLjUpO30uY2xzLTE2e2ZpbGw6cmdiYSgxMjIsMTY2LDQ4LC41KTt9LmNscy0xN3tmaWxsOnJnYmEoMTIyLDE1OSw0NSwuNSk7fS5jbHMtMTh7ZmlsbDpub25lO2ZpbHRlcjp1cmwoI2cwLjYpO30uY2xzLTE5e2ZpbGw6IzdmYWMyNztvcGFjaXR5Oi41O308L3N0eWxlPjxmaWx0ZXIgaWQ9ImcwLjYiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuNiIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ii0xMjQuNzUiIHk9Ii0xNDkuODciIHdpZHRoPSI5MTkuNSIgaGVpZ2h0PSI0NTkuNzUiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xMzUuMDEsMTE2Ljc4bDEyMS44MywzMzMuMzIsNTcyLjM5LTIxMS40OC0xMjEuODMtMzMzLjMyTDEzNS4wMSwxMTYuNzhaIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJtODYuNzMsNDMuMjJsLTczNy45LDE1Ni4zMSwzMi4xOCwxNDcuMTJMMTE2LjYyLDE5MC4zNGwtMjkuODgtMTQ3LjEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0ibS0yMS4zMSw4Ljc0TDIwMS42Ny0zMC4zNGwtMjcuNTgtMTUxLjcyLTIyMi45OCwzNi43OEwtMjEuMzEsOC43NFoiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Im0xMy4xNyw2OC41MWwyNS4yOSw4Ny4zNUw0NzUuMjIsMjIuNTNsLTI1LjI5LTg3LjM1TDEzLjE3LDY4LjUxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMTAiIGQ9Im01MzcuMjksMTA5Ljg4bC0zNzQuNywxNDcuMTIsMjIyLjk4LDU2MC44OSwzNzQuNy0xNDcuMTJMNTM3LjI5LDEwOS44OFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0zMDAuNTIsNjEuNjFsLTYyLjA3LDE3MC4xMSw2Ni42NiwyMi45OSw2Mi4wNy0xNzAuMTEtNjYuNjYtMjIuOTlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNTQxLjg5LDEyMS4zOGw0NS45Ny0yMC42OS0yNy41OC02NC4zNi00NS45NywyMC42OSwyNy41OCw2NC4zNloiLz48cGF0aCBjbGFzcz0iY2xzLTE3IiBkPSJtMzAyLjgyLDEyMS4zOGwxMjEuODMsMjA5LjE5LDY0LjM2LTM5LjA4LTEyMS44My0yMDkuMTktNjQuMzYsMzkuMDhaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJtNTgzLjI2LTk0LjcxbC02Mi4wNywxMTcuMjQsMTAxLjE0LDUwLjU3LDYyLjA3LTExNy4yNC0xMDEuMTQtNTAuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xNSIgZD0ibTE5OS4zNy0xMDYuMkwzOTkuMzYsNjMuOTFsMjUwLjU2LTI5MS45NC0xOTkuOTktMTcwLjExTDE5OS4zNy0xMDYuMloiLz48cGF0aCBjbGFzcz0iY2xzLTEyIiBkPSJtNDA2LjI2LDE1MS4yNmwtNTkuNzctNi45LTI3LjU4LDMxNC45Myw1OS43Nyw2LjksMjcuNTgtMzE0LjkzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMTQiIGQ9Im0tMTQuNDEsMjI3LjEybDg3LjM1LDU5Ljc3TDMyNS44LTkwLjExbC04Ny4zNS01OS43N0wtMTQuNDEsMjI3LjEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0ibTExNC4zMiwyMjIuNTJsMTMuNzksNDEuMzgsMjIwLjY4LTgwLjQ2LTEzLjc5LTQxLjM4LTIyMC42OCw4MC40NloiLz48ZyBjbGFzcz0iY2xzLTE4Ij48cG9seWdvbiBjbGFzcz0iY2xzLTE5IiBwb2ludHM9IjM2OS40OCA0My4yMiAxNzQuMDkgMTA5Ljg4IDIwOC41NyAyMDYuNDMgNDAzLjk2IDEzOS43NyAzNjkuNDggNDMuMjIiLz48L2c+PHBhdGggY2xhc3M9ImNscy0xMyIgZD0ibTU2Ny4xNywyNC44M2wzOTcuNjgsMzYzLjIsMjUuMjktMjkuODhMNTkyLjQ2LTUuMDVsLTI1LjI5LDI5Ljg4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTYiIGQ9Im03Mi45NCw0MC45MmwxMDMuNDQtNi45LTExLjQ5LTE3NC43LTEwMy40NCw2LjksMTEuNDksMTc0LjdaIi8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0ibTQ0Ny42NC0zNy4yNGwtMi4zLDkuMTksMzAxLjE0LDU1LjE3LDIuMy05LjE5LTMwMS4xNC01NS4xN1oiLz48L3N2Zz4="},9904:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcwIDQ4MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM1ZjdmMzA7fS5jbHMtMntmaWxsOnJnYmEoMTI2LDE0MCwxMzcsLjUpO30uY2xzLTN7ZmlsbDpyZ2JhKDEwMSwxNDIsMzksLjUpO30uY2xzLTR7ZmlsbDpyZ2JhKDE1MiwxOTEsNTMsLjUpO30uY2xzLTV7ZmlsbDpyZ2JhKDEzMiwxNjcsNDMsLjUpO30uY2xzLTZ7ZmlsbDpyZ2JhKDE0MCwxNzksNjksLjUpO30uY2xzLTd7ZmlsbDpyZ2JhKDE0MSwxODAsNTUsLjUpO30uY2xzLTh7ZmlsbDpyZ2JhKDY2LDkyLDM0LC41KTt9LmNscy05e2ZpbGw6cmdiYSg2OCw4NSw1MywuNSk7fS5jbHMtMTB7ZmlsbDpyZ2JhKDYxLDg4LDMzLC41KTt9LmNscy0xMXtmaWxsOnJnYmEoMTQ5LDE5Miw2MSwuNSk7fS5jbHMtMTJ7ZmlsbDpyZ2JhKDcyLDExNCwzNywuNSk7fS5jbHMtMTN7ZmlsbDpyZ2JhKDU2LDg1LDE5LC41KTt9LmNscy0xNHtmaWxsOnJnYmEoNTEsOTAsMjksLjUpO30uY2xzLTE1e2ZpbGw6cmdiYSg3NSwxMDcsMjAsLjUpO30uY2xzLTE2e2ZpbGw6cmdiYSg2OSwxMDIsMzcsLjUpO30uY2xzLTE3e2ZpbGw6cmdiYSg5MywxMTIsNTksLjUpO30uY2xzLTE4e2ZpbGw6cmdiYSgxMjIsMTY2LDQ4LC41KTt9LmNscy0xOXtmaWxsOnJnYmEoMTIyLDE1OSw0NSwuNSk7fS5jbHMtMjB7ZmlsdGVyOnVybCgjZzEpO30uY2xzLTIwLC5jbHMtMjF7ZmlsbDpub25lO30uY2xzLTIxe2ZpbHRlcjp1cmwoI2cwLjYpO30uY2xzLTIye2ZpbGw6IzljYjQ0Yzt9LmNscy0yMiwuY2xzLTIze29wYWNpdHk6LjU7fS5jbHMtMjN7ZmlsbDojN2ZhYzI3O308L3N0eWxlPjxmaWx0ZXIgaWQ9ImcxIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZzAuNiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC42Ii8+PC9maWx0ZXI+PC9kZWZzPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjY3MCIgaGVpZ2h0PSI0ODAiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xMzUuMDEsMjc2Ljc4bDEyMS44MywzMzMuMzIsNTcyLjM5LTIxMS40OC0xMjEuODMtMzMzLjMyTDEzNS4wMSwyNzYuNzhaIi8+PHBhdGggY2xhc3M9ImNscy05IiBkPSJtODYuNzQsMjAzLjIybC03MzcuOSwxNTYuMzEsMzIuMTgsMTQ3LjEyTDExNi42MiwzNTAuMzRsLTI5Ljg4LTE0Ny4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Im0tMjEuMzEsMTY4Ljc0bDIyMi45OC0zOS4wOC0yNy41OC0xNTEuNzJMLTQ4Ljg5LDE0LjcybDI3LjU4LDE1NC4wMloiLz48cGF0aCBjbGFzcz0iY2xzLTEwIiBkPSJtMTMuMTgsMjI4LjUxbDI1LjI5LDg3LjM1LDQzNi43Ni0xMzMuMzMtMjUuMjktODcuMzVMMTMuMTgsMjI4LjUxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMTIiIGQ9Im01MzcuMjksMjY5Ljg4bC0zNzQuNywxNDcuMTIsMjIyLjk4LDU2MC44OSwzNzQuNy0xNDcuMTItMjIyLjk4LTU2MC44OVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0zMDAuNTIsMjIxLjYxbC02Mi4wNywxNzAuMTEsNjYuNjYsMjIuOTksNjIuMDctMTcwLjExLTY2LjY2LTIyLjk5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTU0MS44OSwyODEuMzhsNDUuOTctMjAuNjktMjcuNTgtNjQuMzYtNDUuOTcsMjAuNjksMjcuNTgsNjQuMzZaIi8+PHBhdGggY2xhc3M9ImNscy0xOSIgZD0ibTMwMi44MiwyODEuMzhsMTIxLjgzLDIwOS4xOSw2NC4zNi0zOS4wOC0xMjEuODMtMjA5LjE5LTY0LjM2LDM5LjA4WiIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0ibTU1NS42OCw5Mi44OGwyNzEuMjUsNjIuMDcsNi45LTM0LjQ4LTI3MS4yNS02Mi4wNy02LjksMzQuNDhaIi8+PHBhdGggY2xhc3M9ImNscy01IiBkPSJtNTgzLjI2LDY1LjNsLTYyLjA3LDExNy4yNCwxMDEuMTQsNTAuNTcsNjIuMDctMTE3LjI0LTEwMS4xNC01MC41N1oiLz48cGF0aCBjbGFzcz0iY2xzLTE3IiBkPSJtMTk5LjM3LDUzLjhsMTk5Ljk5LDE3MC4xMSwyNTAuNTYtMjkxLjk0LTE5OS45OS0xNzAuMTFMMTk5LjM3LDUzLjhaIi8+PHBhdGggY2xhc3M9ImNscy0xNCIgZD0ibTQwNi4yNiwzMTEuMjZsLTU5Ljc3LTYuOS0yNy41OCwzMTQuOTMsNTkuNzcsNi45LDI3LjU4LTMxNC45M1oiLz48ZyBjbGFzcz0iY2xzLTIwIj48cG9seWdvbiBjbGFzcz0iY2xzLTIyIiBwb2ludHM9IjUyMy41IDQ0LjYxIDY0OS45MyA0OS4yIDY2OC4zMiAtNDc5LjUxIDU0MS44OSAtNDg0LjExIDUyMy41IDQ0LjYxIi8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMTYiIGQ9Im0tMTQuNDEsMzg3LjEybDg3LjM1LDU5Ljc3TDMyNS44MSw2OS44OSwyMzguNDUsMTAuMTMtMTQuNDEsMzg3LjEyWiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0ibTExNC4zMiwzODIuNTJsMTMuNzksNDEuMzgsMjIwLjY4LTgwLjQ2LTEzLjc5LTQxLjM4LTIyMC42OCw4MC40NloiLz48ZyBjbGFzcz0iY2xzLTIxIj48cG9seWdvbiBjbGFzcz0iY2xzLTIzIiBwb2ludHM9IjM2OS40OCAyMDMuMjIgMTc0LjA5IDI2OS44OCAyMDguNTcgMzY2LjQzIDQwMy45NiAyOTkuNzcgMzY5LjQ4IDIwMy4yMiIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTE1IiBkPSJtNTY3LjE3LDE4NC44M2wzOTcuNjgsMzYzLjIsMjUuMjktMjkuODgtMzk3LjY4LTM2My4yLTI1LjI5LDI5Ljg4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTEiIGQ9Im0yMi4zNyw5NS4xOGwyMC42OSwzMi4xOCw1OTkuOTctMzg4LjQ5LTIwLjY5LTMyLjE4TDIyLjM3LDk1LjE4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTgiIGQ9Im03Mi45NCwyMDAuOTJsMTAzLjQ0LTYuOS0xMS40OS0xNzQuNy0xMDMuNDQsNi45LDExLjQ5LDE3NC43WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTMiIGQ9Im00NDcuNjQsMTIyLjc2bC0yLjMsOS4xOSwzMDEuMTQsNTUuMTcsMi4zLTkuMTktMzAxLjE0LTU1LjE3WiIvPjwvc3ZnPg=="}}]);