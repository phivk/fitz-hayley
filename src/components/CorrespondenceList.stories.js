import CorrespondenceList from "./CorrespondenceList.vue";

export default {
  title: 'CorrespondenceList',
  component: CorrespondenceList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CorrespondenceList },
  template:
    '<correspondence-list v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  correspondences: [
    {
      names: ["William Blake"],
      backgroundIds: ["blake"],
      numberLetters: 5,
      curatorialStatement:
        "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character."
    },
    {
      names: ["William Blake", "John Flaxman"],
      backgroundIds: ["blake", "flaxman"],
      numberLetters: 13,
      curatorialStatement:
        "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character."
    },
    {
      names: ["John Flaxman"],
      backgroundIds: ["flaxman"],
      numberLetters: 7,
      curatorialStatement:
        "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character."
    }
  ]
};
