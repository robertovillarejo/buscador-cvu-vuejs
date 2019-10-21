!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fortawesome/fontawesome-svg-core"),require("@fortawesome/free-solid-svg-icons/faSearch"),require("@fortawesome/vue-fontawesome"),require("bootstrap-vue/es/components/alert/alert"),require("vue-property-decorator"),require("axios")):"function"==typeof define&&define.amd?define(["exports","@fortawesome/fontawesome-svg-core","@fortawesome/free-solid-svg-icons/faSearch","@fortawesome/vue-fontawesome","bootstrap-vue/es/components/alert/alert","vue-property-decorator","axios"],t):t((e=e||self)["buscador-cvu"]={},e.fontawesomeSvgCore,e.faSearch,e.vueFontawesome,e.bAlert,e.vuePropertyDecorator,e.axios)}(this,function(e,t,n,r,o,i,s){"use strict";o=o&&o.hasOwnProperty("default")?o.default:o,s=s&&s.hasOwnProperty("default")?s.default:s;var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}var f=function(){function e(e){this.baseApiUrl=e||"services/cvu/api"}return e.prototype.retrieveByCvu=function(e){var t=this;return new Promise(function(n,r){s.get(t.baseApiUrl+"/cvu/"+e).then(function(e){n(e.data)}).catch(function(e){r(e)})})},e.prototype.retrieveByRcea=function(e){var t=this;return new Promise(function(n,r){s.get(t.baseApiUrl+"/rcea/"+e).then(function(e){n(e.data)}).catch(function(e){return r(e)})})},e.prototype.retrieveByReniecyt=function(e){var t=this;return new Promise(function(n,r){s.get(t.baseApiUrl+"/reniecyt/"+e).then(function(e){n(e.data)}).catch(function(e){r(e)})})},e.prototype.retrieveByLogin=function(e){var t=this;return new Promise(function(n,r){s.get(t.baseApiUrl+"/personas/"+e).then(function(e){n(e.data)}).catch(function(e){return r(e)})})},e}();t.library.add(n.faSearch);var p=new(function(){return function(e){this.host=e}}()),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dismissCountDown=0,t.alertType="",t.alertMessage="",t.searchKey="",t.isSearching=!1,t}return function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),Object.defineProperty(t.prototype,"options",{get:function(){return this.$CVU_SEARCHER_DEFAULT_OPTIONS||p},enumerable:!0,configurable:!0}),t.prototype.buscar=function(){var e=this;this.searchKey&&(this.isSearching=!0,new f(this.options.host).retrieveByCvu(this.searchKey).then(function(t){e.$emit("input",t),e.searchKey="",e.isSearching=!1}).catch(function(){e.alertType="warning",e.alertMessage="No se encontró a la persona con cvu "+e.searchKey,e.dismissCountDown=5,e.isSearching=!1}))},u([i.Prop()],t.prototype,"value",void 0),t=u([i.Component({components:{"font-awesome-icon":r.FontAwesomeIcon,"b-alert":o}})],t)}(i.Vue);var d,l,v,m,y,b=(d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group mb-5"},[n("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:e.alertType},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":function(t){e.dismissCountDown=t}}},[e._v(e._s(e.alertMessage))]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.buscar()}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.searchKey,expression:"searchKey",modifiers:{trim:!0}}],attrs:{id:"cvu-search",name:"cvu-search"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("span",[e._v(" ")]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"cvu-search-button",disabled:e.isSearching}},[n("font-awesome-icon",{attrs:{icon:"search"}}),e._v(" \n      "),e.isSearching?n("span",[e._v("Buscando...")]):n("span",[e._v("Buscar")])],1)])],1)},staticRenderFns:[]},v=void 0,m=!1,(y=("function"==typeof(l=h)?l.options:l)||{}).__file="buscador-cvu.vue",y.render||(y.render=d.render,y.staticRenderFns=d.staticRenderFns,y._compiled=!0,m&&(y.functional=!0)),y._scopeId=v,y),w=function(){return function(e,t){this.direccion=e,this.tipo=t}}(),g=function(){return function(e,t){this.id=e,this.nombre=t}}(),_=function(){return function(e,t,n,r,o){this.nombre=e,this.localidad=t,this.municipio=n,this.clave=r,this.entidadFederativa=o}}(),P=function(){return function(e,t,n,r,o,i,s,a,c,u,f,p,h,d,l,v){this.cvu=e,this.curp=t,this.titulo=n,this.nombre=r,this.apellidoPaterno=o,this.apellidoMaterno=i,this.rfc=s,this.genero=a,this.correo=c,this.login=u,this.gradoAcademico=f,this.nivelsni=p,this.instituciones=h,this.domicilios=d,this.paisResidencia=l,this.rcea=v}}(),O={install:function(e,t){var n=c(c({},p),t);e.prototype.$CVU_SEARCHER_DEFAULT_OPTIONS=n,e.component("buscador-cvu",b)}};e.BuscadorCvuComponent=b,e.Domicilio=w,e.EntidadFederativa=g,e.Institucion=_,e.PersonaFisica=P,e.default=O,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map
