import { reactive } from 'vue';
import IAgGrid2 from './IAgGrid2.vue';

export default {
  title: 'Organisms/IAgGrid2',
  component: IAgGrid2,
  argTypes: {}
};

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
    { field: "entityCodeLife", width: 140 },
  ],
});

const defaultColDef = {
  resizable: true,
  sortable: true,
  filter: true,
};

const Template = (args) => ({
  components: { IAgGrid2 },
  setup() {
    return { args };
  },
  template: '<i-ag-grid2 v-bind="args" />',
});

export const PullPlanFromParent = Template.bind({});
PullPlanFromParent.args = {
  demoData: demoData,
  columnDefs: columnDefs.value,
  defaultColDef: defaultColDef,
  rowSelection: "multiple",
  animateRows: "true",
};

