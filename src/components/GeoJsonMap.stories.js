import GeoJsonMap from "./GeoJsonMap.vue";
import Map from "./Map.vue";

export default {
  title: "GeoJsonMap",
  component: GeoJsonMap

};

const Template = (args, { argTypes }) => ({
  components: { GeoJsonMap },
  props: Object.keys(argTypes),
  template: `
    <GeoJsonMap v-bind="$props"/>
    `
});

export const Simple = Template.bind({});
Simple.args = {
  'lat': '50.87468000',
  'lng': '-0.66679001',
  'zoom': '12',
  'path': "https://amor.fitz.ms/maps/places",
  'defaultLocation': {'lat': '50.87468000','lng': '-0.66679001'}
};
