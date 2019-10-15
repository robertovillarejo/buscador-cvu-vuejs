<template>
  <div id="app">
    <div class="row">
      <div class="col-4" />
      <div class="col-4">
        <buscador-cvu v-model="personaFisica"></buscador-cvu>
        <code>{{ personaFisica }}</code>
      </div>
      <div class="col-4" />
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
      personaFisica: null
    };
  }
});
</script>
