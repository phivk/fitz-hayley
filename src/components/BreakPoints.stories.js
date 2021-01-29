import BreakPoints from "./BreakPoints.vue";

export default {
  title: 'Utils/BreakPoints',
  component: BreakPoints,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BreakPoints },
  template:
    '<break-points v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {};
