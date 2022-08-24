<template>
  <div :class="classes">{{ content }}</div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { Appearances, Alignments, Emphasis } from '../../../constants';

export default {
  name: 'ITypography',
  props: {
    content: {
      type: String,
      required: true,
    },
    appearance: {
      type: String,
      default: Appearances.Body1,
    },
    align: {
      type: String,
      default: Alignments.Left,
    },
    emphasis: {
      type: String,
      default: Emphasis.Regular,
    }
  },

  setup(props: { content: string; appearance: string; align: string; emphasis:string;}) {
    return {
      classes: computed(() => ({
        'typography-text': true,
        'text-h1': props.appearance === Appearances.H1,
        'text-h2': props.appearance === Appearances.H2,
        'text-h3': props.appearance === Appearances.H3,
        'text-h4': props.appearance === Appearances.H4,
        'text-h5': props.appearance === Appearances.H5,
        'text-h6': props.appearance === Appearances.H6,
        [`text-${props.appearance || 'text-body-1'}`]: true,
        'text-left': props.align === 'left',
        'text-center': props.align === 'center',
        'text-right': props.align === 'right',
        'text-justify': props.align === 'justify',
        'text-start': props.align === 'start',
        'text-end': props.align === 'end',
        'font-weight-black': props.emphasis === Emphasis.Bolder,
        'font-weight-bold': props.emphasis === Emphasis.Bold,
        'font-weight-medium': props.emphasis === Emphasis.Medium,
        'font-weight-regular': props.emphasis === Emphasis.Regular,
        'font-weight-light': props.emphasis === Emphasis.Light,
        'font-weight-thin': props.emphasis === Emphasis.Thin,
        'font-italic': props.emphasis === Emphasis.Italic,
      })),
    };
  },
};
</script>
