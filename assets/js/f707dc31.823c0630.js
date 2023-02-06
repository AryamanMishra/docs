"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=i,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3977:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={title:"0.19.2",sidebar_position:1},l="0.20.0 - 2023-2-6",o={unversionedId:"releases/0_20_0",id:"releases/0_20_0",title:"0.19.2",description:"Added",source:"@site/docs/releases/0_20_0.md",sourceDirName:"releases",slug:"/releases/0_20_0",permalink:"/docs/releases/0_20_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_20_0.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"0.19.2",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SQL parser",permalink:"/docs/development/sql"},next:{title:"0.19.2",permalink:"/docs/releases/0_19_2"}},p={},m=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],s={toc:m};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0200---2023-2-6"},"0.20.0 - 2023-2-6"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Airflow: add new extractor for ",(0,i.kt)("inlineCode",{parentName:"li"},"GCSToGCSOperator")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1495"},(0,i.kt)("inlineCode",{parentName:"a"},"#1495"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds a new extractor for this operator.")),(0,i.kt)("li",{parentName:"ul"},"Flink: resolve topic names from regex, support 1.16.0 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1522"},(0,i.kt)("inlineCode",{parentName:"a"},"#1522"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds support for Flink 1.16.0 and makes the integration resolve topic names from Kafka topic patterns.")),(0,i.kt)("li",{parentName:"ul"},"Proxy: implement lineage event validator for client proxy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1469"},(0,i.kt)("inlineCode",{parentName:"a"},"#1469"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fm100"},"@fm100"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Implements logic in the proxy (which is still in development) for validating and handling lineage events."))),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CI: use ",(0,i.kt)("inlineCode",{parentName:"li"},"ruff")," instead of flake8, isort, etc., for linting and formatting ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1526"},(0,i.kt)("inlineCode",{parentName:"a"},"#1526"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adopts the ",(0,i.kt)("inlineCode",{parentName:"em"},"ruff")," package, which combines several linters and formatters into one fast binary."))),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Airflow: make the Trino catalog non-mandatory ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1572"},(0,i.kt)("inlineCode",{parentName:"a"},"#1572"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Makes the Trino catalog optional in the Trino extractor.")),(0,i.kt)("li",{parentName:"ul"},"Common: add explicit SQL dependency ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1532"},(0,i.kt)("inlineCode",{parentName:"a"},"#1532"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Addresses a 0.19.2 breaking change to the GE integration by including the SQL dependency explicitly.")),(0,i.kt)("li",{parentName:"ul"},"DBT: adjust ",(0,i.kt)("inlineCode",{parentName:"li"},"tqdm")," logging in ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt-ol")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1549"},(0,i.kt)("inlineCode",{parentName:"a"},"#1549"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JdarDagran"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adjusts ",(0,i.kt)("inlineCode",{parentName:"em"},"tqdm")," to show the correct number of iterations and adds START events for parent runs.")),(0,i.kt)("li",{parentName:"ul"},"DBT: fix typo in log output ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1493"},(0,i.kt)("inlineCode",{parentName:"a"},"#1493"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/denimalpaca"},"@denimalpaca"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Fixes 'emittled' typo in log output.")),(0,i.kt)("li",{parentName:"ul"},"Great Expectations/Airflow: follow Snowflake dataset naming rules ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1527"},(0,i.kt)("inlineCode",{parentName:"a"},"#1527"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Normalizes Snowflake dataset and datasource naming rules among DBT/Airflow/GE; canonizes old Snowflake account paths around making them all full-size with account, region and cloud names.")),(0,i.kt)("li",{parentName:"ul"},"Java and Python Clients: Kafka does not initialize properties if they are empty; check and notify about Confluent-Kafka requirement ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1556"},(0,i.kt)("inlineCode",{parentName:"a"},"#1556"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Fixes the failure to initialize ",(0,i.kt)("inlineCode",{parentName:"em"},"KafkaTransport")," in the Java client and adds an exception if the required ",(0,i.kt)("inlineCode",{parentName:"em"},"confluent-kafka")," module is missing from the Python client.")),(0,i.kt)("li",{parentName:"ul"},"Spark: add square brackets for list-based Spark configs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1507"},(0,i.kt)("inlineCode",{parentName:"a"},"#1507"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Varunvaruns9"},"@Varunvaruns9"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Adds a condition to treat configs with ",(0,i.kt)("inlineCode",{parentName:"em"},"[]")," as lists. Note: ",(0,i.kt)("inlineCode",{parentName:"em"},"[]")," will be required for list-based configs starting with 0.21.0.")),(0,i.kt)("li",{parentName:"ul"},"Spark: fix several Spark/BigQuery-related issues ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1557"},(0,i.kt)("inlineCode",{parentName:"a"},"#1557"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Fixes the assumption that a version is always a number; adds support for ",(0,i.kt)("inlineCode",{parentName:"em"},"HadoopMapReduceWriteConfigUtil"),"; makes the integration access ",(0,i.kt)("inlineCode",{parentName:"em"},"BigQueryUtil")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"getTableId")," using reflection, which supports all BigQuery versions; makes logs provide the full serialized LogicalPlan on ",(0,i.kt)("inlineCode",{parentName:"em"},"debug"),".")),(0,i.kt)("li",{parentName:"ul"},"SQL: only report partial failures ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1479"},"`#1479")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},"Changes the parser so it reports partial failures instead of failing the whole extraction."))))}u.isMDXComponent=!0}}]);