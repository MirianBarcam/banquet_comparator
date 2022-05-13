<template>
  <div class="table">
    <div class="table_titles">
      //TODO---recibe los nombres de columnas de abajo
      <h1>Nombre</h1>
      <h1>Precio</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Table extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
@import "./Table.scss";
</style>
