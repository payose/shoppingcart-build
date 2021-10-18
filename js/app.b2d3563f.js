(function(e){function t(t){for(var n,s,i=t[0],c=t[1],d=t[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d21de4f":"a2212658"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var d=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"22e5":function(e,t,r){e.exports=r.p+"img/g989.7cf3a1b9.png"},3263:function(e,t,r){e.exports=r.p+"img/fe3.00b51e45.webp"},"400d":function(e,t,r){e.exports=r.p+"img/fe2.db22f097.webp"},"4f5d":function(e,t,r){e.exports=r.p+"img/fe4.320c90fc.webp"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app w-screen"},[r("div",{staticClass:"shadow-sm flex justify-between items-center px-5 md:px-10 py-10 w-full h-12 bg-white p-6 mb-12"},[r("router-link",{staticClass:"hover:bg-green-700 focus:bg-green-700 focus:outline-none shadow-sm bg-green-500 rounded-sm py-2 px-6",attrs:{to:"/"}},[e._v("Home")]),r("router-link",{staticClass:"hover:bg-green-700 focus:bg-green-700 focus:outline-none shadow-sm bg-green-500 rounded-sm py-2 px-6",attrs:{to:"/cart"}},[e._v("Cart")])],1),r("router-view")],1)},o=[],s={mounted:function(){this.$store.commit("updateCartFromLocalStorage")}},i=s,c=(r("034f"),r("2877")),d=Object(c["a"])(i,a,o,!1,null,null,null),l=d.exports,u=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"text-green-500 text-3xl mx-5 md:mx-40 md:py-10"},[e._v("My Shopping Cart")]),r("div",{staticClass:"bg-white mx-5 my-10 md:mx-40 p-3 md:p-10"},[e._l(e.products,(function(e){return r("CartItemCard",{key:e.id,attrs:{product:e}})})),r("CartPaymentCard")],2)])},m=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex bg-gray-100 border-solid border-4 border-gray-100 my-5"},[n("img",{staticClass:"max-h-16 md:max-h-28",attrs:{src:r("7584")("./"+e.product.image),alt:""}}),n("div",{staticClass:"text-gray-500 ml-2 md:ml-10 flex flex-col md:flex-row flex-3 justify-between content-center w-4/5"},[n("div",{staticClass:"flex flex-wrap content-center"},[n("p",{staticClass:" md:text-xl inline"},[e._v(e._s(e.product.name))])]),n("div",{staticClass:"flex justify-between items-center"},[n("button",{staticClass:"p-0 md:py-3 md:px-5 border-solid border-2 border-gray-200",on:{click:function(t){return e.addToCart()}}},[e._v("+")]),n("button",{staticClass:"md:py-3 md:px-5 border-solid border-2 border-gray-200"},[e._v(e._s(e.product.quantity))]),n("button",{staticClass:"md:py-3 md:px-5 border-solid border-2 border-gray-200",on:{click:function(t){return e.removeFromCart()}}},[e._v("-")])]),n("div",{staticClass:"flex flex-wrap content-center mr-3"},[n("p",{staticClass:"text-green-500"},[e._v(" Total Cost: "),n("span",[e._v("₦")]),e._v(" "+e._s(e.itemCost.toFixed()))])])])])},b=[],g={props:["product"],computed:{itemCost:function(){return this.product.price*this.product.quantity}},methods:{addToCart:function(){this.$store.commit("addToCart",this.product)},removeFromCart:function(){this.$store.commit("removeFromCart",this.product)}}},h=g,v=Object(c["a"])(h,f,b,!1,null,null,null),y=v.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("section",[r("h3",[e._v("Cart Total: "),r("span",[e._v("₦")]),e._v(" "+e._s(e.cartTotal.toFixed(2)))]),r("div",{staticClass:" bg-gray-10 my-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"flex-2 py-2 text-center px-6",attrs:{type:"email",placeholder:"enter email to checkout"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("hr"),r("div",{staticClass:"container"},[r("paystack",{staticClass:"flex-1 text-white hover:bg-green-700 focus:bg-green-700 focus:outline-none shadow-sm bg-green-500 rounded-sm py-2 px-6",attrs:{amount:100*e.cartTotal,email:e.email,paystackkey:e.PUBLIC_KEY,reference:e.reference,callback:e.processPayment,close:e.close,embed:!1}},[r("i",{staticClass:"fas fa-money-bill-alt"}),e._v(" checkout ")])],1)])])])},x=[],k=r("1c82"),C=r.n(k),_={name:"App",data:function(){return{email:"",PUBLIC_KEY:"pk_test_fd6b060ad8fce5062160139d5e1bdbd1630586ea"}},components:{paystack:C.a},computed:{cartTotal:function(){return this.$store.getters.cartTotal},reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<10;r++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},methods:{processPayment:function(){window.alert("Payment recieved")},close:function(){console.log("You closed checkout page")}}},E=_,S=(r("8296"),Object(c["a"])(E,w,x,!1,null,null,null)),T=S.exports,O={components:{CartItemCard:y,CartPaymentCard:T},computed:{products:function(){return this.$store.getters.cartItems}}},j=O,P=Object(c["a"])(j,p,m,!1,null,null,null),G=P.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home w-screen"},[r("h2",{staticClass:"py-6 text-center text-5xl font-bold text-green-700"},[e._v("Latest products")]),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 md:mx-10 md:p-10"},e._l(e.products,(function(e){return r("Cards",{key:e.id,staticClass:"bg-white shadow-sm rounded-sm",attrs:{product:e}})})),1)])},$=[],M=r("5530"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container text-center hover:cursor-pointer active:bg-green-700",on:{click:function(t){return e.getProduct()}}},[n("img",{attrs:{src:r("7584")("./"+e.product.image),alt:""}}),n("h3",{staticClass:"mt-3"},[e._v(e._s(e.product.name))]),n("h5",{staticClass:"text-green-500"},[e._v("Price: "),n("span",[e._v("₦")]),e._v(" "+e._s(e.product.price.toFixed(2)))])])},X=[],K={props:["product"],methods:{getProduct:function(){this.$router.push({path:"/product/".concat(this.product.id)}),this.$store.state.product=this.product,this.$store.dispatch("getProduct")}}},I=K,L=Object(c["a"])(I,U,X,!1,null,null,null),q=L.exports,N=r("2f62"),A={components:{Cards:q},methods:{},computed:Object(M["a"])({},Object(N["b"])(["products"])),mounted:function(){}},J=A,R=Object(c["a"])(J,F,$,!1,null,null,null),Y=R.exports;n["a"].use(u["a"]);var D=[{path:"/",name:"Home",component:Y},{path:"/Cart",name:"Cart",component:G},{path:"/Product/:id",name:"ItemPage",component:function(){return r.e("chunk-2d21de4f").then(r.bind(null,"d2f1"))}}],B=new u["a"]({mode:"history",base:"/",routes:D}),H=B,Q=(r("7db0"),r("4de4"),[{id:1,name:"Sonder Evol GX Eagle",category:"Mountain bike",price:78,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe2.webp"},{id:2,name:"Merida eONE-SIXTY 10k",category:"Electric bike",price:68,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe6.webp"},{id:3,name:"Ribble's CX5 cyclocross all rounder",category:"Cyclocross bike",price:90,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe5.webp"},{id:4,name:"Van Rysel EDR CF Carbon Gravel",category:"Gravel bike",price:79,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe4.webp"},{id:5,name:"Focus Mares 6.9",category:"Cyclocross bike",price:78,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe8.webp"},{id:6,name:"Giant Toughroad SLR",category:"Gravel bike",price:102,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe3.webp"},{id:7,name:"Tern Link A7",category:"Folding bike",price:95,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe1.webp"},{id:8,name:"Focus Mares 6.9",category:"Cyclocross bike",price:48,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe8.webp"},{id:9,name:"Sonder Evol GX Eagle",category:"Mountain bike",price:88,description:"Sonder’s Evol GX Eagle is designed and tested in the UK, and caters to the rather specific needs and demands of us mud-loving weekend warriorsThe brand says it’s balanced the bike’s performance to suit everything from trail centres to enduro with its modern long, slack and low geometry. Sonder sells most of its bikes direct, so prices are reasonable and the six builds available are all well-specced. ",image:"fe2.webp"}]),V=Q;function z(e){localStorage.setItem("cart",JSON.stringify(e))}n["a"].use(N["a"]);var W=new N["a"].Store({state:{cart:[],products:V,product:null},getters:{productQuantity:function(e){return function(t){var r=e.cart.find((function(e){return e.id===t.id}));return r?r.quantity:null}},cartItems:function(e){return e.cart},cartTotal:function(e){return e.cart.reduce((function(e,t){return e+t.price*t.quantity}),0)}},mutations:{addToCart:function(e,t){var r=e.cart.find((function(e){return e.id===t.id}));r?r.quantity++:e.cart.push(Object(M["a"])(Object(M["a"])({},t),{},{quantity:1})),z(e.cart)},removeFromCart:function(e,t){var r=e.cart.find((function(e){return e.id===t.id}));r&&(r.quantity>1?r.quantity--:e.cart=e.cart.filter((function(e){return e.id!==t.id}))),z(e.cart)},updateCartFromLocalStorage:function(e){var t=localStorage.getItem("cart");t&&(e.cart=JSON.parse(t))}},actions:{},modules:{}});r("def6");n["a"].config.productionTip=!1,new n["a"]({router:H,store:W,render:function(e){return e(l)}}).$mount("#app")},7584:function(e,t,r){var n={"./fe1.webp":"80ed","./fe2.webp":"400d","./fe3.webp":"3263","./fe4.webp":"4f5d","./fe5.webp":"cdd0","./fe6.webp":"b8e2","./fe7.webp":"b5bf","./fe8.webp":"e3f7","./g989.png":"22e5"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="7584"},"80ed":function(e,t,r){e.exports=r.p+"img/fe1.246b203a.webp"},8296:function(e,t,r){"use strict";r("c436")},"85ec":function(e,t,r){},b5bf:function(e,t,r){e.exports=r.p+"img/fe7.7dc439ae.webp"},b8e2:function(e,t,r){e.exports=r.p+"img/fe6.8acab17b.webp"},c436:function(e,t,r){},cdd0:function(e,t,r){e.exports=r.p+"img/fe5.db22f097.webp"},def6:function(e,t,r){},e3f7:function(e,t,r){e.exports=r.p+"img/fe8.1b712da5.webp"}});
//# sourceMappingURL=app.b2d3563f.js.map