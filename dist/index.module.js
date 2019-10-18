import { __extends, __decorate, __assign } from 'tslib';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import bAlert from 'bootstrap-vue/es/components/alert/alert';
import { Prop, Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

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

library.add(faSearch); // agrega el icono de lupa

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
  __extends(BuscadorCvu, _super);

  function BuscadorCvu() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.dismissCountDown = 0;
    _this.alertType = '';
    _this.alertMessage = '';
    _this.searchKey = '';
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

  BuscadorCvu.prototype.buscar = function () {
    var _this = this;

    if (this.searchKey) {
      this.isSearching = true;
      new CvuService(this.options.host).retrieveByCvu(this.searchKey).then(function (pf) {
        _this.$emit('input', pf);

        _this.searchKey = '';
        _this.isSearching = false;
      }).catch(function () {
        _this.alertType = 'warning';
        _this.alertMessage = "No se encontr\xF3 a la persona con cvu " + _this.searchKey;
        _this.dismissCountDown = 5;
        _this.isSearching = false;
      });
    }
  };

  __decorate([Prop()], BuscadorCvu.prototype, "value", void 0);

  BuscadorCvu = __decorate([Component({
    components: {
      'font-awesome-icon': FontAwesomeIcon,
      'b-alert': bAlert
    }
  })], BuscadorCvu);
  return BuscadorCvu;
}(Vue);

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
  }, [_vm._v(_vm._s(_vm.alertMessage))]), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.buscar();
      }
    }
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
    attrs: {
      "id": "cvu-search",
      "name": "cvu-search"
    },
    domProps: {
      "value": _vm.searchKey
    },
    on: {
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
  }), _vm._v(" "), _c('span', [_vm._v(" ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "id": "cvu-search-button",
      "disabled": _vm.isSearching
    }
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": "search"
    }
  }), _vm._v(" \n      "), !_vm.isSearching ? _c('span', [_vm._v("Buscar")]) : _c('span', [_vm._v("Buscando...")])], 1)])], 1);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
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

  return component;
}
/* style inject */

/* style inject SSR */


var BuscadorCvuComponent = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

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

var personaFisica_model = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PersonaFisica: PersonaFisica
});

var index = {
  install: function install(Vue, globalOptions) {
    var options = __assign(__assign({}, defaultConfig), globalOptions);

    Vue.prototype.$CVU_SEARCHER_DEFAULT_OPTIONS = options;
    Vue.component('buscador-cvu', BuscadorCvuComponent);
  }
};

export default index;
export { BuscadorCvuComponent, personaFisica_model as model };
//# sourceMappingURL=index.module.js.map
