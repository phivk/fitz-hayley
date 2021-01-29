import CorrespondenceCard from "./CorrespondenceCard.vue";

export default {
  title: 'CorrespondenceCard',
  component: CorrespondenceCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CorrespondenceCard },
  template:
    '<correspondence-card v-bind="$props" />',
});

export const Single = Template.bind({});
Single.args = {
  names: ["John Flaxman"],
  backgroundIds: ["flaxman"],
  numberLetters: 7,
  curatorialStatement:
    "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character.",
  buttonText: "Explore",
  buttonLink: "/another-page"
};

export const Multi = Template.bind({});
Multi.args = {
  names: ["William Blake", "John Flaxman"],
  backgroundIds: ["blake", "flaxman"],
  numberLetters: 7,
  curatorialStatement:
    "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character.",
  buttonText: "Explore",
  buttonLink: "/another-page"
};
