<script setup lang="ts">
import IAgGrid2 from '@molecules/iAgGrid/IAgGrid2.vue';


const demoData =
[{
	"id": 2809,
	"code": "EPN403-12",
}, {
	"id": 2734,
	"code": "SDL201-1",
}];

const columnDefs = reactive({
  value: [
    { field: "id", flex: 1 },
    { field: "code", width: 80, },
  ]
});

const defaultColDef = {
  resizable: true,
  sortable: true,
  filter: true,
};


</script>

<template>
  <i-ag-grid2
    :demoData="demoData"
    :columnDefinitions="columnDefs.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    animateRows="true"
    height=500
  />
</template>
