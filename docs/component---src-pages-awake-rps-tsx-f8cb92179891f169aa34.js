"use strict";(self.webpackChunktpcstld_site=self.webpackChunktpcstld_site||[]).push([[856],{6491:function(e,s,t){t.d(s,{Z:function(){return c}});var a="PageWrapper-module--outerContainer--zN1eq",n="PageWrapper-module--container--JDwBF",r=t(5893);function c(e){var s=e.children;return(0,r.jsx)("div",{className:a,children:(0,r.jsx)("div",{className:n,children:s})})}},5487:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var a,n=t(7294),r=t(5414),c=t(6491),l={header:"AwakeRpsPage-module--header--O5qnD",reset:"AwakeRpsPage-module--reset--3PD0m",selectorContainer:"AwakeRpsPage-module--selectorContainer--gIasp",selectorItem:"AwakeRpsPage-module--selectorItem--2n8Qi",selectorButton:"AwakeRpsPage-module--selectorButton--KNibW",selectorButtonText:"AwakeRpsPage-module--selectorButtonText--zlNNm",selectorItemCount:"AwakeRpsPage-module--selectorItemCount--NaT93",table:"AwakeRpsPage-module--table--Zjh3p",choices:"AwakeRpsPage-module--choices--uBHkV",numbers:"AwakeRpsPage-module--numbers--LZuVp",heading:"AwakeRpsPage-module--heading--wS6bZ",good:"AwakeRpsPage-module--good--qaY+K",bad:"AwakeRpsPage-module--bad--lQws9"},o=t(5893);!function(e){e.ROCK="Rock",e.PAPER="Paper",e.SCISSORS="Scissors"}(a||(a={}));function u(e){return 0===e?"":e<0?l.bad:l.good}function i(e,s,t){var a=3-s,n=3-e,r=3-t,c=a+n+r;return{ev:(1*a+0*n+-1*r)/c,lossChance:r/c}}function d(e){var s=e.numItem,t=e.setNumItem,a=e.name;return(0,o.jsxs)("div",{className:l.selectorItem,children:[(0,o.jsx)("button",{className:l.selectorButton,onClick:function(){return t(s+1)},disabled:3===s,children:(0,o.jsx)("span",{className:l.selectorButtonText,children:a})}),(0,o.jsx)("div",{className:l.selectorItemCount,children:s})]})}function m(e){var s,t=e.numRock,n=e.numPaper,r=e.numScissors;if(0===t&&0===n&&0===r)return(0,o.jsx)("span",{children:"Rock gang for life!"});if(3===t&&3===n&&3===r)return(0,o.jsx)("span",{children:"Press reset for the new round!"});var c=((s={})[a.ROCK]=i(t,r,n),s[a.PAPER]=i(n,t,r),s[a.SCISSORS]=i(r,n,t),s);console.log(c);var d=Object.entries(c).sort((function(e,s){e[0];var t=e[1],a=(s[0],s[1]);return t.ev===a.ev?0:t.ev>a.ev?-1:1}))[0][0];return(0,o.jsxs)("table",{className:l.table,children:[(0,o.jsxs)("thead",{className:l.tableHeader,children:[(0,o.jsx)("th",{className:l.heading,children:"Choice"}),(0,o.jsx)("th",{className:l.heading,children:"EV"}),(0,o.jsx)("th",{className:l.heading,children:"Loss"})]}),Object.entries(c).map((function(e){var s=e[0],t=e[1];return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{className:l.choices+" "+(d===s?l.good:""),children:s}),(0,o.jsx)("td",{className:l.numbers+" "+u(t.ev),children:t.ev.toFixed(2)}),(0,o.jsx)("td",{className:l.numbers+" "+u(-t.lossChance),children:t.lossChance.toFixed(2)})]},s)}))]})}var h=function(){var e=(0,n.useState)(0),s=e[0],t=e[1],u=(0,n.useState)(0),i=u[0],h=u[1],x=(0,n.useState)(0),p=x[0],j=x[1],R=(0,n.useCallback)((function(){t(0),h(0),j(0)}),[]);return(0,o.jsxs)(c.Z,{children:[(0,o.jsxs)(r.q,{htmlAttributes:{lang:"en"},children:[(0,o.jsx)("title",{children:"Awake RPS Calculator"}),(0,o.jsx)("meta",{name:"description",content:"MapleStory Awake Rock Paper Scissors calculator."})]}),(0,o.jsxs)("div",{className:l.header,children:[(0,o.jsx)("h1",{children:"Awake RPS Calculator"}),(0,o.jsx)("button",{className:l.reset,onClick:R,children:"Reset"})]}),(0,o.jsxs)("div",{className:l.selectorContainer,children:[(0,o.jsx)(d,{name:a.ROCK,numItem:s,setNumItem:t}),(0,o.jsx)(d,{name:a.PAPER,numItem:i,setNumItem:h}),(0,o.jsx)(d,{name:a.SCISSORS,numItem:p,setNumItem:j})]}),(0,o.jsxs)("div",{className:l.dataContainer,children:[(0,o.jsx)("h2",{children:"Results"}),(0,o.jsx)(m,{numRock:s,numPaper:i,numScissors:p})]})]})}}}]);
//# sourceMappingURL=component---src-pages-awake-rps-tsx-f8cb92179891f169aa34.js.map