import AvatarBackground from "./AvatarBackground.vue";

import imageFlaxman from "../images/flaxman.jpg";
import imageHayley from "../images/hayley.jpg";
import imageBlake from "../images/blake.jpg";
import imageSussex from "../images/sussex-place.jpg";

export default {
  title: 'AvatarBackground',
  component: AvatarBackground,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AvatarBackground },
  template:
    '<avatar-background v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  avatars: [
    {
      type: "Person",
      bgImageSrc: imageHayley
    },
    {
      type: "Person",
      bgImageSrc: imageFlaxman
    },
    {
      type: "Person",
      bgImageSrc: imageBlake
    },
    {
      type: "Place",
      bgImageSrc: imageSussex
    },
    {
      type: "Person",
      bgImageSrc: imageHayley
    },
    {
      type: "Person",
      bgImageSrc: imageFlaxman
    },
    {
      type: "Person",
      bgImageSrc: imageBlake
    },
    {
      type: "Place",
      bgImageSrc: imageSussex
    }
  ],
  excludeZoneRatios: {
    minX: 0.2,
    maxX: 0.8,
    minY: 0.2,
    maxY: 0.8
  }
};

export const ShowExclusionZone = Template.bind({});
ShowExclusionZone.args = {
  ...Regular.args,
  showExclusionZone: true,
};
