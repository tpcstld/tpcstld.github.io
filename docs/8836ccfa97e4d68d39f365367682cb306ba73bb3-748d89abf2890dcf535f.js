(self.webpackChunktpcstld_site=self.webpackChunktpcstld_site||[]).push([[562],{2910:function(e,n,t){var r=t(5903),o=t(6018),a=t(5),i=t(9681),u=t(5266),l=t(1605),c=t(3557);c.alea=r,c.xor128=o,c.xorwow=a,c.xorshift7=i,c.xor4096=u,c.tychei=l,e.exports=c},5903:function(e,n,t){var r;!function(e,o,a){function i(e){var n,t=this,r=(n=4022871197,function(e){e=String(e);for(var t=0;t<e.length;t++){var r=.02519603282416938*(n+=e.charCodeAt(t));r-=n=r>>>0,n=(r*=n)>>>0,n+=4294967296*(r-=n)}return 2.3283064365386963e-10*(n>>>0)});t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=r(" "),t.s1=r(" "),t.s2=r(" "),t.s0-=r(e),t.s0<0&&(t.s0+=1),t.s1-=r(e),t.s1<0&&(t.s1+=1),t.s2-=r(e),t.s2<0&&(t.s2+=1),r=null}function u(e,n){return n.c=e.c,n.s0=e.s0,n.s1=e.s1,n.s2=e.s2,n}function l(e,n){var t=new i(e),r=n&&n.state,o=t.next;return o.int32=function(){return 4294967296*t.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,r&&("object"==typeof r&&u(r,t),o.state=function(){return u(t,{})}),o}o&&o.exports?o.exports=l:t.amdD&&t.amdO?void 0===(r=function(){return l}.call(n,t,n,o))||(o.exports=r):this.alea=l}(0,e=t.nmd(e),t.amdD)},1605:function(e,n,t){var r;!function(e,o,a){function i(e){var n=this,t="";n.next=function(){var e=n.b,t=n.c,r=n.d,o=n.a;return e=e<<25^e>>>7^t,t=t-r|0,r=r<<24^r>>>8^o,o=o-e|0,n.b=e=e<<20^e>>>12^t,n.c=t=t-r|0,n.d=r<<16^t>>>16^o,n.a=o-e|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,e===Math.floor(e)?(n.a=e/4294967296|0,n.b=0|e):t+=e;for(var r=0;r<t.length+20;r++)n.b^=0|t.charCodeAt(r),n.next()}function u(e,n){return n.a=e.a,n.b=e.b,n.c=e.c,n.d=e.d,n}function l(e,n){var t=new i(e),r=n&&n.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do{var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=t.next,o.quick=o,r&&("object"==typeof r&&u(r,t),o.state=function(){return u(t,{})}),o}o&&o.exports?o.exports=l:t.amdD&&t.amdO?void 0===(r=function(){return l}.call(n,t,n,o))||(o.exports=r):this.tychei=l}(0,e=t.nmd(e),t.amdD)},6018:function(e,n,t){var r;!function(e,o,a){function i(e){var n=this,t="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var e=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^e^e>>>8},e===(0|e)?n.x=e:t+=e;for(var r=0;r<t.length+64;r++)n.x^=0|t.charCodeAt(r),n.next()}function u(e,n){return n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w,n}function l(e,n){var t=new i(e),r=n&&n.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do{var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=t.next,o.quick=o,r&&("object"==typeof r&&u(r,t),o.state=function(){return u(t,{})}),o}o&&o.exports?o.exports=l:t.amdD&&t.amdO?void 0===(r=function(){return l}.call(n,t,n,o))||(o.exports=r):this.xor128=l}(0,e=t.nmd(e),t.amdD)},5266:function(e,n,t){var r;!function(e,o,a){function i(e){var n=this;n.next=function(){var e,t,r=n.w,o=n.X,a=n.i;return n.w=r=r+1640531527|0,t=o[a+34&127],e=o[a=a+1&127],t^=t<<13,e^=e<<17,t^=t>>>15,e^=e>>>12,t=o[a]=t^e,n.i=a,t+(r^r>>>16)|0},function(e,n){var t,r,o,a,i,u=[],l=128;for(n===(0|n)?(r=n,n=null):(n+="\0",r=0,l=Math.max(l,n.length)),o=0,a=-32;a<l;++a)n&&(r^=n.charCodeAt((a+32)%n.length)),0===a&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(i=i+1640531527|0,o=0==(t=u[127&a]^=r+i)?o+1:0);for(o>=128&&(u[127&(n&&n.length||0)]=-1),o=127,a=512;a>0;--a)r=u[o+34&127],t=u[o=o+1&127],r^=r<<13,t^=t<<17,r^=r>>>15,t^=t>>>12,u[o]=r^t;e.w=i,e.X=u,e.i=o}(n,e)}function u(e,n){return n.i=e.i,n.w=e.w,n.X=e.X.slice(),n}function l(e,n){null==e&&(e=+new Date);var t=new i(e),r=n&&n.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do{var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=t.next,o.quick=o,r&&(r.X&&u(r,t),o.state=function(){return u(t,{})}),o}o&&o.exports?o.exports=l:t.amdD&&t.amdO?void 0===(r=function(){return l}.call(n,t,n,o))||(o.exports=r):this.xor4096=l}(0,e=t.nmd(e),t.amdD)},9681:function(e,n,t){var r;!function(e,o,a){function i(e){var n=this;n.next=function(){var e,t,r=n.x,o=n.i;return e=r[o],t=(e^=e>>>7)^e<<24,t^=(e=r[o+1&7])^e>>>10,t^=(e=r[o+3&7])^e>>>3,t^=(e=r[o+4&7])^e<<7,e=r[o+7&7],t^=(e^=e<<13)^e<<9,r[o]=t,n.i=o+1&7,t},function(e,n){var t,r=[];if(n===(0|n))r[0]=n;else for(n=""+n,t=0;t<n.length;++t)r[7&t]=r[7&t]<<15^n.charCodeAt(t)+r[t+1&7]<<13;for(;r.length<8;)r.push(0);for(t=0;t<8&&0===r[t];++t);for(8==t?r[7]=-1:r[t],e.x=r,e.i=0,t=256;t>0;--t)e.next()}(n,e)}function u(e,n){return n.x=e.x.slice(),n.i=e.i,n}function l(e,n){null==e&&(e=+new Date);var t=new i(e),r=n&&n.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do{var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=t.next,o.quick=o,r&&(r.x&&u(r,t),o.state=function(){return u(t,{})}),o}o&&o.exports?o.exports=l:t.amdD&&t.amdO?void 0===(r=function(){return l}.call(n,t,n,o))||(o.exports=r):this.xorshift7=l}(0,e=t.nmd(e),t.amdD)},5:function(e,n,t){var r;!function(e,o,a){function i(e){var n=this,t="";n.next=function(){var e=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^e^e<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,e===(0|e)?n.x=e:t+=e;for(var r=0;r<t.length+64;r++)n.x^=0|t.charCodeAt(r),r==t.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function u(e,n){return n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w,n.v=e.v,n.d=e.d,n}function l(e,n){var t=new i(e),r=n&&n.state,o=function(){return(t.next()>>>0)/4294967296};return o.double=function(){do{var e=((t.next()>>>11)+(t.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=t.next,o.quick=o,r&&("object"==typeof r&&u(r,t),o.state=function(){return u(t,{})}),o}o&&o.exports?o.exports=l:t.amdD&&t.amdO?void 0===(r=function(){return l}.call(n,t,n,o))||(o.exports=r):this.xorwow=l}(0,e=t.nmd(e),t.amdD)},3557:function(e,n,t){var r;!function(o,a,i){var u,l=256,c=i.pow(l,6),s=i.pow(2,52),d=2*s,f=255;function h(e,n,t){var r=[],f=x(g((n=1==n?{entropy:!0}:n||{}).entropy?[e,S(a)]:null==e?function(){try{var e;return u&&(e=u.randomBytes)?e=e(l):(e=new Uint8Array(l),(o.crypto||o.msCrypto).getRandomValues(e)),S(e)}catch(r){var n=o.navigator,t=n&&n.plugins;return[+new Date,o,t,o.screen,S(a)]}}():e,3),r),h=new p(r),y=function(){for(var e=h.g(6),n=c,t=0;e<s;)e=(e+t)*l,n*=l,t=h.g(1);for(;e>=d;)e/=2,n/=2,t>>>=1;return(e+t)/n};return y.int32=function(){return 0|h.g(4)},y.quick=function(){return h.g(4)/4294967296},y.double=y,x(S(h.S),a),(n.pass||t||function(e,n,t,r){return r&&(r.S&&m(r,h),e.state=function(){return m(h,{})}),t?(i.random=e,n):e})(y,f,"global"in n?n.global:this==i,n.state)}function p(e){var n,t=e.length,r=this,o=0,a=r.i=r.j=0,i=r.S=[];for(t||(e=[t++]);o<l;)i[o]=o++;for(o=0;o<l;o++)i[o]=i[a=f&a+e[o%t]+(n=i[o])],i[a]=n;(r.g=function(e){for(var n,t=0,o=r.i,a=r.j,i=r.S;e--;)n=i[o=f&o+1],t=t*l+i[f&(i[o]=i[a=f&a+n])+(i[a]=n)];return r.i=o,r.j=a,t})(l)}function m(e,n){return n.i=e.i,n.j=e.j,n.S=e.S.slice(),n}function g(e,n){var t,r=[],o=typeof e;if(n&&"object"==o)for(t in e)try{r.push(g(e[t],n-1))}catch(a){}return r.length?r:"string"==o?e:e+"\0"}function x(e,n){for(var t,r=e+"",o=0;o<r.length;)n[f&o]=f&(t^=19*n[f&o])+r.charCodeAt(o++);return S(n)}function S(e){return String.fromCharCode.apply(0,e)}if(x(i.random(),a),e.exports){e.exports=h;try{u=t(5042)}catch(y){}}else void 0===(r=function(){return h}.call(n,t,n,e))||(e.exports=r)}("undefined"!=typeof self?self:this,[],Math)},6396:function(e,n,t){"use strict";var r;t.d(n,{xU:function(){return r},QX:function(){return o},Et:function(){return a},Zf:function(){return i},U_:function(){return u},MZ:function(){return l}}),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.BLUE=1]="BLUE",e[e.RED=2]="RED",e[e.ASSASSIN=3]="ASSASSIN",e[e.NEUTRAL=4]="NEUTRAL"}(r||(r={}));var o=25,a=9,i=8,u=1,l=o-a-i-u},4709:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r,o=t(6396),a="CodenamesBoard-module--board--3_xTz",i="CodenamesBoard-module--card--NqNce",u="CodenamesBoard-module--interactable--3SzAP",l="CodenamesBoard-module--typeUnknown--1ZEu2",c="CodenamesBoard-module--typeRed--kLV0K",s="CodenamesBoard-module--typeBlue--IP_2i",d="CodenamesBoard-module--typeNeutral--Ljp1_",f="CodenamesBoard-module--typeAssassin--2kQtn",h="CodenamesBoard-module--cardText--J2IZo",p=t(5893),m=((r={})[o.xU.UNKNOWN]=l,r[o.xU.RED]=c,r[o.xU.BLUE]=s,r[o.xU.ASSASSIN]=f,r[o.xU.NEUTRAL]=d,r);function g(e){var n=e.card,t=e.onSelect,r=n.type===o.xU.UNKNOWN;return(0,p.jsx)("div",{className:i+" "+m[n.type]+" "+(r?u:""),onDoubleClick:t,tabIndex:r?0:void 0,children:(0,p.jsx)("span",{className:h,children:n.content})})}function x(e){var n=e.board,t=e.onSelect;return(0,p.jsx)("div",{className:a,children:n.map((function(e,n){return(0,p.jsx)(g,{card:e,onSelect:function(){return null==t?void 0:t(n)}},n)}))})}},6251:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7294),o=t(6396),a=t(2910),i=t.n(a),u=["Acne","Acre","Addendum","Advertise","Aircraft","Aisle","Alligator","Alphabetize","America","Ankle","Apathy","Applause","Applesauce","Application","Archaeologist","Aristocrat","Arm","Armada","Asleep","Astronaut","Athlete","Atlantis","Aunt","Avocado","Baby-Sitter","Backbone","Bag","Baguette","Bald","Balloon","Banana","Banister","Baseball","Baseboards","Basketball","Bat","Battery","Beach","Beanstalk","Bedbug","Beer","Beethoven","Belt","Bib","Bicycle","Big","Bike","Billboard","Bird","Birthday","Bite","Blacksmith","Blanket","Bleach","Blimp","Blossom","Blueprint","Blunt","Blur","Boa","Boat","Bob","Bobsled","Body","Bomb","Bonnet","Book","Booth","Bowtie","Box","Boy","Brainstorm","Brand","Brave","Bride","Bridge","Broccoli","Broken","Broom","Bruise","Brunette","Bubble","Buddy","Buffalo","Bulb","Bunny","Bus","Buy","Cabin","Cafeteria","Cake","Calculator","Campsite","Can","Canada","Candle","Candy","Cape","Capitalism","Car","Cardboard","Cartography","Cat","Cd","Ceiling","Cell","Century","Chair","Chalk","Champion","Charger","Cheerleader","Chef","Chess","Chew","Chicken","Chime","China","Chocolate","Church","Circus","Clay","Cliff","Cloak","Clockwork","Clown","Clue","Coach","Coal","Coaster","Cog","Cold","College","Comfort","Computer","Cone","Constrictor","Continuum","Conversation","Cook","Coop","Cord","Corduroy","Cot","Cough","Cow","Cowboy","Crayon","Cream","Crisp","Criticize","Crow","Cruise","Crumb","Crust","Cuff","Curtain","Cuticle","Czar","Dad","Dart","Dawn","Day","Deep","Defect","Dent","Dentist","Desk","Dictionary","Dimple","Dirty","Dismantle","Ditch","Diver","Doctor","Dog","Doghouse","Doll","Dominoes","Door","Dot","Drain","Draw","Dream","Dress","Drink","Drip","Drums","Dryer","Duck","Dump","Dunk","Dust","Ear","Eat","Ebony","Elbow","Electricity","Elephant","Elevator","Elf","Elm","Engine","England","Ergonomic","Escalator","Eureka","Europe","Evolution","Extension","Eyebrow","Fan","Fancy","Fast","Feast","Fence","Feudalism","Fiddle","Figment","Finger","Fire","First","Fishing","Fix","Fizz","Flagpole","Flannel","Flashlight","Flock","Flotsam","Flower","Flu","Flush","Flutter","Fog","Foil","Football","Forehead","Forever","Fortnight","France","Freckle","Freight","Fringe","Frog","Frown","Gallop","Game","Garbage","Garden","Gasoline","Gem","Ginger","Gingerbread","Girl","Glasses","Goblin","Gold","Goodbye","Grandpa","Grape","Grass","Gratitude","Gray","Green","Guitar","Gum","Gumball","Hair","Half","Handle","Handwriting","Hang","Happy","Hat","Hatch","Headache","Heart","Hedge","Helicopter","Hem","Hide","Hill","Hockey","Homework","Honk","Hopscotch","Horse","Hose","Hot","House","Houseboat","Hug","Humidifier","Hungry","Hurdle","Hurt","Hut","Ice","Implode","Inn","Inquisition","Intern","Internet","Invitation","Ironic","Ivory","Ivy","Jade","Japan","Jeans","Jelly","Jet","Jig","Jog","Journal","Jump","Key","Killer","Kilogram","King","Kitchen","Kite","Knee","Kneel","Knife","Knight","Koala","Lace","Ladder","Ladybug","Lag","Landfill","Lap","Laugh","Laundry","Law","Lawn","Lawnmower","Leak","Leg","Letter","Level","Lifestyle","Ligament","Light","Lightsaber","Lime","Lion","Lizard","Log","Loiterer","Lollipop","Loveseat","Loyalty","Lunch","Lunchbox","Lyrics","Machine","Macho","Mailbox","Mammoth","Mark","Mars","Mascot","Mast","Matchstick","Mate","Mattress","Mess","Mexico","Midsummer","Mine","Mistake","Modern","Mold","Mom","Monday","Money","Monitor","Monster","Mooch","Moon","Mop","Moth","Motorcycle","Mountain","Mouse","Mower","Mud","Music","Mute","Nature","Negotiate","Neighbor","Nest","Neutron","Niece","Night","Nightmare","Nose","Oar","Observatory","Office","Oil","Old","Olympian","Opaque","Opener","Orbit","Organ","Organize","Outer","Outside","Ovation","Overture","Pail","Paint","Pajamas","Palace","Pants","Paper","Paper","Park","Parody","Party","Password","Pastry","Pawn","Pear","Pen","Pencil","Pendulum","Penis","Penny","Pepper","Personal","Philosopher","Phone","Photograph","Piano","Picnic","Pigpen","Pillow","Pilot","Pinch","Ping","Pinwheel","Pirate","Plaid","Plan","Plank","Plate","Platypus","Playground","Plow","Plumber","Pocket","Poem","Point","Pole","Pomp","Pong","Pool","Popsicle","Population","Portfolio","Positive","Post","Princess","Procrastinate","Protestant","Psychologist","Publisher","Punk","Puppet","Puppy","Push","Puzzle","Quarantine","Queen","Quicksand","Quiet","Race","Radio","Raft","Rag","Rainbow","Rainwater","Random","Ray","Recycle","Red","Regret","Reimbursement","Retaliate","Rib","Riddle","Rim","Rink","Roller","Room","Rose","Round","Roundabout","Rung","Runt","Rut","Sad","Safe","Salmon","Salt","Sandbox","Sandcastle","Sandwich","Sash","Satellite","Scar","Scared","School","Scoundrel","Scramble","Scuff","Seashell","Season","Sentence","Sequins","Set","Shaft","Shallow","Shampoo","Shark","Sheep","Sheets","Sheriff","Shipwreck","Shirt","Shoelace","Short","Shower","Shrink","Sick","Siesta","Silhouette","Singer","Sip","Skate","Skating","Ski","Slam","Sleep","Sling","Slow","Slump","Smith","Sneeze","Snow","Snuggle","Song","Space","Spare","Speakers","Spider","Spit","Sponge","Spool","Spoon","Spring","Sprinkler","Spy","Square","Squint","Stairs","Standing","Star","State","Stick","Stockholder","Stoplight","Stout","Stove","Stowaway","Straw","Stream","Streamline","Stripe","Student","Sun","Sunburn","Sushi","Swamp","Swarm","Sweater","Swimming","Swing","Tachometer","Talk","Taxi","Teacher","Teapot","Teenager","Telephone","Ten","Tennis","Thief","Think","Throne","Through","Thunder","Tide","Tiger","Time","Tinting","Tiptoe","Tiptop","Tired","Tissue","Toast","Toilet","Tool","Toothbrush","Tornado","Tournament","Tractor","Train","Trash","Treasure","Tree","Triangle","Trip","Truck","Tub","Tuba","Tutor","Television","Twang","Twig","Twitterpated","Type","Unemployed","Upgrade","Vest","Vision","Wag","Water","Watermelon","Wax","Wedding","Weed","Welder","Whatever","Wheelchair","Whiplash","Whisk","Whistle","White","Wig","Will","Windmill","Winter","Wish","Wolf","Wool","World","Worm","Wristwatch","Yardstick","Zamboni","Zen","Zero","Zipper","Zone","Zoo"];function l(e,n){for(var t,r,o=e.length;0!==o;)r=Math.floor(n()*o),t=e[o-=1],e[o]=e[r],e[r]=t;return e}var c={firstPlayer:o.xU.BLUE,board:Array(o.QX).fill(null).map((function(){return{type:o.xU.UNKNOWN,content:"Loading..."}}))};function s(){var e=(0,r.useState)(c),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r,a,c,s;t((e=function(){var e=window.location.hash;if(""!==e)return e;var n="#"+Math.random().toString(36).substring(7);return window.location.hash=n,n}(),n=i()(e),r=n()>.5?[o.xU.BLUE,o.xU.RED]:[o.xU.RED,o.xU.BLUE],a=l([...Array(o.Et).fill(r[0]),...Array(o.Zf).fill(r[1]),...Array(o.U_).fill(o.xU.ASSASSIN),...Array(o.MZ).fill(o.xU.NEUTRAL)],n),c=l(u,n),s=a.map((function(e,n){return{type:e,content:c[n]}})),{firstPlayer:r[0],board:s}))}),[]),n}},6491:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r="PageWrapper-module--outerContainer--1G6yD",o="PageWrapper-module--container--2SuZJ",a=t(5893);function i(e){var n=e.children;return(0,a.jsx)("div",{className:r,children:(0,a.jsx)("div",{className:o,children:n})})}},682:function(e,n){"use strict";n.Z={board:"CodenamesAgentPage-module--board--B5Dbz",blue:"CodenamesAgentPage-module--blue--2hjHp",red:"CodenamesAgentPage-module--red--2w2yD",remaining:"CodenamesAgentPage-module--remaining--3LHEc"}},5042:function(){}}]);
//# sourceMappingURL=8836ccfa97e4d68d39f365367682cb306ba73bb3-748d89abf2890dcf535f.js.map