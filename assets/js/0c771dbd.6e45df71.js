"use strict";(self.webpackChunkosr=self.webpackChunkosr||[]).push([[8649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,h=m["".concat(o,".").concat(p)]||m[p]||d[p]||l;return a?n.createElement(h,c(c({ref:t},s),{},{components:a})):n.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<l;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>F,contentTitle:()=>H,default:()=>$,frontMatter:()=>_,metadata:()=>M,toc:()=>R});var n=a(7462),r=a(7294),l=a(3905),c=a(6010),i=a(2466),o=a(6550),u=a(1980),s=a(7392),m=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:a,groupId:n}),[s,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=o??s;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,l]),tabValues:l}}var b=a(2389);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),n=u[a].value;n!==l&&(m(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:d},i,{className:(0,c.Z)("tabs__item",E.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,c.Z)("tabs-container",E.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}const S={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,c.Z)(S.tabItem,n),hidden:a},t)}const O=function(e){const t=e.children.toString();return r.createElement("div",null,r.createElement("p",null,r.createElement("b",null,e.name)," ",r.createElement("span",{dangerouslySetInnerHTML:{__html:t}})))},k={border:"1px solid var(--ifm-color-emphasis-300)",boxShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",padding:"10px"};const N=function(e){return r.createElement("div",{style:k},r.createElement("h3",null,e.name.toUpperCase()," TALENTS"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{style:{textAlign:"right"}},"2d6"),r.createElement("th",{style:{textAlign:"left"}},"Effect"))),r.createElement("tbody",null,e.talents.map(((e,t)=>r.createElement("tr",null,r.createElement("td",{style:{textAlign:"right",whiteSpace:"nowrap"}},e.value),r.createElement("td",{style:{textAlign:"left"}},e.talent)))))))};const C=function(e){return r.createElement("img",{className:"img-character",align:"right",src:e.src})};const I=function(e){const t=e.table;return r.createElement("div",null,r.createElement("h4",null,t.name),t.description?r.createElement(O,{name:t.description.name},t.description.value):"",r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,t.table.header.map((e=>r.createElement("th",null,e))))),r.createElement("tbody",null,t.table.rows.map((e=>r.createElement("tr",null,e.map((e=>r.createElement("td",null,r.createElement("span",{dangerouslySetInnerHTML:{__html:e.toString()}}))))))))))};const D=function(e){const t=e.miscast;return r.createElement("div",null,r.createElement("h3",null,"MISCAST"),t.description.map(((e,t)=>r.createElement(O,{name:e.name},e.value))),t.tables.map(((e,t)=>r.createElement("div",null,r.createElement("p",null),r.createElement(I,{table:e})))))},q={border:"1px solid var(--ifm-color-emphasis-300)",boxShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",padding:"10px"};const A=function(e){const t=e.spellcasting;return r.createElement("div",null,r.createElement("p",null),r.createElement("h2",null,"SPELLCASTING"),r.createElement(O,{name:t.description.name},t.description.description),r.createElement(O,{name:"Spellcasting Ability:"},t.ability),t.spellTalents.map(((e,t)=>r.createElement(O,{name:e.name},e.description))),t.spellsKnown?r.createElement("div",null,r.createElement("h3",null,e.name," Spells Known Table"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Level"),r.createElement("th",null,"Tier 1"),r.createElement("th",null,"Tier 2"),r.createElement("th",null,"Tier 3"),r.createElement("th",null,"Tier 4"),r.createElement("th",null,"Tier 5"))),r.createElement("tbody",{style:q},[1,2,3,4,5,6,7,8,9,10].map((e=>r.createElement("tr",null,r.createElement("td",null,r.createElement("b",null,e)),t.spellsKnown[e-1]?t.spellsKnown[e-1].map((e=>r.createElement("td",null,e))):"")))))):"",t.miscast?r.createElement(D,{miscast:t.miscast}):"")};const L=function(e){const t=e.titles;return r.createElement("div",null,r.createElement("p",null),r.createElement("h2",null,"TITLES"),r.createElement("p",null,r.createElement("i",null,"Characters gain the right to bear certain titles as they advance in level. Such titles may be granted by the guilds, colleges, or temples that characters are associates of.")),t.table?r.createElement(I,{table:t.table}):"",t.reward?r.createElement(O,{name:t.reward.name},t.reward.value):"")};const P=function(e){const[t,a]=(0,r.useState)(null),[n,l]=(0,r.useState)(!1),[c,i]=(0,r.useState)({});return(0,r.useEffect)((()=>{const t=`/characters/${e.race}-${e.cl.value}.json`;fetch(t).then((e=>e.json())).then((e=>{l(!0),i(e)}),(e=>{l(!0),a(e)}))}),[]),t?r.createElement("div",null,"There is no info for ",`${e.race}-${e.cl.value}`,"!"):n?r.createElement("div",null,c.image?r.createElement(C,{src:c.image}):"",c.fluff?r.createElement("p",null,r.createElement("i",null,c.fluff)):r.createElement("p",null,"NO FLUFF"),c.requirement?r.createElement(O,{name:"Requirements:"},c.requirement):"",c.weapons?r.createElement(O,{name:"Weapons:"},c.weapons):r.createElement("p",null,"NO WEAPONS"),c.armor?r.createElement(O,{name:"Armor:"},c.armor):r.createElement("p",null,"NO ARMOR"),c.hitDice?r.createElement(O,{name:"Hit Dice:"},c.hitDice):r.createElement("p",null,"NO HIT DICE"),c.specialTalents?c.specialTalents.map(((e,t)=>r.createElement(O,{name:e.name},e.description))):r.createElement("p",null,"NO SPECIAL TALENTS"),c.talents?r.createElement(N,{talents:c.talents,name:e.cl.name}):r.createElement("p",null,"NO TALENTS"),c.titles?r.createElement(L,{titles:c.titles}):r.createElement("p",null,"NO TITLES"),c.spellcasting?r.createElement(A,{spellcasting:c.spellcasting,name:e.cl.name}):""):r.createElement("div",null,"Loading...")},j=a(7870);const V=function(e){return r.createElement("div",null,r.createElement(T,{className:"unique-tabs"},j.race.map(((e,t)=>r.createElement(x,{value:e.value,label:e.name,default:0===t},e.image?r.createElement(C,{src:e.image}):"",e.fluff?r.createElement("p",null,r.createElement("i",null,e.fluff)):r.createElement("p",null,"NO FLUFF"),e.requirement?r.createElement(O,{name:"Requirements:"},e.requirement):"",e.language?r.createElement(O,{name:""},e.language):r.createElement("p",null,"NO LANGUAGE"),e.raceTalent?r.createElement(O,{name:e.raceTalent.name},e.raceTalent.description):"",r.createElement(T,{className:"unique-tabs"},e.class.map(((t,a)=>r.createElement(x,{value:t.value,label:t.name,default:0===a},r.createElement(P,{cl:t,race:e.value}))))))))))},_={id:"character-type",title:"Choosing Class!",sidebar_position:2,tags:["rule","page"]},H=void 0,M={unversionedId:"new-character/character-type",id:"new-character/character-type",title:"Choosing Class!",description:"",source:"@site/docs/new-character/character-type.md",sourceDirName:"new-character",slug:"/new-character/character-type",permalink:"/docs/new-character/character-type",draft:!1,tags:[{label:"rule",permalink:"/docs/tags/rule"},{label:"page",permalink:"/docs/tags/page"}],version:"current",sidebarPosition:2,frontMatter:{id:"character-type",title:"Choosing Class!",sidebar_position:2,tags:["rule","page"]},sidebar:"tutorialSidebar",previous:{title:"Creating Charming Character!",permalink:"/docs/new-character/"},next:{title:"Building Backgrounds!",permalink:"/docs/new-character/backgrounds"}},F={},R=[],Z={toc:R},Y="wrapper";function $(e){let{components:t,...a}=e;return(0,l.kt)(Y,(0,n.Z)({},Z,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(V,{mdxType:"CharacterGenerator"}))}$.isMDXComponent=!0},7870:e=>{e.exports=JSON.parse('{"race":[{"value":"human","name":"Human","fluff":"The Humans are a passionate and intensely dynamic. Rapidly absorbing the knowledge of their surroundings and embodying the potential for countless roles, their lives are stories of epic undertakings and countless accomplishments.","requirement":"None.","language":"You know the Common language and one additional common language.","raceTalent":{"name":"Adaptable.","description":"You gain one additional talent roll at 1st level."},"class":[{"value":"druid","name":"Druid"},{"value":"fighter","name":"Fighter"},{"value":"cleric","name":"Priest"},{"value":"thief","name":"Thief"},{"value":"wizard","name":"Wizard"}]},{"value":"dwarf","name":"Dwarf","fluff":"The Dwarves are a determined and hardy race, standing firm against all odds. With strength and resilience that surpasses their small stature, these short but mighty beings delight in industry and tipple alike.","requirement":"minimum CON 10.","language":"You know the Common and Dwarvish languages.","raceTalent":{"name":"Stout.","description":"Roll your hit dice gains with advantage."},"class":[{"value":"axedwarf","name":"Axedwarf"},{"value":"duergar","name":"Duergar"},{"value":"runesmith","name":"Runesmith"}]},{"value":"elf","name":"Elf","fluff":"The Elves, enigmatic and ethereal, hold within them an otherworldly power. From the lofty heights of their domain, they watch over the realm of mortals with wry indifference, at times benevolent and assisting, at others hindering and destructive. Possessing magical charms and a razor-sharp aim, these beautiful creatures are a force to behold.","requirement":"minimum DEX 10.","language":"You know the Common, Elvish, and Sylvan languages.","raceTalent":{"name":"Farsight.","description":"You get a +1 bonus to attack rolls with ranged weapons or a +1 bonus to spellcasting checks."},"class":[{"value":"dancer","name":"Glade Guard","comment":"ranger-druid"},{"value":"drow","name":"Drow Divine"},{"value":"enchanter","name":"Enchanter","comment":"illusionist"}]},{"value":"mixed","name":"Mixed","fluff":"The mixed-bloods are a diverse collective who carry within them a strange and potent mixture of powers. Be they descended of the Halflings or the Half-Orcs, the half-Elves or even part-Dwarf, these beings are survivors in a world of danger, their blood a blend that bridges realms and connects them to the wide breadth of the Human experience.","language":"You know the Common language.","requirement":"None.","class":[{"value":"halfling","name":"Halfling","comment":"thief-specialist"},{"value":"halfelf","name":"Half-Elf","comment":"ranger"},{"value":"halforc","name":"Half-Orc","comment":"barbarian"},{"value":"mul","name":"Mul","comment":"dwarf-barbarian-fighter"}]}],"alignment":[{"value":"lawful","name":"Lawful"},{"value":"neutral","name":"Neutral"},{"value":"chaotic","name":"Chaotic"}],"newraces":[{"value":"fey","name":"Fey","fluff":"Diminutive beings possessing inexplicable, supernatural abilities, leading a hidden lifestyle.","requirement":"minimum CHA 10.","language":"You know the Common and Sylvan languages.","raceTalent":{"name":"Being of magic.","description":"You have advantage on checks for overcoming malicious magical effects."},"class":[{"value":"gnome","name":"Gnome"},{"value":"svirfneblin","name":"Svirfneblin"}]}]}')}}]);