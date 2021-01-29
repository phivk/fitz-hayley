import AvatarItem from "./AvatarItem.vue";
import imageFlaxman from "../images/flaxman.jpg";
import imageSussex from "../images/sussex-place.jpg";

export default {
  title: 'AvatarItem',
  component: AvatarItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AvatarItem },
  template:
    '<avatar-item v-bind="$props" />',
});

export const PersonWithImage = Template.bind({});
PersonWithImage.args = {
  type: "Person",
  bgImageSrc: imageFlaxman
};

export const PersonWithImageId = Template.bind({});
PersonWithImageId.args = {
  type: "Person",
  backgroundId: "blake"
};

export const PersonWithoutImage = Template.bind({});
PersonWithoutImage.args = {
  type: "Person",
};

export const PersonSmall = Template.bind({});
PersonSmall.args = {
  type: "Person",
  small: true,
};

export const PlaceWithImage = Template.bind({});
PlaceWithImage.args = {
  type: "Place",
  bgImageSrc: imageSussex
};

export const PlaceWithoutImage = Template.bind({});
PlaceWithoutImage.args = {
  type: "Place",
};


export const PlaceSmall = Template.bind({});
PlaceSmall.args = {
  type: "Place",
  small: true,
};
