import ColourPalette from "./ColourPalette.vue";

export default {
  title: 'Utils/ColourPalette',
  component: ColourPalette,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ColourPalette },
  template:
    '<colour-palette v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {};
