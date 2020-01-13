<template>
  <div class="form-group mb-5">
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="alertType"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="dismissCountDown = $event"
    >
      <slot name="message" v-bind:cvu="searchedKey">{{ alertMessage }}</slot>
    </b-alert>
    <form v-on:submit.prevent="search()" class="control">
      <div class="search-wrapper">
        <input
          id="cvu-search"
          name="cvu-search"
          required
          class="input"
          placeholder="Enter search term"
          v-model.trim="searchKey"
        />
        <button type="button" class="close-icon" @click="clear"></button>
      </div>
      <button
        type="submit"
        id="cvu-search-button"
        class="btn btn-primary"
        :disabled="searchButtonDisabled()"
      >
        <font-awesome-icon
          icon="search"
          v-if="!isSearching"
        ></font-awesome-icon>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
          v-else
        ></span>
      </button>
    </form>
  </div>
</template>
<script lang="ts" src="./buscador-cvu.component.ts"></script>
<style>
.input,
.close-icon,
.search-wrapper {
  position: relative;
  padding: 10px;
}
.search-wrapper {
  width: 80%;
  margin: auto;
  margin-top: 30px;
}
.input {
  width: 80%;
  border: 1px solid #ccc;
  outline: 0;
  border-radius: 15px;
  max-width: 500%;
  text-align: center;
}
.close-icon {
  border: 1px solid transparent;
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.close-icon:after {
  content: "X";
  display: block;
  width: 15px;
  height: 15px;
  position: absolute;
  background-color: #b40c0c;
  z-index: 1;
  right: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  padding: 2px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-weight: normal;
  font-size: 9px;
  box-shadow: 0 0 2px #e50f0f;
  cursor: pointer;
}
.input:not(:valid) ~ .close-icon {
  display: none;
}
.control {
  display: flex;
  align-items: center;
}
.btn-primary {
  margin-top: 10%;
  width: 20%;
  position: static;
  margin-left: -35%;
}
</style>
