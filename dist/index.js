'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib = require('tslib');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var faSearch = require('@fortawesome/free-solid-svg-icons/faSearch');
var faTimesCircle = require('@fortawesome/free-solid-svg-icons/faTimesCircle');
var vueFontawesome = require('@fortawesome/vue-fontawesome');
var bAlert = _interopDefault(require('bootstrap-vue/es/components/alert/alert'));
var vuePropertyDecorator = require('vue-property-decorator');
var axios = _interopDefault(require('axios'));

var CvuService =
/** @class */
function () {
  function CvuService(baseApiUrl) {
    this.baseApiUrl = baseApiUrl || 'services/cvu/api';
  }

  CvuService.prototype.retrieveByCvu = function (cvu) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      axios.get(_this.baseApiUrl + '/cvu/' + cvu).then(function (res) {
        resolve(res.data);
      }).catch(function (err) {
        reject(err);
      });
    });
  };

  CvuService.prototype.retrieveByRcea = function (rcea) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      axios.get(_this.baseApiUrl + '/rcea/' + rcea).then(function (res) {
        resolve(res.data);
      }).catch(function (err) {
        return reject(err);
      });
    });
  };

  CvuService.prototype.retrieveByReniecyt = function (numeroReniecyt) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      axios.get(_this.baseApiUrl + '/reniecyt/' + numeroReniecyt).then(function (res) {
        resolve(res.data);
      }).catch(function (err) {
        reject(err);
      });
    });
  };

  CvuService.prototype.retrieveByLogin = function (correoUsuario) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      axios.get(_this.baseApiUrl + '/personas/' + correoUsuario).then(function (res) {
        resolve(res.data);
      }).catch(function (err) {
        return reject(err);
      });
    });
  };

  return CvuService;
}();

fontawesomeSvgCore.library.add(faSearch.faSearch, faTimesCircle.faTimesCircle); // agrega el icono de lupa && el icono de exit

var Options =
/** @class */
function () {
  function Options(host) {
    this.host = host;
  }

  return Options;
}();
var defaultConfig = new Options();

var BuscadorCvu =
/** @class */
function (_super) {
  tslib.__extends(BuscadorCvu, _super);

  function BuscadorCvu() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.dismissCountDown = 0;
    _this.alertType = '';
    _this.alertMessage = '';
    _this.searchKey = '';
    _this.searchedKey = ''; // Used to show alert message

    _this.isSearching = false;
    return _this;
  }

  Object.defineProperty(BuscadorCvu.prototype, "options", {
    get: function get() {
      return this.$CVU_SEARCHER_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });

  BuscadorCvu.prototype.search = function () {
    var _this = this;

    if (this.searchKey) {
      this.isSearching = true;
      this.dismissCountDown = 0;
      new CvuService(this.options.host).retrieveByCvu(this.searchKey).then(function (pf) {
        _this.searchedKey = _this.searchKey + '';

        _this.$emit('input', pf);

        _this.searchKey = '';
        _this.isSearching = false;
      }).catch(function () {
        _this.$emit('input', null);

        _this.searchedKey = _this.searchKey + '';
        _this.alertType = 'warning';
        _this.alertMessage = "No se encontr\xF3 a la persona con cvu \"" + _this.searchKey + "\"";
        _this.dismissCountDown = 5;
        _this.isSearching = false;
      });
    }
  };

  BuscadorCvu.prototype.searchButtonDisabled = function () {
    return !this.searchKey || this.isSearching;
  };

  BuscadorCvu.prototype.clear = function () {
    return this.searchKey = '';
  };

  tslib.__decorate([vuePropertyDecorator.Prop()], BuscadorCvu.prototype, "value", void 0);

  BuscadorCvu = tslib.__decorate([vuePropertyDecorator.Component({
    components: {
      'font-awesome-icon': vueFontawesome.FontAwesomeIcon,
      'b-alert': bAlert
    }
  })], BuscadorCvu);
  return BuscadorCvu;
}(vuePropertyDecorator.Vue);

