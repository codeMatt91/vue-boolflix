(function(i){function t(t){for(var n,a,o=t[0],c=t[1],I=t[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i[n]=c[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,I||[]),e()}function e(){for(var i,t=0;t<s.length;t++){for(var e=s[t],n=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),i=a(a.s=e[0]))}return i}var n={},r={app:0},s=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=i,a.c=n,a.d=function(i,t,e){a.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},a.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},a.t=function(i,t){if(1&t&&(i=a(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var n in i)a.d(e,n,function(t){return i[t]}.bind(null,n));return e},a.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return a.d(t,"a",t),t},a.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var I=0;I<o.length;I++)t(o[I]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"17b5":function(i,t){i.exports="data:image/png;base64,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"},"326f":function(i,t,e){},"56a7":function(i,t,e){},"56d7":function(i,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"wrapper"},[e("Header",{on:{click:i.setQuery}}),e("Main",{attrs:{series:i.series,movies:i.movies}})],1)},s=[],a=e("bc3a"),o=e.n(a),c=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("main",[e("div",{staticClass:"container"},[this.movies.length||this.series.length?e("div",[e("div",{attrs:{id:"films"}},[e("h1",{staticClass:"my-5 fw-bold text-center"},[i._v("FILM")]),e("div",{staticClass:"row gy-5"},i._l(i.movies,(function(i){return e("div",{key:i.id,staticClass:"col-4 text-center"},[e("Card",{attrs:{item:i}})],1)})),0)]),e("div",{attrs:{id:"series"}},[e("h1",{staticClass:"my-5 fw-bold text-center"},[i._v("SERIE TV")]),e("div",{staticClass:"row gy-5"},i._l(i.series,(function(i){return e("div",{key:i.id,staticClass:"col-4 text-center"},[e("Card",{attrs:{item:i}})],1)})),0)])]):e("div",{staticClass:"loader fw-bold fs-1 d-flex align-items-center justify-content-center"},[i._m(0)])])])},I=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[i._v("SEARCH FILMS OR TV SERIES "),e("i",{staticClass:"fa-solid fa-film"})])}],l=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"card-poster list-unstyled d-flex flex-column align-items-center"},[n("div",{staticClass:"poster"},[n("img",{staticClass:"poster-img img-fluid h-100",attrs:{src:i.getPoster,alt:""}})]),n("div",{staticClass:"info"},[n("div",[i._v(i._s(i.item.original_title||i.item.original_name))]),n("div",[i._v(i._s(i.item.title||i.item.name))]),n("div",["it"===i.item.original_language?n("img",{staticClass:"w-10",attrs:{src:e("e33f"),alt:"flag Italy"}}):"en"===i.item.original_language?n("img",{staticClass:"w-10",attrs:{src:e("17b5"),alt:"flag England"}}):n("div",[i._v(i._s(i.item.original_language))])]),n("div",{staticClass:"d-flex my-2 justify-content-center"},[i._l(i.getStar,(function(i){return n("i",{key:i,staticClass:"fa-solid fa-star"})})),i._l(5-i.getStar,(function(i){return n("i",{key:i,staticClass:"fa-regular fa-star"})}))],2),n("div",{staticClass:"plot text-white"},[n("h3",[i._v("Plot:")]),i.item.overview?n("div",[i._v(i._s(i.item.overview))]):n("div",[i._v("Siamo Spiacenti al momento non è disponibile la trama")])])])])},u=[],f={name:"Card",props:["item"],data:function(){return{rest:""}},computed:{getStar:function(){return Math.floor(this.item.vote_average/2)},getPoster:function(){return this.item.poster_path?"https://image.tmdb.org/t/p/w342".concat(this.item.poster_path):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"}}},v=f,A=(e("cec4"),e("2877")),d=Object(A["a"])(v,l,u,!1,null,"44634168",null),g=d.exports,m={name:"Main",components:{Card:g},props:["movies","series"],data:function(){return{}}},p=m,h=(e("7dbd"),Object(A["a"])(p,c,I,!1,null,"2b02e2c5",null)),y=h.exports,C=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("header",{staticClass:"d-flex justify-content-between align-items-center"},[i._m(0),e("div",{staticClass:"d-flex justify-content-center align-items-center me-4",attrs:{id:"search"}},[e("label",{staticClass:"me-2",attrs:{for:"search"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.query,expression:"query"}],attrs:{id:"search",type:"text"},domProps:{value:i.query},on:{keyup:function(t){return!t.type.indexOf("key")&&i._k(t.keyCode,"enter",13,t.key,"Enter")?null:i.$emit("click",i.query)},input:function(t){t.target.composing||(i.query=t.target.value)}}}),e("button",{staticClass:"btn btn-danger ms-2",on:{click:function(t){return i.$emit("click",i.query)}}},[i._v(" CERCA ")])])])},w=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"ms-4"},[e("h1",[i._v("BOOLFLIX")])])}],E={name:"Header",data:function(){return{query:""}}},b=E,j=(e("6bb9"),Object(A["a"])(b,C,w,!1,null,"3eecab81",null)),x=j.exports,M={name:"App",data:function(){return{series:[],movies:[],user_key:"1ed3a172e57823689018496d86094f75",query:""}},components:{Main:y,Header:x},methods:{getDataMovies:function(){var i=this;if(!this.query)return this.movies=[],void(this.series=[]);var t={params:{api_key:this.user_key,query:this.query,language:"it-IT"}};o.a.get("https://api.themoviedb.org/3/search/movie?",t).then((function(t){i.movies=t.data.results}))},setDataSeries:function(){var i=this,t={params:{api_key:this.user_key,query:this.query,language:"it-IT"}};o.a.get("https://api.themoviedb.org/3/search/tv?",t).then((function(t){i.series=t.data.results}))},setQuery:function(i){this.query=i,this.getDataMovies(),this.setDataSeries()}}},O=M,P=(e("5c0b"),Object(A["a"])(O,r,s,!1,null,null,null)),B=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(B)}}).$mount("#app")},"5c0b":function(i,t,e){"use strict";e("9c0c")},"6bb9":function(i,t,e){"use strict";e("326f")},"754f":function(i,t,e){},"7dbd":function(i,t,e){"use strict";e("754f")},"9c0c":function(i,t,e){},cec4:function(i,t,e){"use strict";e("56a7")},e33f:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.09379aaa.js.map