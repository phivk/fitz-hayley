import CTACard from "./CTACard.vue";

export default {
  title: 'CTACard',
  component: CTACard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CTACard },
  template:
    '<CTA-card v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  title: "Correspondences",
  content: "A sentence explaining what’s interesting about correspondences.",
  buttonText: "Start reading",
  buttonLink: "/another-page",
};
