"use strict";(self.webpackChunkosr=self.webpackChunkosr||[]).push([[283],{3905:(t,a,e)=>{e.d(a,{Zo:()=>o,kt:()=>N});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),i=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},o=function(t){var a=i(t.components);return n.createElement(m.Provider,{value:a},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),u=i(e),k=r,N=u["".concat(m,".").concat(k)]||u[k]||g[k]||l;return e?n.createElement(N,p(p({ref:a},o),{},{components:e})):n.createElement(N,p({ref:a},o))}));function N(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=k;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=t,d[u]="string"==typeof t?t:r,p[1]=d;for(var i=2;i<l;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},867:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=e(7462),r=(e(7294),e(3905));const l={id:"crafting",title:"Crafting Charms and Curses",tags:["rule","page","table"]},p=void 0,d={unversionedId:"downtime/crafting",id:"downtime/crafting",title:"Crafting Charms and Curses",description:"Crafting magic items",source:"@site/docs/downtime/crafting.md",sourceDirName:"downtime",slug:"/downtime/crafting",permalink:"/docs/downtime/crafting",draft:!1,tags:[{label:"rule",permalink:"/docs/tags/rule"},{label:"page",permalink:"/docs/tags/page"},{label:"table",permalink:"/docs/tags/table"}],version:"current",frontMatter:{id:"crafting",title:"Crafting Charms and Curses",tags:["rule","page","table"]},sidebar:"tutorialSidebar",previous:{title:"Carousing for Courageous Champion",permalink:"/docs/downtime/carousing"},next:{title:"Hiring Helping Hand",permalink:"/docs/downtime/retainers"}},m={},i=[{value:"Crafting Magic Armour",id:"crafting-magic-armour",level:3},{value:"Crafting Magic Weapon",id:"crafting-magic-weapon",level:3},{value:"Crafting Magic Utility Items",id:"crafting-magic-utility-items",level:3},{value:"Crafting Wands and Staves",id:"crafting-wands-and-staves",level:3},{value:"Scribing scrolls",id:"scribing-scrolls",level:2},{value:"Crafting potions",id:"crafting-potions",level:2}],o={toc:i},u="wrapper";function g(t){let{components:a,...e}=t;return(0,r.kt)(u,(0,n.Z)({},o,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/magicitems.webp"}),"## Crafting magic items Any character with arcane talents can create magic item. Your level adds bonus or penalties to an attempt. If you have an advantage on rolls, you can use it during any `2d6` roll, or roll 2 times on `1dX` table and choose the result you want. You can stack these advantages on a single roll. | Character level | Bonus | Advantage on rolls | | --------------- | ----- | ------------------ | | **1**           | -3    |                    | | **2**           | -3    |                    | | **3**           | -2    |                    | | **4**           | -2    | 1 advantage        | | **5**           | -1    | 1 advantage        | | **6**           | -1    | 2 advantages       | | **7**           | +0    | 2 advantages       | | **8**           | +0    | 3 advantages       | | **9**           | +1    | 3 advantages       | | **10**          | +2    | 4 advantages       | You need to buy an item to enchants and spend gold on materials for enchantment. The amount of gold spent will add bonus or penalties to an attempt. You can look up the amounts below. The magic item will receive magical qualities based on a roll (you can use advantage). Bonuses from gold and level apply to this roll: | 2d6      | Benefit | Curse | | -------- | ------- | ----- | | **2**    | \u2014       | 1     | | **3\u20137**  | 1       | 1     | | **8\u201311** | 1       | \u2014     | | **12**   | 2       | \u2014     | The magic item has 1:6 chance to become conscious and receive personality traits based on a roll (you can use advantage). Bonuses from gold and level apply to this roll. You can use advantage on ITEM VIRTUE and ITEM FLAW:",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"Virtue"),(0,r.kt)("th",{parentName:"tr",align:null},"Flaw"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2\u20133")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"4\u20139")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10\u201311")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"12")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014")))),(0,r.kt)("h3",{id:"crafting-magic-armour"},"Crafting Magic Armour"),(0,r.kt)("p",null,"Cost of enchantment an armour in addition to the armour item:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Materials"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shoddy Spellcraft Supplies"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"75 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Everyday Enchantment Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"150 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rare and Remarkable Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"500 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lavish and Luxurious Loot"),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"900 gp")))),(0,r.kt)("p",null,"To determine an armour bonus, roll 2d6 (you can use advantage). Bonuses from gold and level apply to this roll:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"Armour BONUS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2\u20135")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"6\u20138")),(0,r.kt)("td",{parentName:"tr",align:null},"+1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"9\u201311")),(0,r.kt)("td",{parentName:"tr",align:null},"+2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"12")),(0,r.kt)("td",{parentName:"tr",align:null},"+3")))),(0,r.kt)("p",null,"You can use advantage on ARMOUR BENEFIT and ARMOUR CURSE."),(0,r.kt)("h3",{id:"crafting-magic-weapon"},"Crafting Magic Weapon"),(0,r.kt)("p",null,"Cost of enchantment a weapon in addition to the weapon item:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Materials"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shoddy Spellcraft Supplies"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"100 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Everyday Enchantment Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"200 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rare and Remarkable Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"500 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lavish and Luxurious Loot"),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"900 gp")))),(0,r.kt)("p",null,"To determine a weapon bonus, roll 2d6 (you can use advantage). Bonuses from gold and level apply to this roll:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"WEAPON BONUS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2\u20134")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5\u20139")),(0,r.kt)("td",{parentName:"tr",align:null},"+1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10\u201311")),(0,r.kt)("td",{parentName:"tr",align:null},"+2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"12")),(0,r.kt)("td",{parentName:"tr",align:null},"+3")))),(0,r.kt)("p",null,"You can use advantage on WEAPON BENEFIT and WEAPON CURSE."),(0,r.kt)("h3",{id:"crafting-magic-utility-items"},"Crafting Magic Utility Items"),(0,r.kt)("p",null,"Cost of enchantment a magic item:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Materials"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shoddy Spellcraft Supplies"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"100 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Everyday Enchantment Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"150 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rare and Remarkable Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"300 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lavish and Luxurious Loot"),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"800 gp")))),(0,r.kt)("p",null,"You can use advantage on UTILITY BENEFIT and UTILITY CURSE."),(0,r.kt)("h3",{id:"crafting-wands-and-staves"},"Crafting Wands and Staves"),(0,r.kt)("p",null,"Cost of creating a wand or staff:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Materials"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shoddy Spellcraft Supplies"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"50 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Everyday Enchantment Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"100 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rare and Remarkable Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"200 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lavish and Luxurious Loot"),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"600 gp")))),(0,r.kt)("p",null,"To determine a SPELL TIER bonus, roll 2d6 (you can use advantage). Bonuses from gold and level apply to this roll:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"SPELL TIER"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2\u20136")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"6\u20138")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8\u201310")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"11\u201312")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"13+")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 5")))),(0,r.kt)("p",null,"You can use advantage on BENEFIT, CURSE or SPELL LIST."),(0,r.kt)("img",{class:"img-character",align:"right",src:"/img/scroll.webp"}),(0,r.kt)("h2",{id:"scribing-scrolls"},"Scribing scrolls"),(0,r.kt)("p",null,"Any character with arcane talents can scribe a scroll."),(0,r.kt)("p",null,"Your level adds bonus or penalties to an attempt. If you have an advantage on rolls, you can use it during any ",(0,r.kt)("inlineCode",{parentName:"p"},"2d6")," roll, or roll 2 times on ",(0,r.kt)("inlineCode",{parentName:"p"},"1dX")," table and choose the result you want. You can stack these advantages on a single roll."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character level"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Advantage on rolls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"-2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"-2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"1 advantage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5")),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 advantage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"6")),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"2 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"7")),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"2 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8")),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"3 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"9")),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"3 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"4 advantages")))),(0,r.kt)("p",null,"You need to use paper and spend gold on materials for enchantment. The amount of gold spent will add bonus or penalties to an attempt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Materials"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shoddy Spellcraft Supplies"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"40 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Everyday Enchantment Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"80 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rare and Remarkable Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"150 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lavish and Luxurious Loot"),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"400 gp")))),(0,r.kt)("p",null,"The scroll will receive magical qualities based on a roll (you can use advantage). Bonuses from gold and level apply to this roll:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"Benefit"),(0,r.kt)("th",{parentName:"tr",align:null},"Curse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"3\u20137")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8\u201311")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"12")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014")))),(0,r.kt)("p",null,"To determine a SPELL TIER bonus, roll 2d6 (you can use advantage). Bonuses from gold and level apply to this roll:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"SPELL TIER"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2\u20136")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"6\u20138")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8\u201310")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"11\u201312")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"13+")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier 5")))),(0,r.kt)("p",null,"You can use advantage on BENEFIT, CURSE or SPELL LIST."),(0,r.kt)("img",{class:"img-character",align:"right",src:"/img/potions.webp"}),(0,r.kt)("h2",{id:"crafting-potions"},"Crafting potions"),(0,r.kt)("p",null,"Any character with alchemist talents can create a potion."),(0,r.kt)("p",null,"Your level adds bonus or penalties to an attempt. If you have an advantage on rolls, you can use it during any ",(0,r.kt)("inlineCode",{parentName:"p"},"2d6")," roll, or roll 2 times on ",(0,r.kt)("inlineCode",{parentName:"p"},"1dX")," table and choose the result you want. You can stack these advantages on a single roll."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character level"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Advantage on rolls"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"-2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"-2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"1 advantage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"5")),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 advantage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"6")),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"2 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"7")),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"2 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8")),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"3 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"9")),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"3 advantages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"4 advantages")))),(0,r.kt)("p",null,"You need to use paper and spend gold on materials for enchantment. The amount of gold spent will add bonus or penalties to an attempt:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Materials"),(0,r.kt)("th",{parentName:"tr",align:null},"Bonus"),(0,r.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shoddy Spellcraft Supplies"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"40 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Everyday Enchantment Elements"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"80 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rare and Remarkable Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"+1"),(0,r.kt)("td",{parentName:"tr",align:null},"150 gp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lavish and Luxurious Loot"),(0,r.kt)("td",{parentName:"tr",align:null},"+2"),(0,r.kt)("td",{parentName:"tr",align:null},"400 gp")))),(0,r.kt)("p",null,"The potion will receive magical qualities based on a roll (you can use advantage). Bonuses from gold and level apply to this roll:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"2d6"),(0,r.kt)("th",{parentName:"tr",align:null},"Benefit"),(0,r.kt)("th",{parentName:"tr",align:null},"Curse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"3\u20137")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"8\u201311")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"12")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2014")))),(0,r.kt)("p",null,"You can use advantage on POTION BENEFIT and POTION CURSE."))}g.isMDXComponent=!0}}]);