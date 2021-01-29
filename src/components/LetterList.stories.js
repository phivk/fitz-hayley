import LetterList from "./LetterList.vue";

export default {
  title: 'LetterList',
  component: LetterList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LetterList },
  template:
    '<letter-list v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  letters: [
    {
      title: "William Hayley to Anna Seward: letter",
      date: "1782-06-11",
      author: { name: "William Hayley", link: "#" },
      recipient: { name: "Anna Seward", link: "#" },
      entityCount: {
        people: 1,
        places: 4,
        events: 6
      },
      link: "#"
    },
    {
      title: "Anna Seward to William Hayley: letter",
      date: "1782-06-12",
      author: { name: "Anna Seward", link: "#" },
      recipient: { name: "William Hayley", link: "#" },
      entityCount: {
        people: 5,
        places: 3,
        events: 7
      },
      link: "#"
    },
    {
      title: "William Hayley to Anna Seward: letter",
      date: "1782-06-13",
      author: { name: "William Hayley", link: "#" },
      recipient: { name: "Anna Seward", link: "#" },
      entityCount: {
        people: 3,
        places: 2,
        events: 1
      },
      link: "#"
    }
  ]
};
