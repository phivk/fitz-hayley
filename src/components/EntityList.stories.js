import EntityList from "./EntityList.vue";
import imageFlaxman from "../images/flaxman.jpg";
import imageSussex from "../images/sussex-place.jpg";

export default {
  title: 'EntityList',
  component: EntityList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EntityList },
  template:
    '<entity-list v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  entities: [
    {
      type: "Person",
      title: "Firstname Lastname",
      linkPath: "#",
      bgImageSrc: imageFlaxman
    },
    {
      type: "Person",
      title: "Firstname Lastname",
      linkPath: "#"
    },
    {
      type: "Person",
      title: "Firstname Lastname",
      linkPath: "#",
      bgImageSrc: imageFlaxman
    },
    {
      type: "Person",
      title: "Firstname Lastname",
      linkPath: "#"
    },
    {
      type: "Place",
      title: "Place Name",
      linkPath: "#",
      bgImageSrc: imageSussex
    },
    {
      type: "Place",
      title: "Place Name",
      linkPath: "#"
    },
    {
      type: "Place",
      title: "Place Name",
      linkPath: "#",
      bgImageSrc: imageSussex
    },
    {
      type: "Place",
      title: "Place Name",
      linkPath: "#"
    }
  ]
};

export const Filtered = Template.bind({});
Filtered.args = {
  ...Regular.args,
  typeFilter: "Person",
};
