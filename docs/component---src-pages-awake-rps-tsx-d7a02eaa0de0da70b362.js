"use strict";(self.webpackChunktpcstld_site=self.webpackChunktpcstld_site||[]).push([[856],{6814:function(e,s,a){a.d(s,{Z:function(){return r}});var t={outerContainer:"PageWrapper-module--outerContainer--ccdd5",container:"PageWrapper-module--container--243c0"},n=a(5893);function r(e){var s=e.children;return(0,n.jsx)("div",{className:t.outerContainer,children:(0,n.jsx)("div",{className:t.container,children:s})})}},9640:function(e,s,a){a.r(s),a.d(s,{default:function(){return x}});var t,n=a(7294),r=a(4593),c=a(6814),o={header:"AwakeRpsPage-module--header--3b9aa",reset:"AwakeRpsPage-module--reset--dcf0f",selectorContainer:"AwakeRpsPage-module--selectorContainer--8086a",selectorItem:"AwakeRpsPage-module--selectorItem--da7f1",selectorButton:"AwakeRpsPage-module--selectorButton--28d89",selectorButtonText:"AwakeRpsPage-module--selectorButtonText--ce534",selectorItemCount:"AwakeRpsPage-module--selectorItemCount--35a4f",table:"AwakeRpsPage-module--table--66387",choices:"AwakeRpsPage-module--choices--b811e",numbers:"AwakeRpsPage-module--numbers--2d9b9",heading:"AwakeRpsPage-module--heading--c12e9",good:"AwakeRpsPage-module--good--a9a63",bad:"AwakeRpsPage-module--bad--950c2"},l=a(5893);!function(e){e.ROCK="Rock",e.PAPER="Paper",e.SCISSORS="Scissors"}(t||(t={}));var u=3;function i(e){return 0===e?"":e<0?o.bad:o.good}function d(e,s,a){var t=u-s,n=u-e,r=u-a,c=t+n+r;return{ev:(1*t+0*n+-1*r)/c,lossChance:r/c}}function m(e){var s=e.numItem,a=e.setNumItem,t=e.name;return(0,l.jsxs)("div",{className:o.selectorItem,children:[(0,l.jsx)("button",{className:o.selectorButton,onClick:function(){return a(s+1)},disabled:s===u,children:(0,l.jsx)("span",{className:o.selectorButtonText,children:t})}),(0,l.jsx)("div",{className:o.selectorItemCount,children:s})]})}function h(e){var s,a=e.numRock,n=e.numPaper,r=e.numScissors;if(0===a&&0===n&&0===r)return(0,l.jsx)("span",{children:"Rock gang for life!"});if(a===u&&n===u&&r===u)return(0,l.jsx)("span",{children:"Press reset for the new round!"});var c=((s={})[t.ROCK]=d(a,r,n),s[t.PAPER]=d(n,a,r),s[t.SCISSORS]=d(r,n,a),s);console.log(c);var m=Object.entries(c).sort((function(e,s){e[0];var a=e[1],t=(s[0],s[1]);return a.ev===t.ev?0:a.ev>t.ev?-1:1}))[0][0];return(0,l.jsxs)("table",{className:o.table,children:[(0,l.jsxs)("thead",{className:o.tableHeader,children:[(0,l.jsx)("th",{className:o.heading,children:"Choice"}),(0,l.jsx)("th",{className:o.heading,children:"EV"}),(0,l.jsx)("th",{className:o.heading,children:"Loss"})]}),Object.entries(c).map((function(e){var s=e[0],a=e[1];return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:o.choices+" "+(m===s?o.good:""),children:s}),(0,l.jsx)("td",{className:o.numbers+" "+i(a.ev),children:a.ev.toFixed(2)}),(0,l.jsx)("td",{className:o.numbers+" "+i(-a.lossChance),children:a.lossChance.toFixed(2)})]},s)}))]})}var x=function(){var e=(0,n.useState)(0),s=e[0],a=e[1],u=(0,n.useState)(0),i=u[0],d=u[1],x=(0,n.useState)(0),j=x[0],p=x[1],R=(0,n.useCallback)((function(){a(0),d(0),p(0)}),[]);return(0,l.jsxs)(c.Z,{children:[(0,l.jsxs)(r.q,{htmlAttributes:{lang:"en"},children:[(0,l.jsx)("title",{children:"Awake RPS Calculator"}),(0,l.jsx)("meta",{name:"description",content:"MapleStory Awake Rock Paper Scissors calculator."})]}),(0,l.jsxs)("div",{className:o.header,children:[(0,l.jsx)("h1",{children:"Awake RPS Calculator"}),(0,l.jsx)("button",{className:o.reset,onClick:R,children:"Reset"})]}),(0,l.jsxs)("div",{className:o.selectorContainer,children:[(0,l.jsx)(m,{name:t.ROCK,numItem:s,setNumItem:a}),(0,l.jsx)(m,{name:t.PAPER,numItem:i,setNumItem:d}),(0,l.jsx)(m,{name:t.SCISSORS,numItem:j,setNumItem:p})]}),(0,l.jsxs)("div",{className:o.dataContainer,children:[(0,l.jsx)("h2",{children:"Results"}),(0,l.jsx)(h,{numRock:s,numPaper:i,numScissors:j})]})]})}}}]);
//# sourceMappingURL=component---src-pages-awake-rps-tsx-d7a02eaa0de0da70b362.js.map