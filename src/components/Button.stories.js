import Button from "./Button.vue";

export default {
  title: 'Button',
  component: Button,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template:
    '<Button v-bind="$props">{{slotContent}}</Button>',
});

export const Regular = Template.bind({});
Regular.args = {
  slotContent: "Button text",

};

export const Square = Template.bind({});
Square.args = {
  slotContent: "+",
  square: true,
};
