import Timeline from "./Timeline.vue";

export default {
  title: "Timeline",
  component: Timeline

};

const Template = (args, { argTypes }) => ({
  components: { Timeline },
  props: Object.keys(argTypes),
  template: `
    <Timeline v-bind="$props"/>
    `
});

export const FromJsonFile = Template.bind({});
FromJsonFile.args = {
  docId: 'https://amor.fitz.ms/correspondences/letters/tags/57/json',
};
export const FromGoogleDoc = Template.bind({});
FromGoogleDoc.args = {
  docId: '1OVpcK6srPgN53IBFqZJvuDSjjlaV6tFQ_E_T6QdDqZI',
};
