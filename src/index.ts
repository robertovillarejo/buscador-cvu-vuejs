import BuscadorCvuComponent from "./buscador-cvu.vue";

export default {
  install(Vue: any, options: any) {
    Vue.component('buscador-cvu', BuscadorCvuComponent);
  }
}

export { BuscadorCvuComponent };