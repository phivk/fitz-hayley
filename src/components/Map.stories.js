import Map from "./Map.vue";

export default {
  title: "Map",
  component: Map

};

const Template = (args, { argTypes }) => ({
  components: { Map },
  props: Object.keys(argTypes),
  template: `
    <Map v-bind="$props"/>
    `
});

export const Simple = Template.bind({});
Simple.args = {
  'lat': 50.87468000,
  'lng': -0.66679001,
  'zoom': 12
};
