(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(81)},38:function(e,a,t){},39:function(e,a,t){},49:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(30),o=t.n(r),m=(t(38),t(9)),l=t(11),i=(t(39),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("h1",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"rmdb-logo",src:"./images/reactMovie_logo.png",alt:"rmdb Logo"})),c.a.createElement("img",{className:"rmdb-tmdb-logo",src:"./images/tmdb_logo.png",alt:"tmdb-logo"})))}),s=t(14),u=t.n(s),d=t(20),v=t(17),b=t(5),p="https://api.themoviedb.org/3/",E="701cd5c966b070f217206def9a6e6f06",g="http://image.tmdb.org/t/p/",f=(t(49),function(e){var a=e.image,t=e.title,n=e.text;return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom,\n            rgba(0,0,0,0) 39%,\n            rgba(0,0,0,0) 41%, \n            rgba(0,0,0,0.65) 100%),\n            url('".concat(a,"'), #1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,t),c.a.createElement("p",null,n))))}),h=t(10),N=t(3),k=(t(52),function(e){var a=e.searchItems;return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(h.a,{className:"rmdb-fa-search",icon:N.d,size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search",onChange:a})))}),j=(t(53),function(e){var a=e.header,t=e.isLoading,n=e.children;return c.a.createElement("div",{className:"rmdb-grid"},a&&!t?c.a.createElement("h1",null,a):null,c.a.createElement("div",{className:"rmdb-grid-content"},n.map(function(e,a){return c.a.createElement("div",{key:a,className:"rmdb-grid-element"},e)})))}),O=(t(54),function(e){var a=e.image,t=e.clickable,n=e.movieId,r=e.movieName;return c.a.createElement("div",{className:"rmdb-moviethumb"},t?c.a.createElement(m.b,{to:{pathname:"/".concat(n),movieName:"".concat(r)}},c.a.createElement("img",{src:a,alt:"Movie Thumb"})):c.a.createElement("img",{src:a,alt:"Movie Thumb"}))}),_=(t(55),function(e){var a=e.onClick,t=e.text;return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:a},c.a.createElement("p",null,t))}),w=(t(56),function(){return c.a.createElement("div",{className:"loader"})}),x=t(16),y=t.n(x),S=(t(75),function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(null),m=Object(b.a)(o,2),l=m[0],i=m[1],s=Object(n.useState)(!1),h=Object(b.a)(s,2),N=h[0],x=h[1],S=Object(n.useState)(0),I=Object(b.a)(S,2),U=I[0],M=I[1],R=Object(n.useState)(0),C=Object(b.a)(R,2),D=C[0],T=C[1],z=Object(n.useState)(""),L=Object(b.a)(z,2),B=L[0],F=L[1];Object(n.useEffect)(function(){x(!0);var e="".concat(p,"movie/popular?api_key=").concat(E,"&language=en-US&page=1");q(e)},[]);var q=function(){var e=Object(v.a)(u.a.mark(function e(a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()(a);case 3:n=e.sent,r([].concat(Object(d.a)(t),Object(d.a)(n.data.results))),i(l||n.data.results[0]),x(!1),M(n.data.page),console.log(n),T(n.data.total_pages),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"rmdb-home"},l?c.a.createElement("div",null,c.a.createElement(f,{image:"".concat(g).concat("w1280").concat(l.backdrop_path),title:l.original_title,text:l.overview}),c.a.createElement(k,{searchItems:function(e){var a=e.target.value;console.log(a);var t="";r([]),x(!0),F(a),t=""===a?"".concat(p,"movie/popular?api_key=").concat(E,"$language=en-US&page=").concat(U+1):"".concat(p,"search/movie?api_key=").concat(E,"&language=en-US&query=").concat(a),q(t)}})):null,c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(j,{header:B?"Search Result":"Popular Movies",isLoading:N},t.map(function(e,a){return c.a.createElement(O,{key:a,clickable:!0,image:e.poster_path?"".concat(g).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),N?c.a.createElement(w,null):null,U<=D&&!N?c.a.createElement(_,{text:"Load More",onClick:function(){var e="";x(!0),e=""===B?"".concat(p,"movie/popular?api_key=").concat(E,"&language=en-US&page=").concat(U+1):"".concat(p,"search/movie?api_key=").concat(E,"&language=en-US&query=").concat(B,"&page=").concat(U+1),q(e)}}):null))}),I=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Oooops this page doesn't exist"))},U=(t(76),function(e){var a=e.movie;return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null),c.a.createElement("p",null,a)))}),M=(t(77),function(e){var a=e.movie,t=e.directors;return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:a.backdrop_path?"url('".concat(g).concat("w1280").concat(a.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(O,{image:a.poster_path?"".concat(g).concat("w500").concat(a.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,a.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,a.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*a.vote_average}),c.a.createElement("p",{className:"rmdb-score"},a.vote_average)),t.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),t.map(function(e,a){return c.a.createElement("p",{key:a,className:"rmdb-director"},e.name)})),c.a.createElement(h.a,{className:"fa-film",name:"film",size:"5x",icon:N.b})))}),R=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},C=(t(78),function(e){var a=e.time,t=e.budget,n=e.revenue;return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(h.a,{className:"fa-time",name:"clock-o",icon:N.a,size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var a=Math.floor(e/60),t=e%60;return"".concat(a,"h ").concat(t,"m")}(a))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(h.a,{className:"fa-budget",name:"money",icon:N.c,size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",R(t))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(h.a,{className:"fa-revenue",name:"ticket",icon:N.e,size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"revenue: ",R(n)))))}),D=(t(79),function(e){var a=e.actor;return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:a.profile_path?"".concat(g).concat("w154").concat(a.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},a.name),c.a.createElement("span",{className:"rmdb-actor-character"},a.character))}),T=(t(80),function(e){var a=e.match,t=e.location,r=Object(n.useState)(),o=Object(b.a)(r,2),m=o[0],l=o[1],i=Object(n.useState)(null),s=Object(b.a)(i,2),d=s[0],g=s[1],f=Object(n.useState)([]),h=Object(b.a)(f,2),N=h[0],k=h[1],O=Object(n.useState)(!1),_=Object(b.a)(O,2),x=_[0],S=_[1];Object(n.useEffect)(function(){S(!0);var e="".concat(p,"movie/").concat(a.params.movieId,"?api_key=").concat(E,"&language=en-US");I(e)},[]);var I=function(){var e=Object(v.a)(u.a.mark(function e(t){var n,c,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()(t);case 2:if(!(n=e.sent).status_code){e.next=7;break}S(!1),e.next=16;break;case 7:return l(n),c="".concat(p,"movie/").concat(a.params.movieId,"/credits?api_key=").concat(E),e.next=11,y()(c);case 11:r=e.sent,o=r.data.crew.filter(function(e){return"Director"===e.job}),g(r.data.cast),k(o),S(!1);case 16:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"rmdb-movie"},m?c.a.createElement("div",null,c.a.createElement(U,{movie:t.movieName}),c.a.createElement(M,{movie:m.data,directors:N}),c.a.createElement(C,{time:m.data.runtime,budget:m.data.budget,revenue:m.data.revenue})):null,d?c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(j,{header:"Actors"},d.map(function(e,a){return c.a.createElement(D,{key:a,actor:e})}))):"",x?c.a.createElement(w,null):null)});t(15).b.add(N.d,N.b,N.a,N.c,N.e);var z=function(){return c.a.createElement(m.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:S,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:T,exact:!0}),c.a.createElement(l.a,{component:I}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.5e4eb7e0.chunk.js.map