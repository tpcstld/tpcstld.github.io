(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Fq0Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),a=n("Wbzz");function i(e){var t=e.href,n=e.children,i=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["href","children"]);return/^\/(?!\/)/.test(t)?Object(r.jsx)(a.a,Object.assign({to:t},i,{children:n})):Object(r.jsx)("a",Object.assign({href:t},i,{children:n}))}},G7Xb:function(e,t,n){e.exports={container:"ResumePage-module--container--3F5wr",section:"ResumePage-module--section--1vzuf",list:"ResumePage-module--list--1PjuG",date:"ResumePage-module--date--3yi10",pdf:"ResumePage-module--pdf--1tkuc"}},HlPy:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("nKUr"),a=n("p5Mj"),i=n.n(a);function s(e){var t=e.children;return Object(r.jsx)("div",{className:i.a.outerContainer,children:Object(r.jsx)("div",{className:i.a.container,children:t})})}},LNP6:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),a=n("Fq0Q"),i=n("SadX"),s=n("Pfua"),c=n.n(s),o=[{name:"Projects",url:i.a.PROJECTS},{name:"Resume",url:i.a.RESUME},{name:"About",url:i.a.ABOUT}];function l(e){var t=e.currentRoute,n=e.route;return t===n.url?Object(r.jsx)("strong",{children:n.name}):Object(r.jsx)(a.a,{className:c.a.route,href:n.url,children:n.name})}function d(e){var t=e.currentRoute;return Object(r.jsx)("div",{className:c.a.routeBanner,children:o.map((function(e,n){return Object(r.jsxs)(r.Fragment,{children:[n>0?Object(r.jsx)("span",{children:" · "}):null,Object(r.jsx)(l,{currentRoute:t,route:e})]})}))})}function u(e){var t=e.currentRoute;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:c.a.title,children:[Object(r.jsx)("h1",{className:c.a.name,children:"Jerry Jiang"}),Object(r.jsx)("strong",{children:"Discord; University of Waterloo"})]}),Object(r.jsx)(d,{currentRoute:t})]})}},Pfua:function(e,t,n){e.exports={title:"Header-module--title--3zOnG",name:"Header-module--name--37NeZ",routeBanner:"Header-module--routeBanner--1uMDs",route:"Header-module--route--24l2U"}},SadX:function(e,t,n){"use strict";var r;!function(e){e.PROJECTS="/",e.RESUME="/resume",e.ABOUT="/about"}(r||(r={})),t.a=r},UTyF:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("qhky"),i=n("SadX"),s=n("LNP6"),c=n("HlPy"),o=n("G7Xb"),l=n.n(o),d=[{company:"Discord",website:"https://discord.com",location:"San Francisco, California",date:"March 2020 - Present",title:"Software Engineer",description:Object(r.jsx)("span",{children:"Implemented watching multiple streams. Rebuilt all marketing pages for repositioning."})},{company:"Facebook",website:"https://www.facebook.com",location:"Menlo Park, California",date:"July 2018 - March 2020",title:"Software Engineer - Data Warehouse",description:Object(r.jsx)("span",{children:"Maintained and rebuilt Facebook's data replication system, a distributed service responsible for reliably copying petabytes of data every day."})},{company:"Riot Games",website:"https://www.riotgames.com",location:"Los Angeles, California",date:"September 2017 - December 2017",title:"Software Engineering Intern - Accounts",description:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{children:"Maintained Riot's OAuth 2.0 and OpenID Connect services."}),Object(r.jsx)("span",{children:"Helped implement a new account recovery redesign."})]})},{company:"Uber",website:"https://www.uber.com",location:"San Francisco, California",date:"January 2017 - April 2017",title:"Software Engineering Intern - Rider",description:Object(r.jsx)("span",{children:"Improved the Android app by adding UI polish, adding a cancellation survey tool, and implementing a redesign for pickups."})},{company:"Riot Games",website:"https://www.riotgames.com",location:"Los Angeles, California",date:"May 2016 - August 2016",title:"Software Engineering Intern - Insights Tech",description:Object(r.jsx)("span",{children:"Helped design, build, and maintain the Real-Time Data Pipeline, which indexes millions of messages per minute."})},{company:"Google",website:"https://www.google.com",location:"Kitchener, Waterloo",date:"September 2015 - December 2015",title:"Software Engineering Intern - Display Ads Infrastructure",description:Object(r.jsx)("span",{children:"Maintained critical Display Ads binary, improved release processes, migrated state machines to producer graphs."})},{company:"Coursera",website:"https://www.coursera.org",location:"Mountain View, California",date:"January 2015 - May 2015",title:"Data Infrastructure Engineering Intern",description:Object(r.jsxs)("span",{children:["Redesigned experiment platform, shipped"," ",Object(r.jsx)("a",{href:"//github.com/coursera/dataduct",children:"Dataduct"}),", extended accounting."]})},{company:"Desire2Learn Incorporated",website:"https://www.d2l.com",location:"Kitchener, Waterloo",date:"April 2014 - August 2014",title:"Software Developer",description:Object(r.jsxs)("span",{children:["Built shiny features for"," ",Object(r.jsx)("a",{href:"//www.brightspace.com/",children:"Brightspace"}),", fixed many bugs, shipped metadata tool."]})}];function u(e){var t=e.item;return Object(r.jsxs)("ul",{className:l.a.list,children:[Object(r.jsx)("a",{href:t.website,children:Object(r.jsx)("strong",{children:t.company})})," ","- ",t.location,Object(r.jsx)("span",{className:l.a.date,children:t.date}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:Object(r.jsx)("strong",{children:t.title})}),Object(r.jsx)("br",{}),t.description]})}t.default=function(){return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:"Resume - Jerry Jiang (tpcstld)"})}),Object(r.jsx)(s.a,{currentRoute:i.a.RESUME}),Object(r.jsxs)("div",{className:l.a.container,children:[Object(r.jsx)("h4",{className:l.a.section,children:Object(r.jsx)("strong",{children:"Technical Qualifications"})}),Object(r.jsxs)("ul",{className:l.a.list,children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Languages:"})," Typescript, Javascript, Python, Java, Scala, C++, C#, Bash, SQL"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Technologies:"})," React, Flask, Node.js, AWS, GCP"]}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Tools and IDEs:"})," Git, SVN, Vim, IntelliJ, MySQL, ¯\\_(ツ)_/¯"]})]}),Object(r.jsx)("h4",{className:l.a.section,children:Object(r.jsx)("strong",{children:"Work Experience"})}),d.map((function(e,t){return Object(r.jsx)(u,{item:e},t)})),Object(r.jsx)("h4",{className:l.a.section,children:Object(r.jsx)("strong",{children:"Education"})}),Object(r.jsxs)("ul",{className:l.a.list,children:[Object(r.jsx)("strong",{children:"Software Engineering"}),Object(r.jsx)("span",{className:l.a.date,children:"Sept 2013 - May 2018"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"University of Waterloo - Waterloo, Ontario"})]}),Object(r.jsx)("div",{className:l.a.pdf,children:Object(r.jsx)("a",{href:"/resume/resume.pdf",children:"PDF, detailed version"})})]})]})}},p5Mj:function(e,t,n){e.exports={outerContainer:"PageWrapper-module--outerContainer--3VnGW",container:"PageWrapper-module--container--1VBnU"}}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-140053b0236d8b04c9ee.js.map