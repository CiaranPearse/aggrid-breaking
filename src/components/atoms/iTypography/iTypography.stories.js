import ITypography from './ITypography.vue';
import { Appearances, Alignments, Emphasis } from '../../../constants';

export default {
  title: 'Atoms/ITypography',
  component: ITypography,
  argTypes: {
    content: 'Example Content',
    appearance: {
      control: { type: 'select' },
      options: Appearances,
    },
    align: {
      control: { type: 'select' },
      options: Alignments,
    },
    emphasis: {
      control: { type: 'select' },
      options: Emphasis,
    },
  },
};

const Template = (args) => ({
  components: { ITypography },
  setup() {
    return { args };
  },
  template: '<i-typography v-bind="args" />',
});

export const Text = Template.bind({});
Text.args = {
  content: `This some typography`,
  appearance: 'h1',
  align: 'left',
};

