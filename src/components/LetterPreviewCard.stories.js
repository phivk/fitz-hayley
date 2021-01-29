import LetterPreviewCard from "./LetterPreviewCard.vue";
import imageLetter2 from "../images/letter-page-2.jpg";

export default {
  title: 'LetterPreviewCard',
  component: LetterPreviewCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LetterPreviewCard },
  template:
    '<letter-preview-card v-bind="$props" />',
});

export const Regular = Template.bind({});
Regular.args = {
  title: "William Hayley to Anna Seward: letter",
  date: "1782-06-11",
  author: { name: "Firstname Lastname", link: "#" },
  recipient: { name: "Firstname Lastname", link: "#" },
  entityCount: {
    people: 5,
    places: 3,
    events: 7
  },
  link: "/another-page"
};

export const WithCustomLetterBg = Template.bind({});
WithCustomLetterBg.args = {
  title: "William Hayley to Anna Seward: letter",
  date: "1782-06-11",
  author: { name: "Firstname Lastname", link: "#" },
  recipient: { name: "Firstname Lastname", link: "#" },
  entityCount: {
    people: 5,
    places: 3,
    events: 7
  },
  link: "/another-page",
  letterBgSrc: imageLetter2
};

export const WithManyEntityTypes = Template.bind({});
WithManyEntityTypes.args = {
  title: "William Hayley to Anna Seward: letter",
  date: "1782-06-11",
  author: { name: "Firstname Lastname", link: "#" },
  recipient: { name: "Firstname Lastname", link: "#" },
  entityCount: {
    people: 2,
    places: 2,
    events: 3,
    families: 1,
    artworks: 3
  },
  link: "/another-page"
};

export const WithoutEntityTypes = Template.bind({});
WithoutEntityTypes.args = {
  title: "William Hayley to Anna Seward: letter",
  date: "1782-06-11",
  author: { name: "Firstname Lastname", link: "#" },
  recipient: { name: "Firstname Lastname", link: "#" },
  link: "/another-page"
};
