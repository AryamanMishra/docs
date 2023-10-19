"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?o.createElement(m,r(r({ref:t},c),{},{components:a})):o.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const i={title:"Microsoft Purview Accelerates Lineage Extraction from Azure Databricks",date:new Date("2022-06-14T00:00:00.000Z"),authors:["Sugunan","Johnson","Robinson"],description:"A new collaboration between Microsoft and OpenLineage is making lineage extraction possible for Azure Databricks and Microsoft Purview users."},r=void 0,s={permalink:"/blog/openlineage-microsoft-purview",source:"@site/blog/openlineage-microsoft-purview/index.mdx",title:"Microsoft Purview Accelerates Lineage Extraction from Azure Databricks",description:"A new collaboration between Microsoft and OpenLineage is making lineage extraction possible for Azure Databricks and Microsoft Purview users.",date:"2022-06-14T00:00:00.000Z",formattedDate:"June 14, 2022",tags:[],readingTime:7.66,hasTruncateMarker:!0,authors:[{name:"Chandru Sugunan",title:"Guest Blogger and OpenLineage Contributor",key:"Sugunan"},{name:"Will Johnson",title:"Guest Blogger and OpenLineage Committer",key:"Johnson"},{name:"Michael Robinson",title:"OpenLineage Community Manager",url:"https://github.com/merobi-hub",imageURL:"https://github.com/merobi-hub.png",key:"Robinson"}],frontMatter:{title:"Microsoft Purview Accelerates Lineage Extraction from Azure Databricks",date:"2022-06-14T00:00:00.000Z",authors:["Sugunan","Johnson","Robinson"],description:"A new collaboration between Microsoft and OpenLineage is making lineage extraction possible for Azure Databricks and Microsoft Purview users."},prevItem:{title:"The Python Client -- the Foundation of OpenLineage Integrations",permalink:"/blog/python-client"},nextItem:{title:"Data Lineage with Snowflake",permalink:"/blog/openlineage-snowflake"}},l={authorsImageUrls:[void 0,void 0,void 0]},u=[{value:"Summary",id:"summary",level:3},{value:"What is Microsoft Purview?",id:"what-is-microsoft-purview",level:3},{value:"Data Lineage in Microsoft Purview",id:"data-lineage-in-microsoft-purview",level:3},{value:"OpenLineage + Microsoft",id:"openlineage--microsoft",level:3},{value:"A History of Contributions to OpenLineage",id:"a-history-of-contributions-to-openlineage",level:4},{value:"Why Contribute to OpenLineage?",id:"why-contribute-to-openlineage",level:3},{value:"About the Solution",id:"about-the-solution",level:3},{value:"Getting Started with Microsoft Purview",id:"getting-started-with-microsoft-purview",level:2},{value:"What the Future Holds",id:"what-the-future-holds",level:3},{value:"Acknowledging the Contributors",id:"acknowledging-the-contributors",level:3}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A new collaboration between Microsoft and OpenLineage is making lineage extraction possible for Azure Databricks and Microsoft Purview users."),(0,n.kt)("p",null,"A new collaboration between Microsoft and OpenLineage is making lineage extraction possible for Azure Databricks and Microsoft Purview users. Thanks to a robust OpenLineage Spark integration, users can both extract and visualize lineage from their Databricks notebooks and jobs inside Microsoft Purview. This blog post shares the history and future of this exciting open-source project, describes the solution, and shows you how to get started. "),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/purview/"},"Microsoft Purview")," provides a comprehensive platform to populate native and custom data lineage metadata from on-prem, OSS, SaaS, and multi-cloud data systems. "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator"},"Azure Databricks to Microsoft Purview Solution Accelerator")," takes advantage of the robust Spark integration inside ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage"},"OpenLineage")," and translates OpenLineage events into Microsoft Purview native assets supporting:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Azure Data Lake Gen 2"),(0,n.kt)("li",{parentName:"ul"},"Azure Blob Storage"),(0,n.kt)("li",{parentName:"ul"},"Azure SQL"),(0,n.kt)("li",{parentName:"ul"},"Azure Synapse SQL Pools"))),(0,n.kt)("li",{parentName:"ul"},"Customers of Azure Databricks and Microsoft Purview can ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator"},"try the solution today")," by following the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator/blob/main/deploy-demo.md"},"demo instructions")," or ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator/blob/main/deploy-base.md"},"connector only instructions"),".")),(0,n.kt)("h3",{id:"what-is-microsoft-purview"},"What is Microsoft Purview?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/purview/overview"},"Microsoft Purview")," provides an ambient data governance solution that helps you unify and manage your data wherever it exists \u2013 on-premises, in the cloud, or on a software-as-a-service (SaaS) platform. With Microsoft Purview, you can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"create a holistic, up-to-date map of your data landscape with automated data discovery, sensitive data classification, and end-to-end data lineage."),(0,n.kt)("li",{parentName:"ul"},"enable data curators to manage and secure your data estate."),(0,n.kt)("li",{parentName:"ul"},"empower data consumers to find valuable, trustworthy data.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"High-level overview",src:a(5691).Z,width:"1200",height:"481"}),"\nFigure 1. Microsoft Purview is an ambient data governance platform for an enterprise."),(0,n.kt)("p",null,"Microsoft Purview automates data discovery by providing data scanning and classification as a service for assets across your data estate. Microsoft Purview integrates metadata and descriptions of discovered data assets into a holistic map of your data ecosystem. Layered on this map are purpose-built apps that create environments for data discovery, policy management, and insights into your data landscape."),(0,n.kt)("h3",{id:"data-lineage-in-microsoft-purview"},"Data Lineage in Microsoft Purview"),(0,n.kt)("p",null,"Organizations need data to conduct business, and they need trustworthy data to perform analysis and make key decisions. Data lineage and provenance provide insights into data pedigree, which relates to operational information, runtime analysis, historical lineage, and ownership information. Users rely on pedigree when taking insights from data. Critical scenarios involving root cause analysis, impact analysis, quality control, compliance, and audit tracing are served by data lineage and provenance."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/purview/catalog-lineage-user-guide"},"Data Lineage")," in Microsoft Purview is a core platform capability that populates the Microsoft Purview Data Map with data movement and transformations across systems. With the backing of ",(0,n.kt)("a",{parentName:"p",href:"https://atlas.apache.org/#/"},"Apache Atlas 2.2"),", lineage is captured as it flows in the enterprise and stitched without gaps irrespective of its source. Data lineage in Microsoft Purview enables data analysts and data stewards to conduct root cause analysis, troubleshoot, and perform impact analysis of data moving upstream and downstream in data estates. With a combined platform and interactive lineage visualization tool, data investigations related to quality, trust, and compliance can be self-served in a few clicks rather than requested from a third party."),(0,n.kt)("p",null,"Microsoft Purview has native data lineage support for ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/purview/catalog-lineage-user-guide#lineage-collection"},"20+ sources"),", many of which are integrated at engine runtimes. For example, data lineage is pushed from Azure Data Factory when pipelines are run. This deep integration allows Microsoft Purview to capture operational metadata such as job start/end times, the number of rows impacted, job run status and more. In addition to native support, the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/purview/catalogdataplane/lineage"},"open APIs")," can be used to integrate with enterprise systems to support custom lineage."),(0,n.kt)("img",{src:"./screenshot.gif",style:{padding:"3rem"}}),(0,n.kt)("p",null,"Figure 2. Native data lineage visualization in Microsoft Purview."),(0,n.kt)("h3",{id:"openlineage--microsoft"},"OpenLineage + Microsoft"),(0,n.kt)("p",null,"This integration came about because Microsoft Purview sought a lineage solution for Azure Databricks users, ideally one that would support all Azure data repository types, from Azure Blob Storage to Azure SQL. The team that took on this challenge was the Early Access Engineering (EAE) team, a group of data experts at Microsoft who forge competitive differentiation and value by using groundbreaking technology and features before they become available to the general enterprise landscape. "),(0,n.kt)("h4",{id:"a-history-of-contributions-to-openlineage"},"A History of Contributions to OpenLineage"),(0,n.kt)("p",null,"The EAE team at Microsoft has a long history of contributions to open source projects in general and to OpenLineage in particular. In December of 2021, Will Johnson contributed a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/425"},"PR")," to OpenLineage to add support for arbitrary parameters in the OpenLineage URL. This change supported key-based authentication via URL and eased the process of sending metadata from OpenLineage to repositories other than ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject"},"Marquez"),", OpenLineage\u2019s sister project. This in turn supported additional integrations and collaboration and has helped to increase adoption of the OpenLineage standard."),(0,n.kt)("p",null,"Over the course of seven months, the Microsoft team contributed eight pull requests to enable:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"better support for the Azure Blob File System (Azure Data Lake Gen 2)."),(0,n.kt)("li",{parentName:"ul"},"use of an Azure Function as the lineage endpoint."),(0,n.kt)("li",{parentName:"ul"},"lineage extraction for ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/azure/synapse-analytics"},"Azure Synapse")," as a data source."),(0,n.kt)("li",{parentName:"ul"},"extraction of Databricks environment properties such as notebook paths and job ids.")),(0,n.kt)("p",null,"Contributing open source integrations to OpenLineage benefits not only Microsoft Purview but also the data landscape as a whole. Collaborations like this one help increase adoption of the OpenLineage standard across the industry, which gets us closer to the single standard we need for consistently powerful and reliable lineage across the wide diversity of tooling in today\u2019s data pipelines.  "),(0,n.kt)("p",null,"At Microsoft, this kind of work is not unique to the EAE team. Across the company, cross-functional, community-driven teams foster innovation through open source collaboration."),(0,n.kt)("h3",{id:"why-contribute-to-openlineage"},"Why Contribute to OpenLineage?"),(0,n.kt)("p",null,"Most enterprise data environments are convoluted, with data systems spread across on-prem, multi-cloud, SaaS, and open-source platforms. The data moves between a variety of storage, processing, analytical, and SaaS data systems. Azure Databricks is one such data system in an enterprise with a lakehouse platform in the cloud that combines data warehouses and data lakes to offer an open and unified platform for data and AI. Microsoft Purview customers have long asked for the ability to populate and govern Azure Databricks assets in the Microsoft Purview DataMap. With OpenLineage, we are bringing runtime Data Lineage capture from Azure Databricks Spark workloads to Microsoft Purview. "),(0,n.kt)("p",null,"In addition, by contributing to OpenLineage, Microsoft can offer users of OpenLineage on other platforms the ability to represent metadata models of Microsoft data sources accurately in their lineage graphs. For example, users of Spark on any other platform can represent the metadata models of Microsoft data sources more accurately."),(0,n.kt)("p",null,"Lastly, OpenLineage benefits from Microsoft\u2019s contributions as they will add hundreds if not thousands of new users to the OpenLineage standard. This will spur more  contributions by the OpenLineage community as more users request that new implementations and features be added to the specification."),(0,n.kt)("h3",{id:"about-the-solution"},"About the Solution"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Flow of metadata using OpenLineage",src:a(5620).Z,width:"666",height:"164"}),"\nFigure 3. The flow of metadata from Azure Databricks to Microsoft Purview using OpenLineage."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An Azure administrator deploys an Azure Function (serverless C# application) and an Event Hub (to store OpenLineage events) by running a deployment script."),(0,n.kt)("li",{parentName:"ol"},"An administrator configures a Databricks cluster as per the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/spark/databricks"},"OpenLineage install instructions")," along with the Azure Function key and OpenLineage host pointing to the Azure Function."),(0,n.kt)("li",{parentName:"ol"},"The OpenLineage Spark jar extracts the necessary inputs and outputs and emits them to the Azure Function."),(0,n.kt)("li",{parentName:"ol"},"The Azure Functions transform the OpenLineage payload and push lineage to Microsoft Purview through the Apache Atlas REST APIs."),(0,n.kt)("li",{parentName:"ol"},"Databricks Lineage is then visible inside Microsoft Purview!")),(0,n.kt)("h2",{id:"getting-started-with-microsoft-purview"},"Getting Started with Microsoft Purview"),(0,n.kt)("div",{style:{backgroundColor:"rgb(211, 211, 211)",padding:"15px 15px 5px 15px"}},"Quickly and easily create a ",(0,n.kt)("a",{href:"https://azure.microsoft.com/en-us/services/purview/#get-started"},"Microsoft Purview")," account to explore the new features.",(0,n.kt)("p",null,"Try out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator"},"Azure Databricks to Microsoft Purview Solution Accelerator"),"."),(0,n.kt)("p",null,"Learn how to ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=pLF0iykhruY&feature=youtu.be"},"deploy the solution"),".")),(0,n.kt)("h3",{id:"what-the-future-holds"},"What the Future Holds"),(0,n.kt)("p",null,"Microsoft plans to continue contributing to OpenLineage to ensure that users can extract lineage from additional Azure data sources such as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/data-explorer/spark-connector"},"Azure Data Explorer (Kusto)"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/sql/create-sql-api-spark"},"Azure Cosmos DB"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/databricks/spark/latest/structured-streaming/streaming-event-hubs"},"Azure Event Hubs"),", and that OpenLineage continues to perform well on Azure Databricks."),(0,n.kt)("p",null,"In addition, Microsoft plans to keep up-to-date with advancements made by the OpenLineage community, such as the exciting recent contribution of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/pull/698"},"column-level lineage")," to the project."),(0,n.kt)("h3",{id:"acknowledging-the-contributors"},"Acknowledging the Contributors"),(0,n.kt)("p",null,"The OpenLineage Spark integration is the product of hard work by teams inside and outside Microsoft."),(0,n.kt)("p",null,"Contributors from the Microsoft Early Access Engineering team include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mark Taylor, Principal Technical Specialist (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Marktayl1"},"@marktayl1"),")"),(0,n.kt)("li",{parentName:"ul"},"Will Johnson, Global Black Belt - Big Data, Analytics, and ML Specialist (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wjohnson"},"@wjohnson"),")"),(0,n.kt)("li",{parentName:"ul"},"Rodrigo Monteiro, Global Black Belt - Big Data, Analytics (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rodrigomonteiro-gbb"},"@rodrigomonteiro-gbb"),")"),(0,n.kt)("li",{parentName:"ul"},"Travis Hilbert, Technical Specialist (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/TravisHilbert"},"@travishilbert"),")"),(0,n.kt)("li",{parentName:"ul"},"Matt Savarino, Sr. Technical Specialist (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mattsavarino"},"@mattsavarino"),")")),(0,n.kt)("p",null,"Outside Microsoft, contributors to the OpenLineage Spark integration are based at a range of internationally distributed companies and organizations. Additional contributors to the integration include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Michael Collado, Staff Software Engineer, Astronomer (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"),")"),(0,n.kt)("li",{parentName:"ul"},"Oleksandr Dvornik, Senior Java Developer, UBS (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/OleksandrDvornik"},"@OleksandrDvornik"),")"),(0,n.kt)("li",{parentName:"ul"},"Pawe\u0142 Leszczy\u0144ski, Data Engineer, GetInData (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),")"),(0,n.kt)("li",{parentName:"ul"},"Tomasz Nazarewicz, Data Engineer, GetInData (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tnazarew"},"@tnazarew"),")"),(0,n.kt)("li",{parentName:"ul"},"Maciej Obuchowski, Software Engineer, GetInData (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),") "),(0,n.kt)("li",{parentName:"ul"},"Kengo Seki, PMC Member and Committer, Apache Software Foundation (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"),")"),(0,n.kt)("li",{parentName:"ul"},"Ziyoiddin Yusupov, Senior Software Engineer, UBS (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mr-yusupov"},"@mr-yusupov"),")")),(0,n.kt)("p",null,"Try the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/Purview-ADB-Lineage-Solution-Accelerator"},"Azure Databricks to Microsoft Purview Solution Accelerator")," today!"))}p.isMDXComponent=!0},5691:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/high-level-overview-741f81b4ac0048b3c4d8a1aba1f372ec.png"},5620:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/purview-lineage-0cb14df84c28e2c243c0dd0d62e35528.png"}}]);