(this.webpackJsonpworld_map=this.webpackJsonpworld_map||[]).push([[0],{101:function(t,e,n){t.exports=n(131)},109:function(t,e,n){},110:function(t,e,n){},131:function(t,e,n){"use strict";n.r(e);n(102),n(39),n(103);var r=n(0),a=n.n(r),i=n(45),o=n.n(i),c=(n(109),n(2)),s=n(3),u=n(5),l=n(4),d=n(6),f=n(12),p=n(13),h=n(1),m=n(46),v=n.n(m),b=n(47),g=n.n(b),y=n(48),j=n.n(y),O=function t(){Object(c.a)(this,t)};O.isNotEmpty=function(t){return""!=t&&""!=t&&null!=t};n(110);function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).width="100%",n.height="100%",n.scale=250,n.lastX=0,n.lastY=0,n.origin={x:55,y:-40},n.viewBox="0 0 800 450",n.borderColor="red",n.mergeMorrocanSahara=function(t){var e=n.props.jsonData,r=e.objects.countries.geometries.filter((function(t){return 504==t.id})),a=e.objects.countries.geometries.filter((function(t){return 732==t.id})),i=[r[0],a[0]];t.append("path").datum(Object(p.b)(e,i)).attr("className","country").attr("d",(function(t){return n.calculatePath(t)})).attr("stroke",n.borderColor).attr("stroke-width",.05).attr("fill","rgba(150, 40, 27, 1)")},n.initMarkersAndLinks=function(){h.i(".markers").remove(),h.i(".paths").remove()},n.showMarkersOnFirstOrder=function(){h.h(".markers").raise()},n.drawMediaAndConnexions=function(t,e,r){var a=h.h("#gWrapper");n.drawMediaPosition(a,t),n.drawCnx(a,e,r),n.addZoom(a)},n.drawMap=function(t,e){if(!n.state.isMapLoaded){var r=t.append("g").attr("id","worldMap").attr("className","countries");return r.selectAll("path").data(e).enter().append("path").attr("key",(function(t){return"path-".concat(t)})).attr("d",(function(t){return n.calculatePath(t)})).attr("className","country").attr("fill",(function(t,n){return"rgba(38,50,56,".concat(1/e.length*n,")")})).attr("stroke",n.borderColor).attr("stroke-width",.05),r}},n.drawMediaPosition=function(t,e){var r=n.props,a=r.relations_medias_francais,i=r.countries,o=t.append("g").attr("class","markers"),c=e.filter((function(t){return O.isNotEmpty(t.country)}));return o.selectAll("circle").data(c).enter().append("circle").attr("key",(function(t){return"marker-".concat(t.id)})).attr("cx",(function(t){return n.getCx(t,i)})).attr("cy",(function(t){return n.getCy(t,i)})).attr("r",(function(t){return 1.5*n.getChildCount(t.nom,a)})).attr("fill",(function(t){return n.getNodeColor(t.id,a)})).attr("stroke","#FFFFFF").attr("class","marker").append("title").text((function(t){return n.circleOnHover(t)})),o},n.getCx=function(t,e){var r=e.filter((function(e){return e.country==t.country}))[0];if(O.isNotEmpty(r)){var a=[r.latitude,r.longitude];return n.projection()(a)[0]}},n.getCy=function(t,e){var r=e.filter((function(e){return e.country==t.country}))[0];if(O.isNotEmpty(r)){var a=[r.latitude,r.longitude];return n.projection()(a)[1]}},n.getNodeColor=function(t,e){return 0==e.filter((function(e){return e.id===t})).length?"rgba(65, 131, 215, 1)":"rgba(214, 69, 65, 1)"},n.getChildCount=function(t,e){var n=e.filter((function(e){return e.origine==t})).length;return 0===n?1:n},n.drawCnx=function(t,e,r){var a=n.buildLinks(e,r);n.addLinks(t,a)},n.buildLinks=function(t,e){var r=[];return t.forEach((function(t,a){var i=n.createLinkObject(t,e);n.validateLink(i)&&r.push(i)})),r},n.createLinkObject=function(t,e){return{origine:{value:t.origine,coordinate:n.getCoordinateByEntity(e,t.origine)},cible:{value:t.cible,coordinate:n.getCoordinateByEntity(e,t.cible)},lien:t.valeur,etat:t.etat}},n.validateLink=function(t){var e=t.origine.coordinate,n=t.cible.coordinate;return null!=e&&""!=e.x&&""!=e.y&&null!=n&&""!=n.x&&""!=n.y},n.getCoordinateByEntity=function(t,e){var r=null,a=n.state.medias_francais.filter((function(t){return t.nom==e}))[0];if(O.isNotEmpty(a)&&null!=(r=t.filter((function(t){return t.country==a.country}))[0])&&O.isNotEmpty(r.longitude)&&O.isNotEmpty(r.latitude)){var i=r.longitude;return[r.latitude,i]}},n.addLinks=function(t,e){n.drawLink(t,e)},n.drawLink=function(t,e){var r=h.g().x((function(t){return n.projection()([t.coordinate[0],t.coordinate[1]])[0]})).y((function(t){return n.projection()([t.coordinate[0],t.coordinate[1]])[1]})).curve((function(t){var e=h.a(t);return e._context=t,e.point=function(t,e){t=+t,e=+e;switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e),this.x0=t,this.y0=e;break;case 1:this._point=2;default:var n=.5*this.x0+.5*t,r=.5*this.y0+.5*e,a=1/(r-e)/(n-t),i=-100/Math.sqrt(1+a*a);a==1/0?r+=-100:(r+=i,n+=a*i),this._context.quadraticCurveTo(n,r,t,e),this.x0=t,this.y0=e}},e}));t.append("g").attr("class","paths").selectAll("path").data(e).enter().append("path").style("stroke",(function(t){return n.colorPath(t)})).style("stroke-width",.5).style("fill","none").datum((function(t){return[t.origine,t.cible]})).attr("d",r).append("title").text((function(t){return t.lien}))},n.colorPath=function(t){switch(t.etat){case"P":return"rgba(242, 120, 75, 1)";case"N":return"rgba(231, 76, 60, 1)";default:return"rgba(65, 131, 215, 1)"}},n.addZoom=function(t){t.call(h.k().on("zoom",(function(){return n.zoomed(t)})))},n.zoomed=function(t){var e=h.b.transform;t.attr("transform",e)},n.circleOnHover=function(t){return t.nom+"\n"+t.country},n.circleOnClick=function(t){},n.calculatePath=function(t){return h.f().projection(n.projection())(t)},n.state={medias_francais:[],isMapLoaded:!1},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentWillReceiveProps",value:function(){}},{key:"componentWillMount",value:function(){var t=this.drawSvgWrapper().append("g").attr("id","gWrapper"),e=this.drawMap(t,this.props.worldData);this.mergeMorrocanSahara(e)}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){this.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.setState(),{medias_francais:this.props.media_filtred}))}},{key:"render",value:function(){this.initMarkersAndLinks();var t=this.state.medias_francais,e=this.props,n=e.worldData,r=e.relations_medias_francais,i=e.countries;return this.props.activated&&n.length>0&&(this.drawMediaAndConnexions(t,r,i),this.showMarkersOnFirstOrder()),a.a.createElement("div",null)}},{key:"drawSvgWrapper",value:function(){return h.h("body").append("div").attr("id","map").attr("style","border-style:dashed").append("svg").attr("id","content").attr("width",this.width).attr("height",this.height).attr("viewBox",this.viewBox).attr("transform","translate("+this.width/2+","+this.height/2+")")}},{key:"projection",value:function(){var t=h.d().scale(100).translate([400,225]);h.e().scale(300).precision(.1),h.c().scale(150).center([0,33]).precision(.3);return t}}]),e}(r.PureComponent),_=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={data:t.data},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.activated?a.a.createElement("div",null,a.a.createElement("select",{id:"mySelect",className:"dropbtn",onChange:function(e){t.props.onChange(e.target.value)}},a.a.createElement("option",{value:"0"},"All theme"),a.a.createElement("option",{value:"1"},"Theme 1"),a.a.createElement("option",{value:"2"},"Theme 2"),a.a.createElement("option",{value:"3"},"Theme 3"),a.a.createElement("option",{value:"4"},"Theme 4"))):a.a.createElement("div",null)}}]),e}(r.Component);n(111),r.PureComponent;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(f.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).constructView=function(){var t,e,r=n.state,i=r.worldData,o=r.jsonData,c=r.medias_francais,s=r.media_filtred,u=r.relations_medias_francais,l=r.countries;return n.isWordMapAndMediaLoaded()&&(t=a.a.createElement(_,{onChange:function(t){return n.changeTheme(t)},activated:!0}),e=a.a.createElement(k,{worldData:i,medias_francais:c,media_filtred:s,relations_medias_francais:u,jsonData:o,countries:l,activated:!0})),[void 0,t,e]},n.isWordMapAndMediaLoaded=function(){var t=n.state,e=t.worldData,r=t.media_filtred;return 0!=e.length&&0!=r.length},n.onClickHandler=function(t){var e=n.state.selectedFile;null!=e?(alert("The file is successfully uploaded under ",e),n.readMediaFile(e)):alert("file was not uploaded correctly, fileUploaded is empty")},n.uploadFile=function(t){console.log("selected File",t.target.files[0]);var e=t.target.files[0];console.log("file uploaded",e),n.setState({selectedFile:e})},n.changeTheme=function(t){if(0==t){var e=n.state.medias_francais;n.setState(M({},n.state,{media_filtred:e}))}else{var r=n.state.medias_francais.filter((function(e){return e.theme==t}));n.setState(M({},n.setState(),{media_filtred:r}))}},n.readMediaFile=function(t){h.j(t).then((function(t,e){console.log("readMediaFile",t),e&&console.log(e),n.setState({medias_francais:t,media_filtred:t})}))},n.readRelationFile=function(){h.j(j.a).then((function(t){n.setState({relations_medias_francais:t})}))},n.readCountries=function(){h.j(v.a).then((function(t){n.setState({countries:t})}))},n.state={medias_francais:[],media_filtred:[],relations_medias_francais:[],worldData:[],jsonData:[],countries:[]},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.loadDataForMediaFrancais()}},{key:"render",value:function(){var t=this.constructView(e,n,r),e=t[0],n=t[1],r=t[2];return a.a.createElement("div",null,e,n,r)}},{key:"loadDataForMediaFrancais",value:function(){this.readMediaFile(g.a),this.readRelationFile(),this.readCountries(),this.updateWordMap()}},{key:"updateWordMap",value:function(){var t=this;fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-10m.json").then((function(e){200===e.status?e.json().then((function(e){t.setState({worldData:Object(p.a)(e,e.objects.countries).features,jsonData:e})})):console.log("There was a problem: ".concat(e.status))}))}}]),e}(r.Component),x=function(t){function e(t){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(E,null)}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},46:function(t,e,n){t.exports=n.p+"static/media/countries.9f4f5047.tsv"},47:function(t,e,n){t.exports=n.p+"static/media/medias_francais_mock.d6786590.tsv"},48:function(t,e,n){t.exports=n.p+"static/media/relations_medias_francais.d49ff9ff.tsv"}},[[101,1,2]]]);
//# sourceMappingURL=main.21128fdc.chunk.js.map