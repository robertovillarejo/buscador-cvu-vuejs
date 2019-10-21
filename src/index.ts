import { defaultConfig } from './buscador-cvu.component';
import BuscadorCvuComponent from "./buscador-cvu.vue";
import { Domicilio, EntidadFederativa, IDomicilio, IEntidadFederativa, IInstitucion, Institucion, IPersonaFisica, PersonaFisica } from "./model";

export default {
  install(Vue: any, globalOptions: any) {
    const options = { ...defaultConfig, ...globalOptions };
    Vue.prototype.$CVU_SEARCHER_DEFAULT_OPTIONS = options;
    Vue.component('buscador-cvu', BuscadorCvuComponent);
  }
}

export { BuscadorCvuComponent, IDomicilio, IEntidadFederativa, IInstitucion, IPersonaFisica, Domicilio, EntidadFederativa, Institucion, PersonaFisica };
