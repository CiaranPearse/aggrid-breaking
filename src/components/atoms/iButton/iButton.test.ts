import { createVuetify } from "vuetify";
import { mount } from '@vue/test-utils';
import IButton from './IButton.vue';
import { useRouter, useRoute } from 'vue-router'
import jest from 'jest-mock'

const vuetify = createVuetify();



describe('Button', () => {
  
  it('should render', () => {
    const wrapper = mount(IButton, {
      props: {
        buttonText: "Test Button",
        color: 'primary',
        intent: 'link'
      },
      global: {
          plugins: [vuetify],
      },
  });
    expect(IButton).toBeTruthy()
  })

  it('should render as a Flat Button', () => {
    const flatButtonText = 'Flat Button';
    const wrapper = mount(IButton, {
      props: {
        buttonText: flatButtonText,
        variant: 'flat',
        color: 'primary',
        intent: 'link'
      },
      global: {
          plugins: [vuetify],
      },
  });
  expect(wrapper.text()).toMatch(flatButtonText);
  const correctClass = wrapper.find('.v-btn--variant-flat');
  expect(correctClass.exists()).toBe(true);
  expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render as an Icon Button', () => {
    const wrapper = mount(IButton, {
      props: {
        buttonIcon: 'mdi-home-outline',
        buttonText: '',
        color: 'primary',
        intent: 'link'
      },
      global: {
          plugins: [vuetify],
      },
  });
  const correctClass = wrapper.find('.mdi-home-outline');
  expect(correctClass.exists()).toBe(true);
  expect(wrapper.html()).toMatchSnapshot();
  })

  it('should render as an Icon and text button', () => {
    const flatButtonText = 'Flat Button';
    const wrapper = mount(IButton, {
      props: {
        buttonText: flatButtonText,
        buttonIcon: 'mdi-home-outline',
        variant: 'flat',
        color: 'primary',
        intent: 'link'
      },
      global: {
          plugins: [vuetify],
      },
  });
  expect(wrapper.text()).toMatch(flatButtonText);
  const correctClass = wrapper.find('.mdi-home-outline');
  expect(correctClass.exists()).toBe(true);
  expect(wrapper.html()).toMatchSnapshot();
  })

  it('should emit a value when clicked if function', async () => {
    const flatButtonText = 'Flat Button';
    const wrapper = mount(IButton, {
      props: {
        buttonText: flatButtonText,
        buttonIcon: 'mdi-home-outline',
        variant: 'flat',
        color: 'primary',
        intent: 'func',
        identifier: 'testIdentifier',
        action: 'textAction'
      },
      global: {
          plugins: [vuetify],
      },
  });
  wrapper.find('button').trigger('click')
  wrapper.vm.$emit('testIdentifier', 'testAction')
  await wrapper.vm.$nextTick()
  expect(wrapper.emitted().testIdentifier).toBeTruthy();
  expect(wrapper.emitted().testIdentifier[0]).toEqual(['testAction'])
  })
})