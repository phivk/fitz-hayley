import DropdownSelector from "./DropdownSelector.vue";

export default {
  title: 'DropdownSelector',
  component: DropdownSelector,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DropdownSelector },
  template:
    '<dropdown-selector v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  options: ["title", "date", "author", "recipient"],
  label: "sorted by"
};
