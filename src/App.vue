<template>
  <div id="app">
    <HeaderMenu></HeaderMenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderMenu from "@/components/HeaderMenu.vue"; // @ is an alias to /src

@Component({
  components: {
    HeaderMenu,
  },
})
export default class Home extends Vue {}
</script>
