(this["webpackJsonpevaluacion-final-adriana-del-teso"]=this["webpackJsonpevaluacion-final-adriana-del-teso"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(9),n(3)),l=(n(10),function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,gender:e.gender,origin:e.origin.name,location:e.location.name,image:e.image}}))}))}),o=n.p+"static/media/logo.de13d484.png",j=(n(11),n(0)),u=function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{className:"header__title",children:"Rick and Morty character list"}),Object(j.jsx)("img",{className:"header__img",src:o,alt:""})]})},d=(n(13),function(){return Object(j.jsxs)("footer",{children:[" ",Object(j.jsxs)("span",{className:"footer__span fly-in-bottom",children:["Design & code by"," ",Object(j.jsxs)("a",{className:"footer__span--link",href:"https://github.com/2y2son4",target:"_blank",rel:"noreferrer",children:[" ","2y2son4"]}),"\ud83d\udc7d"]})]})}),h=function(e){return Object(j.jsxs)("div",{className:"filter__list",children:[Object(j.jsx)("label",{className:"filter__list--label",htmlFor:"name",children:"Name:"}),Object(j.jsx)("input",{className:"filter__list--input",type:"text",name:"name",id:"characterSearch",onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})},m=(n(14),function(e){var t=e.handleFilter;return Object(j.jsxs)("section",{className:"filter",children:[Object(j.jsx)("h2",{className:"filter__title",children:"- Search -"}),Object(j.jsx)("form",{className:"filter__list",onChange:function(e){e.preventDefault()},children:Object(j.jsx)(h,{handleFilter:t})})]})}),f=(n(15),function(e){var t=e.character,n=t.name,a=t.image,c=t.species;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{className:"card__img",src:a,alt:n}),Object(j.jsx)("h4",{className:"card__name",children:n}),Object(j.jsx)("p",{className:"card__text--species",children:c})]})}),b=(n(16),function(e){var t=e.characters.map((function(e){var t=e.id;return Object(j.jsx)("li",{className:"list__item card",children:Object(j.jsx)(f,{character:e})},t)}));return Object(j.jsx)("article",{className:"article",children:Object(j.jsx)("ul",{className:"list",children:t})})});var p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],h=s[1];Object(a.useEffect)((function(){l().then((function(e){return c(e)}))}),[]);var f=n.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())}));return console.log(f),Object(j.jsxs)("div",{className:"App App-header",children:[Object(j.jsx)(u,{}),Object(j.jsx)(m,{handleFilter:function(e){console.log("Me han cambiado",e.value,e.key),"name"===e.key&&h(e.value)}}),Object(j.jsx)(b,{characters:f}),Object(j.jsx)(d,{})]})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.3042474a.chunk.js.map