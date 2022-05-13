<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/compareTable">CompareTable</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderMenu extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
@import "./HeaderMenu.scss";
</style>
