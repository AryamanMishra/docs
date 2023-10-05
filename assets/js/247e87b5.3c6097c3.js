"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(u,l(l({ref:t},m),{},{components:a})):n.createElement(u,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"1.2.2",sidebar_position:1},l="1.2.2 - 2023-09-20",o={unversionedId:"releases/1_2_2",id:"releases/1_2_2",title:"1.2.2",description:"Added",source:"@site/docs/releases/1_2_2.md",sourceDirName:"releases",slug:"/releases/1_2_2",permalink:"/docs/releases/1_2_2",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_2_2.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1.2.2",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SQL parser",permalink:"/docs/development/sql"},next:{title:"1.1.0",permalink:"/docs/releases/1_1_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3},{value:"Removed",id:"removed",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"122---2023-09-20"},"1.2.2 - 2023-09-20"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: publish the ",(0,r.kt)("inlineCode",{parentName:"strong"},"ProcessingEngineRunFacet")," as part of the normal operation of the ",(0,r.kt)("inlineCode",{parentName:"strong"},"OpenLineageSparkEventListener"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2089"},(0,r.kt)("inlineCode",{parentName:"a"},"#2089"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Publishes the spec-defined ",(0,r.kt)("inlineCode",{parentName:"em"},"ProcessEngineRunFacet")," alongside the custom ",(0,r.kt)("inlineCode",{parentName:"em"},"SparkVersionFacet")," (for now)."),(0,r.kt)("em",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"SparkVersionFacet")," is deprecated and will be removed in a future release.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: capture and emit ",(0,r.kt)("inlineCode",{parentName:"strong"},"spark.databricks.clusterUsageTags.clusterAllTags")," variable from databricks environment")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2099"},(0,r.kt)("inlineCode",{parentName:"a"},"#2099"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Anirudh181001"},"@Anirudh181001"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds ",(0,r.kt)("inlineCode",{parentName:"em"},"spark.databricks.clusterUsageTags.clusterAllTags")," to the list of environment variables captured from databricks."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Common: support parsing dbt_project.yml without target-path")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2106"},(0,r.kt)("inlineCode",{parentName:"a"},"#2106"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tatiana"},"@tatiana"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"As of dbt v1.5, usage of target-path in the dbt_project.yml file has been deprecated, now preferring a CLI flag or env var. It will be removed in a future version. This allows users to run ",(0,r.kt)("inlineCode",{parentName:"em"},"DbtLocalArtifactProcessor")," in dbt projects that do not declare target-path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy: fix Proxy chart")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2091"},(0,r.kt)("inlineCode",{parentName:"a"},"#2091"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harels"},"@harels"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Includes the proper image to deploy in the helm chart.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python: fix serde filtering")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2044"},(0,r.kt)("inlineCode",{parentName:"a"},"#2044"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/xli-1026"},"@xli-1026"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes the bug causing values in list objects to be filtered accidentally.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python: use non-deprecated ",(0,r.kt)("inlineCode",{parentName:"strong"},"apiKey")," if loading it from env variables")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2029"},(0,r.kt)("inlineCode",{parentName:"a"},"@2029"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Changes ",(0,r.kt)("inlineCode",{parentName:"em"},"api_key")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"apiKey")," in ",(0,r.kt)("inlineCode",{parentName:"em"},"create_token_provider"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Improve RDDs on S3 integration.")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2039"},(0,r.kt)("inlineCode",{parentName:"a"},"#2039"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Prepares integration test to access S3, fixes input dataset duplicates and includes other minor fixes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: prevent sending ",(0,r.kt)("inlineCode",{parentName:"strong"},"running")," events after job completes")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2075"},(0,r.kt)("inlineCode",{parentName:"a"},"#2075"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Flink checkpoint tracking thread was not getting stopped properly on job complete.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark & Flink: Unify dataset naming from URI objects")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2083"},(0,r.kt)("inlineCode",{parentName:"a"},"#2083"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Makes sure Spark and Flink generate same dataset identifiers for the same datasets by having a single implementation to generate dataset namespace and name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Databricks improvements")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2076"},(0,r.kt)("inlineCode",{parentName:"a"},"#2076"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Filters unwanted events on databricks and adds an integration test to verify this. Adds integration tests to verify dataset naming on databricks runtime is correct when table location is specified. Adds integration test for wide transformation on delta tables."))),(0,r.kt)("h3",{id:"removed"},"Removed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL: remove sqlparser dependency from iface-java and iface-py")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2090"},(0,r.kt)("inlineCode",{parentName:"a"},"#2090"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes the dependency due to a breaking change in the latest release of the parser."))))}d.isMDXComponent=!0}}]);