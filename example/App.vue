<template>
  <div id="app">
    <buscador-cvu></buscador-cvu>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import BuscadorCvuComponent from "../src/buscador-cvu.vue";

export default Vue.extend({
  components: { "buscador-cvu": BuscadorCvuComponent }
});
</script>
