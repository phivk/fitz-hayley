import EntityCard from "./EntityCard";
import imageFlaxman from "../images/flaxman.jpg";
import imageSussex from "../images/sussex-place.jpg";

export default {
  title: 'EntityCard',
  component: EntityCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EntityCard },
  template:
    '<entity-card v-bind="$props" />',
});

export const Person = Template.bind({});
Person.args = {
  bgImageSrc: imageFlaxman,
  type: "Person",
  title: "Firstname Lastname",
};

export const PersonWithoutImage = Template.bind({});
PersonWithoutImage.args = {
  type: "Person",
  title: "Firstname Lastname",
};

export const Place = Template.bind({});
Place.args = {
  bgImageSrc: imageSussex,
  type: "Place",
  title: "Location Name",
};

export const PlaceWithoutImage = Template.bind({});
PlaceWithoutImage.args = {
  type: "Place",
  title: "Location Name",
};
