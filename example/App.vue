<template>
  <div id="app">
    <div class="row">
      <div class="col-4"/>
      <div class="col-4">
        <buscador-cvu></buscador-cvu>
      </div>
      <div class="col-4"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BuscadorCvuComponent from "../src/buscador-cvu.vue";

export default Vue.extend({
  components: { "buscador-cvu": BuscadorCvuComponent }
});
</script>
