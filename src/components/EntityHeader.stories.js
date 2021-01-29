import EntityHeader from "./EntityHeader.vue";
import imageFlaxman from "../images/flaxman.jpg";
import imageSussex from "../images/sussex-place.jpg";

export default {
  title: 'EntityHeader',
  component: EntityHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EntityHeader },
  template:
    '<entity-header v-bind="$props" />',
});

export const Person = Template.bind({});
Person.args = {
  type: "person",
  title: "Flaxman, John (Jnr)",
  metadataHead: {
    'Birth Date': "1755-07-06",
    'Death Date': "1826-12-07",
    'Birth Place': "Amsterdam",
    'Death Place': "NYC",
    'Occupation': "sculptor",
    'Nickname': "The Flax",
    "Relation To Hayley": "Friend of",
  }, 
  metadataTail: {
    "First Name": "John",
    "Last Name": "Flaxman",
    "Title Aristocrats": "Sir",
    "Bibliography": "Example Bibliography",
  },
  numberLetters: 7, 
  bodyText: "John Flaxman RA (6 July 1755 – 7 December 1826) was a British sculptor and draughtsman, and a leading figure in British and European Neoclassicism. Early in his career he worked as a modeller for Josiah Wedgwood's pottery. He spent several years in Rome, where he produced his first book illustrations. He was a prolific maker of funerary monuments.",
};

export const Place = Template.bind({});
Place.args = {
  type: "place",
  title: "Buxton, Derbyshire",
  metadataHead: {
    "Latitude": "53.259082",
    "Longitude": "-1.91483",
    "Address Today": "Buxton, Derbyshire SK17, UK",
  },
  metadataTail: {},
  numberLetters: 3,
  bodyText:  "Town in Derbyshire. Home to Mrs Gladwin",
};
