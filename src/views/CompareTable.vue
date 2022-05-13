<template>
  <div class="compareTable">
    <h1>This is CompareTable</h1>
    <Table></Table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Table from "@/components/Table.vue"; // @ is an alias to /src

@Component({
  components: {
    Table,
  },
})
export default class CompareTable extends Vue {}
</script>
