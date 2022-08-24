<template>
  <v-btn v-if="buttonText && buttonText !== '' && !buttonIcon" :variant="variant" :color="color" :disabled="disabled" :size="size"
    @click.stop="() => buttonPressed(intent, identifier, action)">
    {{ buttonText }}
  </v-btn>
  <v-btn v-else-if="buttonText && buttonText !== '' && buttonIcon" :variant="variant" :color="color" :disabled="disabled" :size="size"
    @click.stop="() => buttonPressed(intent, identifier, action)" :prepend-icon="buttonIcon">
    {{ buttonText }}
  </v-btn>
  <v-btn v-else :icon="buttonIcon" :color="color" :disabled="disabled" :size="size"
    @click.stop="() => buttonPressed(intent, identifier, action)"></v-btn>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import './iButton.css';
import { Variants } from '../../../constants';
import { Colors } from '../../../constants/text/colors';
import router from '../../../router';
import { IButtonPressEvent } from '../../../types'

const emitter = inject('emitter');
const props = defineProps({
  buttonText: {
    type: String,
    required: false,
  },
  buttonIcon: {
    type: String,
    required: false,
  },
  variant: {
    type: String,
    required: false,
    default: Variants.Default,
  },
  size: {
    type: String,
    default: 'default',
  },
  color: {
    type: String,
    default: Colors.Primary,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  intent: {
    type: String,
    required: true,
    default: 'func',
  },
  identifier: {
    type: String,
  },
  action: {
    type: String,
  }
})


const buttonPressed = (intent: string, identifier: string | undefined, action?: string | undefined): void => {
  if (intent === 'link' && action) {
    router.push(action)
  } else {
    // TO DO - FIX THIS IGNORE
    //@ts-ignore
    emitter.emit(identifier, 100);
    return
  }
}

</script>
