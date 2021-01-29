import TheHeader from './TheHeader';

export default {
  title: 'TheHeader',
  component: TheHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheHeader },
  template:
    '<the-header v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  wide: false,
};

export const Wide = Template.bind({});
Wide.args = {
  wide: true,
};
