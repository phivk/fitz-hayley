import NumberBullet from './NumberBullet';

export default {
  title: 'NumberBullet',
  component: NumberBullet,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NumberBullet },
  template:
    '<number-bullet v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  number: 1,
};
