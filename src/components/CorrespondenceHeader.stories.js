import CorrespondenceHeader from "./CorrespondenceHeader.vue";

export default {
  title: 'CorrespondenceHeader',
  component: CorrespondenceHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CorrespondenceHeader },
  template:
    '<correspondence-header v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  correspondents: [
    {
      name: "John Flaxman",
      backgroundId: "flaxman",
      birthDate: "1755-07-06",
      occupation: "sculptor",
      relationToHayley: "Friend of"
    }
  ],
  numberLetters: 7,
  curatorialStatement:
    "A brief curatorial statement, describing the correspondent(s), the relationship they had with Hayley and what this correspondence reveals about Hayleys character."
};
