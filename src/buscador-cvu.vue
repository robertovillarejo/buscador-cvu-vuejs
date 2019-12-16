<template>
  <div class="form-group mb-5">
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="alertType"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="dismissCountDown = $event"
    >
      <slot name="message" v-bind:cvu="searchKey">{{ alertMessage }}</slot>
    </b-alert>
    <form v-on:submit.prevent="search()">
      <input
        type="search"
        id="cvu-search"
        name="cvu-search"
        v-model.trim="searchKey"
      />
      <span>&nbsp;</span>
      <button
        type="submit"
        id="cvu-search-button"
        class="btn btn-primary"
        :disabled="searchButtonDisabled()"
      >
        <font-awesome-icon icon="search"></font-awesome-icon>&nbsp;
        <span v-if="!isSearching">Buscar</span>
        <span v-else>Buscando...</span>
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./buscador-cvu.component.ts"></script>
