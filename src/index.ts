import BuscadorCvuComponent from "./buscador-cvu.vue";
import { defaultConfig } from './buscador-cvu.component';

export default {
  install(Vue: any, globalOptions: any) {
    const options = { ...defaultConfig, ...globalOptions };
    Vue.prototype.$CVU_SEARCHER_DEFAULT_OPTIONS = options;
    Vue.component('buscador-cvu', BuscadorCvuComponent);
  }
}

export { BuscadorCvuComponent };