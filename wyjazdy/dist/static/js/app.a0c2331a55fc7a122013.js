webpackJsonp([1],{NHnr:function(a,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=s("7+uW"),i={render:function(){var a=this.$createElement,e=this._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=s("VU/8")({name:"App"},i,!1,null,null,null).exports,r=s("/ocq"),l=s("sNP0"),d=s.n(l),c={name:"List",data:function(){return{}},props:{header:String,aways:Object}},o={render:function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"aways_list"},[s("h3",[a._v(a._s(a.header))]),a._v(" "),a._m(0),a._v(" "),a._l(a.aways,function(e,t){return s("div",{key:e.id,staticClass:"aways_list_content aways_elem"},[s("div",{staticClass:"elem elem-small"},[a._v(a._s(t+1))]),a._v(" "),s("div",{staticClass:"elem elem-big"},[a._v(a._s(e.rival)+" ("+a._s(e.rival_count)+")")]),a._v(" "),s("div",{staticClass:"elem elem-smaller"},[a._v(a._s(e.score))]),a._v(" "),s("div",{staticClass:"elem"},[a._v(a._s(e.date))]),a._v(" "),s("div",{staticClass:"elem"},[a._v(a._s(e.attendance))]),a._v(" "),s("div",{staticClass:"elem"},[a._v(a._s(e.distance))]),a._v(" "),s("div",{staticClass:"elem"},[a._v(a._s(e.type))])])})],2)},staticRenderFns:[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"aways_list_content aways_header"},[s("div",{staticClass:"elem elem-small"}),a._v(" "),s("div",{staticClass:"elem elem-big"},[a._v("Przeciwnik")]),a._v(" "),s("div",{staticClass:"elem elem-smaller"},[a._v("Wynik")]),a._v(" "),s("div",{staticClass:"elem"},[a._v("Data")]),a._v(" "),s("div",{staticClass:"elem"},[a._v("Frekwencja")]),a._v(" "),s("div",{staticClass:"elem"},[a._v("Odległość")]),a._v(" "),s("div",{staticClass:"elem"},[a._v("Rozgrywki")])])}]},v={name:"Aways",components:{List:s("VU/8")(c,o,!1,null,null,null).exports},data:function(){return{aways:d.a,aways_foreign:[],aways_poland:[],aways_silesia:[],stats:{}}},created:function(){this.createBaseDataAndStats(d.a.aways)},methods:{createBaseDataAndStats:function(a){for(var e=0,s=0,t=0,i=0,n=0,r=0,l=0,d=0,c=0,o={},v=0;v<a.length;v++){var _=a[v].rival;isNaN(o[_])&&(o[_]=0),o[_]=o[_]+1,a[v].silesia?(this.aways_silesia[t]=a[v],this.aways_silesia[t].rival_count=o[_],t++):this.aways.aways[v].foreign?(this.aways_foreign[e]=a[v],this.aways_foreign[e].rival_count=o[_],e++):(this.aways_poland[s]=a[v],this.aways_poland[s].rival_count=o[_],s++),i+=a[v].distance;var k=a[v].score.split("-");k[0]>k[1]?l+=1:k[0]<k[1]?n+=1:r+=1,d+=parseInt(k[1]),c+=parseInt(k[0])}this.stats.distance_sum=i.toFixed(2),this.stats.distance_avg=(i/a.length).toFixed(2),this.stats.wins=n,this.stats.draws=r,this.stats.loses=l,this.stats.goals_scored=d,this.stats.goals_lost=c,this.stats.aways_count=a.length}}},_={render:function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"aways"},[s("h3",[a._v("Statystyki")]),a._v(" "),s("div",{staticClass:"stats"},[s("div",{staticClass:"stats-elem"},[s("label",[a._v("Liczba wyjazdów:")]),a._v(" "),s("strong",[a._v(a._s(a.stats.aways_count))])]),a._v(" "),s("div",{staticClass:"stats-elem"},[s("label",[a._v("Przejechane kilometry:")]),a._v(" "),s("strong",[a._v(a._s(a.stats.distance_sum))])]),a._v(" "),s("div",{staticClass:"stats-elem"},[s("label",[a._v("Średnia km na wyjazd: ")]),a._v(" "),s("strong",[a._v(a._s(a.stats.distance_avg))])]),a._v(" "),s("div",{staticClass:"stats-elem"},[s("label",[a._v("Zwycięstwa:")]),a._v(" "),s("strong",[a._v(a._s(a.stats.wins))])]),a._v(" "),s("div",{staticClass:"stats-elem"},[s("label",[a._v("Remisy:")]),a._v(" "),s("strong",[a._v(a._s(a.stats.draws))])]),a._v(" "),s("div",{staticClass:"stats-elem"},[s("label",[a._v("Porażki:")]),a._v(" "),s("strong",[a._v(a._s(a.stats.loses))])]),a._v(" "),s("div",{staticClass:"stats-elem"},[s("label",[a._v("Bilans bramkowy:")]),a._v(" "),s("strong",[a._v(a._s(a.stats.goals_scored)+"-"+a._s(a.stats.goals_lost))])])]),a._v(" "),s("List",{attrs:{header:"Województwo śląskie",aways:a.aways_silesia}}),a._v(" "),s("List",{attrs:{header:"Zagranica",aways:a.aways_foreign}}),a._v(" "),s("List",{attrs:{header:"Polskie",aways:a.aways_poland}})],1)},staticRenderFns:[]},k=s("VU/8")(v,_,!1,null,null,null).exports;t.a.use(r.a);var y=new r.a({routes:[{path:"/",name:"Aways",component:k}]});t.a.config.productionTip=!1,new t.a({el:"#app",router:y,components:{App:n},template:"<App/>"})},sNP0:function(a,e){a.exports={aways:[{id:1,rival:"Lech Poznań",date:"11.08.2007 19:00",score:"4-1",attendance:22e3,distance:295.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:2,rival:"ŁKS Łódź",date:"20.10.2007 17:00",score:"0-1",attendance:3500,distance:204.2,type:"Ekstraklasa",silesia:0,foreign:0},{id:3,rival:"Legia Warszawa",date:"08.12.2007 18:15",score:"2-0",attendance:9500,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:4,rival:"Ruch Chorzów",date:"02.03.2008 16:00",score:"3-2",attendance:41e3,distance:15.3,type:"Ekstraklasa",silesia:1,foreign:0},{id:5,rival:"Odra Wodzisław",date:"30.03.2008 15:15",score:"0-2",attendance:5500,distance:47.7,type:"Ekstraklasa",silesia:1,foreign:0},{id:6,rival:"GKS Katowice",date:"23.09.2008 16:00",score:"3-4",attendance:7e3,distance:18.2,type:"Puchar Polski",silesia:1,foreign:0},{id:7,rival:"Ruch Chorzów",date:"28.02.2009 16:00",score:"0-1",attendance:4e4,distance:15.3,type:"Ekstraklasa",silesia:1,foreign:0},{id:8,rival:"Wisła Płock",date:"10.08.2009 19:15",score:"1-2",attendance:3500,distance:286.6,type:"1 liga",silesia:0,foreign:0},{id:9,rival:"Stal Stalowa Wola",date:"03.10.2009 15:00",score:"1-3",attendance:3e3,distance:262.1,type:"1 liga",silesia:0,foreign:0},{id:10,rival:"GKS Katowice",date:"07.03.2010 18:05",score:"0-0",attendance:8e3,distance:18.2,type:"1 liga",silesia:1,foreign:0},{id:11,rival:"Legia Warszawa",date:"31.10.2010 17:15",score:"2-1",attendance:19239,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:12,rival:"Śląsk Wrocław",date:"31.07.2011 14:30",score:"1-1",attendance:7890,distance:160.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:13,rival:"Korona Kielce",date:"19.04.2013 20:45",score:"1-0",attendance:7666,distance:164.4,type:"Ekstraklasa",silesia:0,foreign:0},{id:14,rival:"Legia Warszawa",date:"22.09.2013 18:00",score:"2-1",attendance:17969,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:15,rival:"Piast Gliwice",date:"30.11.2013 18:00",score:"2-0",attendance:9053,distance:10.6,type:"Ekstraklasa",silesia:1,foreign:0},{id:16,rival:"Wisła Kraków",date:"24.05.2014 13:00",score:"2-3",attendance:5371,distance:98.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:17,rival:"GKS Bełchatów",date:"24.10.2014 18:00",score:"1-0",attendance:2830,distance:141.3,type:"Ekstraklasa",silesia:0,foreign:0},{id:18,rival:"Górnik Łęczna",date:"21.02.2015 15:30",score:"0-1",attendance:3359,distance:351.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:19,rival:"Lechia Gdańsk",date:"21.03.2015 20:30",score:"1-0",attendance:12493,distance:495.3,type:"Ekstraklasa",silesia:0,foreign:0},{id:20,rival:"Wisła Kraków",date:"10.04.2015 20:30",score:"1-1",attendance:12304,distance:98.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:21,rival:"Wisła Kraków",date:"09.05.2015 20:30",score:"4-1",attendance:8724,distance:98.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:22,rival:"Śląsk Wrocław",date:"23.05.2015 15:30",score:"1-1",attendance:5875,distance:160.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:23,rival:"Legia Warszawa",date:"07.06.2015 18:00",score:"2-0",attendance:16606,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:24,rival:"Lech Poznań",date:"26.09.2015 20:30",score:"1-1",attendance:15467,distance:295.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:25,rival:"Jagiellonia Białystok",date:"24.04.2016 15:30",score:"0-0",attendance:8573,distance:481.5,type:"Ekstraklasa",silesia:0,foreign:0},{id:26,rival:"Górnik Łęczna",date:"07.05.2016 18:00",score:"0-0",attendance:5415,distance:351.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:27,rival:"Sandecja Nowy Sącz",date:"24.08.2016 18:00",score:"2-0",attendance:1238,distance:184.7,type:"1 liga",silesia:0,foreign:0},{id:28,rival:"Wigry Suwałki",date:"24.09.2016 19:00",score:"0-0",attendance:2730,distance:559.4,type:"1 liga",silesia:0,foreign:0},{id:29,rival:"MKS Kluczobrk",date:"01.04.2017 17:00",score:"2-1",attendance:2500,distance:92.2,type:"1 liga",silesia:0,foreign:0},{id:30,rival:"Wisła Puławy",date:"04.06.2017 12:30",score:"0-1",attendance:2564,distance:291.2,type:"1 liga",silesia:0,foreign:0},{id:31,rival:"Sokół Ostróda",date:"09.08.2017 19:00",score:"1-3",attendance:2214,distance:428.8,type:"Puchar Polski",silesia:0,foreign:0},{id:32,rival:"Cracovia Kraków",date:"18.08.2017 20:30",score:"3-3",attendance:8346,distance:98.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:33,rival:"Bruk Bet Termalica Nieciecza",date:"10.09.2017 15:30",score:"1-2",attendance:3519,distance:196.3,type:"Ekstraklasa",silesia:0,foreign:0},{id:34,rival:"Pogoń Szczecin",date:"23.09.2017 18:00",score:"1-2",attendance:4548,distance:510.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:35,rival:"Legia Warszawa",date:"19.11.2017 18:00",score:"1-0",attendance:24981,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:36,rival:"Wisła Płock",date:"09.02.2018 18:00",score:"4-2",attendance:4367,distance:286.6,type:"Ekstraklasa",silesia:0,foreign:0},{id:37,rival:"Śląsk Wrocław",date:"25.02.2018 15:30",score:"1-1",attendance:9960,distance:160.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:38,rival:"Piast Gliwice",date:"03.03.2018 20:30",score:"0-3",attendance:5579,distance:10.6,type:"Ekstraklasa",silesia:1,foreign:0},{id:39,rival:"Lech Poznań",date:"07.04.2018 18:00",score:"3-1",attendance:34028,distance:295.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:40,rival:"Legia Warszawa",date:"18.04.2018 20:30",score:"2-1",attendance:16124,distance:289.8,type:"Puchar Polski",silesia:0,foreign:0},{id:41,rival:"Legia Warszawa",date:"13.05.2018 18:00",score:"2-0",attendance:25980,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:42,rival:"Hajduk Split",date:"29.06.2018 19:50",score:"4-0",attendance:7705,distance:966.2,type:"Towarzyski",silesia:0,foreign:1},{id:43,rival:"Zaria Balti",date:"19.07.2018 19:00",score:"1-1",attendance:2e3,distance:970.5,type:"Liga Europy",silesia:0,foreign:1},{id:44,rival:"AS Trencin",date:"02.08.2018 17:30",score:"4-1",attendance:1897,distance:238.1,type:"Liga Europy",silesia:0,foreign:1},{id:45,rival:"Zagłębie Sosnowiec",date:"17.09.2018 18:00",score:"1-1",attendance:4824,distance:28,type:"Ekstraklasa",silesia:1,foreign:0},{id:46,rival:"Pogoń Szczecin",date:"15.02.2019 18:00",score:"3-1",attendance:6322,distance:510.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:47,rival:"Lech Poznań",date:"15.03.2019 20:30",score:"0-3",attendance:9881,distance:295.1,type:"Ekstraklasa",silesia:0,foreign:0},{id:48,rival:"Śląsk Wrocław",date:"13.04.2019 18:00",score:"0-1",attendance:7616,distance:160.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:49,rival:"Korona Kielce",date:"18.05.2019 15:30",score:"0-3",attendance:6258,distance:164.4,type:"Ekstraklasa",silesia:0,foreign:0},{id:50,rival:"Cracovia Kraków",date:"06.10.2019 15:00",score:"1-1",attendance:8783,distance:98.7,type:"Ekstraklasa",silesia:0,foreign:0},{id:51,rival:"Legia Warszawa",date:"09.11.2019 17:30",score:"5-1",attendance:18e3,distance:289.8,type:"Ekstraklasa",silesia:0,foreign:0},{id:52,rival:"Korona Kielce",date:"08.02.2020 15:00",score:"0-0",attendance:7109,distance:164.4,type:"Ekstraklasa",silesia:0,foreign:0},{id:53,rival:"Śląsk Wrocław",date:"21.02.2020 20:30",score:"2-1",attendance:8196,distance:160.7,type:"Ekstraklasa",silesia:0,foreign:0}]}}},["NHnr"]);
//# sourceMappingURL=app.a0c2331a55fc7a122013.js.map