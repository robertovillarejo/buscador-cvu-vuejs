<template>
  <div id="app">
    <div class="row justify-content-center">
      <h1>Ejemplos de buscador CVU</h1>
    </div>
    <div class="row">
      <div class="col-3" />
      <div class="col-3">
        <h5>Mostrando mensaje usando slot</h5>
        <buscador-cvu v-model="personaFisicaLeft">
          <template v-slot:message="slotProps">
            <span>NO SE ENCONTRÓ PERSONA CON CVU</span>
            {{ slotProps.cvu }}
          </template>
        </buscador-cvu>
        <code>{{ personaFisicaLeft }}</code>
      </div>
      <div class="col-3">
        <h5>Mostrando mensaje sin usar slot</h5>
        <buscador-cvu v-model="personaFisicaRight" />
        <code>{{ personaFisicaRight }}</code>
      </div>
      <div class="col-3" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BuscadorCvuComponent from "../src/index";

Vue.use(BuscadorCvuComponent, { host: "http://localhost:3000" });

export default Vue.extend({
  data: function() {
    return {
      personaFisicaLeft: null,
      personaFisicaRight: null
    };
  }
});
</script>
