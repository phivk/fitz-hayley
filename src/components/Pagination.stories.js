import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template:
    '<pagination v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  currentIndex: 1,
  totalPages: 10,
};
