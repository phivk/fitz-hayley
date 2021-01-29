import AccordionLink from "./AccordionLink.vue";

export default {
  title: 'AccordionLink',
  component: AccordionLink,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AccordionLink },
  template:
    '<accordion-link v-bind="$props">{{slotContent}}</accordion-link>',
});

export const Regular = Template.bind({});
Regular.args = {
  slotContent: "Content to reveal",
  showText: "Show more",
  hideText: "Show less",
};
