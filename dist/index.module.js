import { __extends, __decorate } from 'tslib';
import Component from 'vue-class-component';
import { Vue } from 'vue-property-decorator';

var HelloWorldComponent =
/** @class */
function (_super) {
  __extends(HelloWorldComponent, _super);

  function HelloWorldComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HelloWorldComponent = __decorate([Component], HelloWorldComponent);
  return HelloWorldComponent;
}(Vue);

/* script */
var __vue_script__ = HelloWorldComponent;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('h1', [_vm._v("Buscador Cvu Component")]);
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

var index = {
  install: function install(Vue, options) {
    Vue.component('buscador-cvu', BuscadorCvuComponent);
  }
};

export default index;
export { BuscadorCvuComponent };
//# sourceMappingURL=index.module.js.map
