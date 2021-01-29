import ButtonLink from "./ButtonLink.vue";

export default {
  title: 'ButtonLink',
  component: ButtonLink,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonLink },
  template:
    '<button-link v-bind="$props">{{slotContent}}</button-link>',
});

export const Regular = Template.bind({});
Regular.args = {
  link: "https://en.wikipedia.org/wiki/William_Hayley",
  slotContent: "Discover the letters",
};
