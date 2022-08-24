<script setup lang="ts">
import { ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";  // the AG Grid Vue Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

const props = defineProps({
  demoData: {
    type: Array,
    required: true,
  },
  columnDefinitions: {
    type: Array,
    required: true,
  },
  defaultColDef: {
    type: Object,
    required: false,
  },
  onGridReady: {},
  rowSelection: {
    type: String,
    required: false,
    default: 'multiple'
  },
  animateRows: {
    type: String,
    required: false,
    default: 'true'
  },
  height: {
    type: Number,
    required: false,
    default: 500,
  },
})

const gridApi = ref(null); // Optional - for accessing Grid's API

const onGridReady = (params: any) => {
  gridApi.value = params.api;
};

const deselectRows = () => {
  //@ts-ignore
  gridApi.value.deselectAll()
};

const tableHeight = (height: Number):string => {
  return `height: ${height}px`
}
</script>


<template>
<ag-grid-vue class="ag-theme-alpine" :style="tableHeight(height)" :columnDefs="columnDefinitions" :rowData="demoData"
    :defaultColDef="defaultColDef" :rowSelection="rowSelection" :animateRows="animateRows"
    @grid-ready="onGridReady">
  </ag-grid-vue>
</template>