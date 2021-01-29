import TheBreadcrumbs from "./TheBreadcrumbs.vue";

export default {
  title: 'TheBreadcrumbs',
  component: TheBreadcrumbs,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TheBreadcrumbs },
  template:
    '<the-breadcrumbs v-bind="$props" />',
});

export const FromPathList = Template.bind({});
FromPathList.args = {
  pathList: [
    {
      text: "First",
      path: "/first"
    },
    {
      text: "Second",
      path: "/first/second"
    },
    {
      text: "Third",
      path: "/first/second/third"
    }
  ]
};

export const FromWindowLocation = Template.bind({});
FromWindowLocation.args = {};
