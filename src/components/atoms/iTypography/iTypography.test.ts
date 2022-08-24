import { createVuetify } from "vuetify";
import { mount } from '@vue/test-utils';
import ITypography from './ITypography.vue';

const vuetify = createVuetify();

describe('Typography', () => {
  
  it('should render', () => {
    const wrapper = mount(ITypography, {
      props: {
          content: "Test Button",
      },
      global: {
          plugins: [vuetify],
      },
  });
    expect(ITypography).toBeTruthy()
  })

  it('renders with Click Me', () => {
    const buttonText = 'Click Me';
    const wrapper = mount(ITypography, {
      props: {
        content: buttonText
      },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toMatch(buttonText);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders with Click Me as Caption', () => {
    const buttonText = 'Click Me';
    const wrapper = mount(ITypography, {
      props: {
        content: buttonText,
        appearance: 'caption'
      },
      global: {
        plugins: [vuetify],
      },
    });
    const byClass = wrapper.find('.text-caption')
    expect(wrapper.text()).toMatch(buttonText);
    const correctClass = wrapper.find('.text-caption')
    expect(correctClass.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot();
  });


  it('renders with Click Me as body-1', () => {
    const buttonText = 'Click Me';
    const wrapper = mount(ITypography, {
      props: {
        content: buttonText,
        align: 'center',
      },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toMatch(buttonText);
    const textClass = wrapper.find('.text-body-1');
    const alignClass = wrapper.find('.text-center');
    expect(textClass.exists()).toBe(true)
    expect(alignClass.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders with Click Me as body-1 and bolder', () => {
    const buttonText = 'Click Me';
    const wrapper = mount(ITypography, {
      props: {
        content: buttonText,
        align: 'center',
        emphasis: 'bolder',
      },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toMatch(buttonText);
    const textClass = wrapper.find('.text-body-1');
    const alignClass = wrapper.find('.text-center');
    const emphasisClass = wrapper.find('.font-weight-black');
    expect(textClass.exists()).toBe(true);
    expect(alignClass.exists()).toBe(true);
    expect(emphasisClass.exists()).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });
})