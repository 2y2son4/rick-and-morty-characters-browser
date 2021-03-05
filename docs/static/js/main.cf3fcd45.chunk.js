(this["webpackJsonpevaluacion-final-adriana-del-teso"]=this["webpackJsonpevaluacion-final-adriana-del-teso"]||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(15),i=s.n(c),n=s(7),l=(s(21),s(10)),r=s(2),o=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,gender:e.gender,origin:e.origin.name,location:e.location.name,image:e.image,episodes:e.episode.length}}))}))},j=function(e,t){var s=JSON.parse(localStorage.getItem(e));return null===s?t:s},d=function(e,t){localStorage.setItem(e,JSON.stringify(t))},u=s.p+"static/media/logo.de13d484.png",m=(s(22),s(0)),b=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{className:"header__title",children:"Rick and Morty character list"}),Object(m.jsx)("img",{className:"header__img",src:u,alt:""})]})},f=(s(24),function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("span",{className:"footer__span fly-in-bottom",children:["Design & code by ","",Object(m.jsxs)("a",{className:"footer__span--link",href:"https://github.com/2y2son4",target:"_blank",rel:"noreferrer",children:["2y2son4",""]}),"\ud83d\udc7d"]})})}),h=function(e){var t=e.name,s=e.handleFilter;return Object(m.jsxs)("fieldset",{className:"filter__list",children:[Object(m.jsx)("label",{className:"filter__list--label",htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{className:"filter__list--input",type:"text",name:"name",value:t,id:"characterSearch",placeholder:"Mr. Poopy Butthole",onChange:function(e){s({key:"name",value:e.target.value})}})]})},_=(s(25),function(e){var t=e.species,s=e.handleFilter;return Object(m.jsxs)("fieldset",{className:"filter__list",children:[Object(m.jsx)("label",{className:"filter__list--label",htmlFor:"species",children:"Species:"}),Object(m.jsxs)("select",{className:"filter__list--input",name:"species",id:"species",value:t,onChange:function(e){s({key:"species",value:e.target.value})},children:[Object(m.jsx)("option",{className:"filter__list--option",value:"",children:"All"}),Object(m.jsx)("option",{className:"filter__list--option",value:"alien",children:"Alien"}),Object(m.jsx)("option",{className:"filter__list--option",value:"human",children:"Human"})]})]})}),p=function(e){var t=e.status,s=e.handleFilter;return Object(m.jsxs)("fieldset",{className:"filter__list",children:[Object(m.jsx)("label",{className:"filter__list--label",htmlFor:"status",children:"Status:"}),Object(m.jsxs)("select",{className:"filter__list--input",name:"status",id:"status",value:t,onChange:function(e){s({key:"status",value:e.target.value})},children:[Object(m.jsx)("option",{className:"filter__list--option",value:"",children:"All"}),Object(m.jsx)("option",{className:"filter__list--option",value:"alive",children:"Alive"}),Object(m.jsx)("option",{className:"filter__list--option",value:"dead",children:"Dead"}),Object(m.jsx)("option",{className:"filter__list--option",value:"unknown",children:"Unknown"})]})]})},O=(s(26),function(e){return Object(m.jsx)("button",{className:"reset",onClick:function(){e.resetBtn()},children:Object(m.jsx)("i",{className:"fas fa-reply reset__icon"})})}),x=function(e){var t=e.name,s=e.species,a=e.status,c=e.handleFilter,i=e.resetBtn;return Object(m.jsxs)("section",{className:"filter",children:[Object(m.jsx)("h2",{className:"filter__title",children:"Show me what you got"}),Object(m.jsxs)("form",{className:"filter__container",onSubmit:function(e){e.preventDefault()},children:[Object(m.jsx)(h,{name:t,handleFilter:c}),Object(m.jsx)(_,{species:s,handleFilter:c}),Object(m.jsx)(p,{status:a,handleFilter:c}),Object(m.jsx)(O,{resetBtn:i})]})]})},N=s.p+"static/media/alive-icon.5a801f2f.png",v=(s(27),function(e){var t=e.character,s=t.name,a=t.image,c=t.species,i=t.id,l=t.status,r=Object(m.jsx)("i",{className:"fas fa-pastafarianism card__icon--species",title:"Alien"}),o=Object(m.jsx)("i",{className:"fas fa-user card__icon--species",title:"Human"}),j=Object(m.jsx)("img",{src:N,alt:"Alive",className:"fas fa-kiss card__icon--status",title:"Alive"}),d=Object(m.jsx)("i",{className:"fas fa-dizzy card__icon--status",title:"Dead"}),u=Object(m.jsx)("i",{className:"fas fa-question-circle card__icon--status",title:"Status unknown"});return Object(m.jsx)(n.b,{to:"/character/".concat(i),children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{className:"card__img",src:a,alt:s}),Object(m.jsxs)("h4",{className:"card__name",children:[s," ","Alive"===l?j:"Dead"===l?d:u]}),Object(m.jsxs)("p",{className:"card__text--species",children:[c," ","Alien"===c?r:o]})]})})}),g=(s(36),function(e){var t=e.characters.map((function(e){var t=e.id;return Object(m.jsx)("li",{className:"list__item",children:Object(m.jsx)(v,{character:e})},t)}));return Object(m.jsx)("article",{className:"article",children:Object(m.jsx)("ul",{className:"list",children:t})})}),y=(s(37),function(e){var t=e.character,s=t.name,a=t.image,c=t.gender,i=t.status,l=t.origin,r=t.location,o=t.species,j=t.episodes,d=Object(m.jsx)("i",{className:"fas fa-pastafarianism card__icon--species",title:"Alien"}),u=Object(m.jsx)("i",{className:"fas fa-user card__icon--species",title:"Human"}),b=Object(m.jsx)("img",{src:N,alt:"Alive",className:"fas fa-kiss card__icon--status",title:"Alive"}),f=Object(m.jsx)("i",{className:"fas fa-dizzy card__icon--status",title:"Dead"}),h=Object(m.jsx)("i",{className:"fas fa-question-circle card__icon--status",title:"Status unknown"});return Object(m.jsxs)("div",{children:[Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("span",{className:"detail__span",children:Object(m.jsx)("i",{className:"fas fa-times"})})}),Object(m.jsxs)("div",{className:"detail",children:[Object(m.jsxs)("h4",{className:"detail__name",children:[s," ",Object(m.jsxs)("span",{className:"detail__lower",children:["(",c,")"]})]}),Object(m.jsx)("span",{className:"detail__img--parent",children:Object(m.jsx)("img",{className:"detail__img--child",src:a,alt:"Ugly face of "+s})}),Object(m.jsxs)("p",{className:"detail__text--species",children:[Object(m.jsx)("span",{className:"detail__bold",children:"Species:"})," ",Object(m.jsxs)("span",{className:"detail__lower",children:[o," ","Alien"===o?d:u]})]}),Object(m.jsxs)("p",{className:"detail__text--status",children:[Object(m.jsx)("span",{className:"detail__bold",children:"Status:"})," ",Object(m.jsxs)("span",{className:"detail__lower",children:[i," ","Alive"===i?b:"Dead"===i?f:h]})]}),Object(m.jsxs)("p",{className:"detail__text--origin",children:[Object(m.jsx)("span",{className:"detail__bold",children:"Origin:"})," ",l]}),Object(m.jsxs)("p",{className:"detail__text--location",children:[Object(m.jsx)("span",{className:"detail__bold",children:"Location:"})," ",r]}),Object(m.jsxs)("p",{className:"detail__text--episodes",children:[Object(m.jsx)("span",{className:"detail__bold",children:"Episodes:"})," ",j]})]})]})}),k=(s(38),s.p+"static/media/404-card-desktop.a21f26c8.png"),A=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("span",{className:"detail__span",children:Object(m.jsx)("i",{className:"fas fa-times"})})}),Object(m.jsx)("div",{className:"notAvailable",children:Object(m.jsx)("img",{className:"notAvailable__img",src:k,alt:"Character not found. Aw geez"})})]})};s(39);var S=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(j("name","")),n=Object(l.a)(i,2),u=n[0],h=n[1],_=Object(a.useState)(""),p=Object(l.a)(_,2),O=p[0],N=p[1],v=Object(a.useState)(""),k=Object(l.a)(v,2),S=k[0],w=k[1];Object(a.useEffect)((function(){o().then((function(e){return c(e)}))}),[]),Object(a.useEffect)((function(){d("name",u)}),[u]);var C=s.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})).filter((function(e){return e.species.toLowerCase().includes(O)})).filter((function(e){return e.status.toLowerCase().includes(S)})).sort((function(e,t){var s=e.name.toUpperCase(),a=t.name.toUpperCase();return s<a?-1:s>a?1:0}));return Object(m.jsxs)("div",{className:"App App-header",children:[Object(m.jsx)(b,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsxs)(r.a,{exact:!0,path:"/",children:[Object(m.jsx)(x,{name:u,status:S,species:O,handleFilter:function(e){"name"===e.key?h(e.value):"species"===e.key?N(e.value):"status"===e.key&&w(e.value)},resetBtn:function(){c(s),h(""),N(""),w("")}}),Object(m.jsx)(g,{characters:C})]}),Object(m.jsx)(r.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),a=s.find((function(e){return e.id===t}));return a?Object(m.jsx)(y,{character:a}):Object(m.jsx)(A,{})}})]}),Object(m.jsx)(f,{})]})};i.a.render(Object(m.jsx)(n.a,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cf3fcd45.chunk.js.map