(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{zXAh:function(l,n,i){"use strict";i.r(n);var u=i("8Y7J");class t{}var o=i("pMnS"),e=i("LSHg"),r=i("MKJQ"),s=i("sZkV"),p=i("IPXs"),c=i("SVse"),a=i("mrSG"),f=i("gTw3"),b=i("tnAE");class g{constructor(l,n,i,u){this.platform=l,this.geolocation=n,this.restApi=i,this.loadingController=u,this.height=300,this.zoom=10,this.isLoading=!1,this.fireflyList=[],this.firflyType1=[],this.firflyType2=[],this.firflyType3=[],this.firflyType4=[],this.firflyType5=[],this.firflyType6=[],this.firflyType7=[],this.firflyType8=[],this.firflyType9=[],this.firflyType10=[],this.height=l.height()-56,this.getSurveys()}ngOnInit(){}loadMap(){this.geolocation.getCurrentPosition().then(l=>{this.lat=l.coords.latitude,this.lng=l.coords.longitude}).catch(l=>{console.log("Error getting location",l)})}getSurveys(){this.present(),this.restApi.getAllData().then(l=>{let n;n=l,n.data.forEach(l=>{if(l.coordinates){const n=l.coordinates.split(","),i={lat:+n[0].split(" ").join(""),lng:+n[1].split(" ").join("")};this.fireflyList.push(i),"\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e19\u0e49\u0e33\u0e01\u0e23\u0e48\u0e2d\u0e22"===l.type?this.firflyType1.push(i):"\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e19\u0e49\u0e33\u0e01\u0e23\u0e48\u0e2d\u0e22\u0e27\u0e32\u0e25\u0e34\u0e14\u0e30(Pteroptyx valida)"===l.type?this.firflyType2.push(i):"\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e19\u0e49\u0e33\u0e01\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e41\u0e25\u0e04\u0e04\u0e35\u0e48(Pteroptyx malaccae)"===l.type?(this.firflyType3.push(i),console.log(this.firflyType3)):"\u0e15\u0e31\u0e27\u0e2b\u0e19\u0e2d\u0e19\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e19\u0e49\u0e33\u0e01\u0e23\u0e48\u0e2d\u0e22"===l.type?(this.firflyType4.push(i),console.log(this.firflyType4)):"\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e1a\u0e01/\u0e19\u0e49\u0e33\u0e08\u0e37\u0e14"===l.type?this.firflyType5.push(i):"\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e19\u0e49\u0e33\u0e08\u0e37\u0e14\u0e2d\u0e30\u0e04\u0e27\u0e32\u0e15\u0e34\u0e25\u0e34\u0e2a(S. aquatilis)"===l.type?this.firflyType6.push(i):"\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e1a\u0e01\u0e44\u0e1e\u0e42\u0e23\u0e0b\u0e35\u0e40\u0e25\u0e35\u0e22(Pyrocoelia)"===l.type?this.firflyType7.push(i):"\u0e2b\u0e19\u0e2d\u0e19\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e1a\u0e01\u0e44\u0e1e\u0e42\u0e23\u0e0b\u0e35\u0e40\u0e25\u0e35\u0e22"===l.type?this.firflyType8.push(i):"\u0e2b\u0e19\u0e2d\u0e19\u0e2b\u0e34\u0e48\u0e07\u0e2b\u0e49\u0e2d\u0e22\u0e19\u0e49\u0e33\u0e08\u0e37\u0e14\u0e2d\u0e30\u0e04\u0e27\u0e32\u0e15\u0e34\u0e25\u0e34\u0e2a"===l.type?this.firflyType9.push(i):"\u0e2d\u0e37\u0e48\u0e19\u0e46"===l.type&&this.firflyType10.push(i)}}),this.loadMap(),this.dismiss()})}present(){return a.a(this,void 0,void 0,(function*(){return this.isLoading=!0,yield this.loadingController.create({message:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"}).then(l=>{l.present().then(()=>{console.log("presented"),this.isLoading||l.dismiss().then(()=>console.log("abort presenting"))})})}))}dismiss(){return a.a(this,void 0,void 0,(function*(){return this.isLoading=!1,yield this.loadingController.dismiss().then(()=>console.log("dismissed"))}))}markerClick(l,n){console.log(n)}}var d=u.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,[[null,"markerClick"]],(function(l,n,i){var u=!0;return"markerClick"===n&&(u=!1!==l.component.markerClick(i,l.context.$implicit)&&u),u}),null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},{markerClick:"markerClick"}),u.Gb(603979776,1,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/org.png")}),null)}function y(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,2,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/green.png")}),null)}function m(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,3,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/blue.png")}),null)}function F(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,4,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/red.png")}),null)}function x(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,5,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/brown.png")}),null)}function k(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,6,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/grey.png")}),null)}function T(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,7,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/pink.png")}),null)}function q(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,8,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/sa.png")}),null)}function K(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,9,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/pur.png")}),null)}function z(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,3,"agm-marker",[],null,null,null,null,null)),u.Fb(6144,null,e.g,null,[e.d]),u.pb(2,1720320,null,1,e.d,[e.o],{latitude:[0,"latitude"],longitude:[1,"longitude"],iconUrl:[2,"iconUrl"]},null),u.Gb(603979776,10,{infoWindow:1})],(function(l,n){l(n,2,0,n.context.$implicit.lat,n.context.$implicit.lng,"../../assets/icon/black.png")}),null)}function O(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,10,"ion-header",[],null,null,null,r.L,r.i)),u.pb(1,49152,null,0,s.A,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.fb,r.C)),u.pb(3,49152,null,0,s.yb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.G,r.d)),u.pb(5,49152,null,0,s.k,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.T,r.r)),u.pb(7,49152,null,0,s.Q,[u.h,u.k,u.x],null,null),(l()(),u.qb(8,0,null,0,2,"ion-title",[],null,null,null,r.eb,r.B)),u.pb(9,49152,null,0,s.wb,[u.h,u.k,u.x],null,null),(l()(),u.Ib(-1,0,["\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e23\u0e27\u0e08"])),(l()(),u.qb(11,0,null,null,34,"ion-content",[],null,null,null,r.I,r.f)),u.pb(12,49152,null,0,s.t,[u.h,u.k,u.x],null,null),(l()(),u.qb(13,0,null,0,32,"agm-map",[],[[4,"height","px"],[2,"sebm-google-map-container",null]],null,null,p.b,p.a)),u.Fb(4608,null,e.o,e.o,[e.h,u.x]),u.Fb(4608,null,e.e,e.e,[e.h,u.x]),u.Fb(4608,null,e.f,e.f,[e.h,u.x]),u.Fb(4608,null,e.i,e.i,[e.h,u.x,e.o]),u.Fb(4608,null,e.j,e.j,[e.h,u.x]),u.Fb(4608,null,e.l,e.l,[e.h]),u.Fb(4608,null,e.p,e.p,[e.h,u.x]),u.Fb(4608,null,e.q,e.q,[e.h,u.x]),u.Fb(4608,null,e.r,e.r,[e.h,u.x]),u.Fb(512,null,e.h,e.h,[e.n,u.x]),u.Fb(512,null,e.s,e.s,[e.n]),u.pb(25,770048,null,0,e.c,[u.k,e.h,u.z,e.s,u.x],{longitude:[0,"longitude"],latitude:[1,"latitude"],zoom:[2,"zoom"]},null),(l()(),u.fb(16777216,null,0,1,null,h)),u.pb(27,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,y)),u.pb(29,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,m)),u.pb(31,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,F)),u.pb(33,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,x)),u.pb(35,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,k)),u.pb(37,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,T)),u.pb(39,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,q)),u.pb(41,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,K)),u.pb(43,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.fb(16777216,null,0,1,null,z)),u.pb(45,278528,null,0,c.i,[u.N,u.K,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var i=n.component;l(n,25,0,i.lng,i.lat,i.zoom),l(n,27,0,i.firflyType1),l(n,29,0,i.firflyType2),l(n,31,0,i.firflyType3),l(n,33,0,i.firflyType4),l(n,35,0,i.firflyType5),l(n,37,0,i.firflyType6),l(n,39,0,i.firflyType7),l(n,41,0,i.firflyType8),l(n,43,0,i.firflyType9),l(n,45,0,i.firflyType10)}),(function(l,n){l(n,13,0,n.component.height,!0)}))}function $(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,1,"app-map-list",[],null,null,null,O,d)),u.pb(1,114688,null,0,g,[s.Gb,f.a,b.a,s.Cb],null,null)],(function(l,n){l(n,1,0)}),null)}var U=u.mb("app-map-list",g,$,{},{},[]),w=i("s7LF"),v=i("iInd");class G{}i.d(n,"MapListPageModuleNgFactory",(function(){return C}));var C=u.nb(t,[],(function(l){return u.yb([u.zb(512,u.j,u.Y,[[8,[o.a,U]],[3,u.j],u.v]),u.zb(4608,c.l,c.k,[u.s,[2,c.r]]),u.zb(4608,w.g,w.g,[]),u.zb(4608,s.b,s.b,[u.x,u.g]),u.zb(4608,s.Db,s.Db,[s.b,u.j,u.p]),u.zb(4608,s.Hb,s.Hb,[s.b,u.j,u.p]),u.zb(1073742336,c.b,c.b,[]),u.zb(1073742336,w.f,w.f,[]),u.zb(1073742336,w.a,w.a,[]),u.zb(1073742336,s.Ab,s.Ab,[]),u.zb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),u.zb(1073742336,G,G,[]),u.zb(1073742336,e.a,e.a,[]),u.zb(1073742336,t,t,[]),u.zb(1024,v.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);