/* script */
var __vue_script__ = BuscadorCvu;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "form-group mb-5"
  }, [_c('b-alert', {
    attrs: {
      "show": _vm.dismissCountDown,
      "dismissible": "",
      "variant": _vm.alertType
    },
    on: {
      "dismissed": function dismissed($event) {
        _vm.dismissCountDown = 0;
      },
      "dismiss-count-down": function dismissCountDown($event) {
        _vm.dismissCountDown = $event;
      }
    }
  }, [_vm._t("message", [_vm._v(_vm._s(_vm.alertMessage))], {
    "cvu": _vm.searchedKey
  })], 2), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.search();
      }
    }
  }, [_c('div', {
    staticClass: "search-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: _vm.searchKey,
      expression: "searchKey",
      modifiers: {
        "trim": true
      }
    }],
    staticClass: "search-box",
    attrs: {
      "type": "text",
      "name": "focus",
      "required": "",
      "placeholder": "Enter search term"
    },
    domProps: {
      "value": _vm.searchKey
    },
    on: {
      "keyup": function keyup($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
          return null;
        }

        return _vm.search();
      },
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.searchKey = $event.target.value.trim();
      },
      "blur": function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "close-icon",
    on: {
      "click": _vm.clear
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "id": "cvu-search-button",
      "disabled": _vm.searchButtonDisabled()
    }
  }, [!_vm.isSearching ? _c('font-awesome-icon', {
    attrs: {
      "icon": "search"
    }
  }) : _c('span', {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      "role": "status",
      "aria-hidden": "true"
    }
  })], 1)])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3d42d87e_0", {
    source: "body{background-color:#f1f1f1;font-family:Helvetica,Arial,Verdana}.redfamily{color:red}.close-icon,.search-box,.search-wrapper{position:relative;padding:10px}.search-wrapper{width:500px;margin:auto;margin-top:50px}.search-box{width:80%;border:1px solid #ccc;outline:0;border-radius:15px}.search-box:focus{box-shadow:0 0 15px 5px #b0e0ee;border:2px solid #bebede}.close-icon{border:1px solid transparent;background-color:transparent;display:inline-block;vertical-align:middle;outline:0;cursor:pointer}.close-icon:after{content:\"X\";display:block;width:15px;height:15px;position:absolute;background-color:#fa9595;z-index:1;right:35px;top:0;bottom:0;margin:auto;padding:2px;border-radius:50%;text-align:center;color:#fff;font-weight:400;font-size:12px;box-shadow:0 0 2px #e50f0f;cursor:pointer}.search-box:not(:valid)~.close-icon{display:none}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "buscador-cvu.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook;

    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        var originalRender = component.render;

        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */


function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: [],
      parts: [],
      element: undefined
    });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;
      style.ids.push(id);

      if ( css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';
        if (css.media) el.setAttribute('media', css.media);

        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */


var BuscadorCvuComponent = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__);

var Domicilio =
/** @class */
function () {
  function Domicilio(direccion, tipo) {
    this.direccion = direccion;
    this.tipo = tipo;
  }

  return Domicilio;
}();

var EntidadFederativa =
/** @class */
function () {
  function EntidadFederativa(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  return EntidadFederativa;
}();

var Institucion =
/** @class */
function () {
  function Institucion(nombre, localidad, municipio, clave, entidadFederativa) {
    this.nombre = nombre;
    this.localidad = localidad;
    this.municipio = municipio;
    this.clave = clave;
    this.entidadFederativa = entidadFederativa;
  }

  return Institucion;
}();

var PersonaFisica =
/** @class */
function () {
  function PersonaFisica(cvu, curp, titulo, nombre, apellidoPaterno, apellidoMaterno, rfc, genero, correo, login, gradoAcademico, nivelsni, instituciones, domicilios, paisResidencia, rcea) {
    this.cvu = cvu;
    this.curp = curp;
    this.titulo = titulo;
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.rfc = rfc;
    this.genero = genero;
    this.correo = correo;
    this.login = login;
    this.gradoAcademico = gradoAcademico;
    this.nivelsni = nivelsni;
    this.instituciones = instituciones;
    this.domicilios = domicilios;
    this.paisResidencia = paisResidencia;
    this.rcea = rcea;
  }

  return PersonaFisica;
}();

var index = {
  install: function install(Vue, globalOptions) {
    var options = tslib.__assign(tslib.__assign({}, defaultConfig), globalOptions);

    Vue.prototype.$CVU_SEARCHER_DEFAULT_OPTIONS = options;
    Vue.component('buscador-cvu', BuscadorCvuComponent);
  }
};

exports.BuscadorCvuComponent = BuscadorCvuComponent;
exports.Domicilio = Domicilio;
exports.EntidadFederativa = EntidadFederativa;
exports.Institucion = Institucion;
exports.PersonaFisica = PersonaFisica;
exports.default = index;
//# sourceMappingURL=index.js.map
