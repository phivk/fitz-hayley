import CorrespondenceCardFront from "./CorrespondenceCardFront.vue";

export default {
  title: 'CorrespondenceCardFront',
  component: CorrespondenceCardFront,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CorrespondenceCardFront },
  template:
    '<correspondence-card-front v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  names: ["William Blake", "John Flaxman", "William Hayley"],
  backgrounds: ["blake", "flaxman", "hayley"]
};
