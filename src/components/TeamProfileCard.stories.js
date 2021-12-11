import TeamProfileCard from "./TeamProfileCard.vue";
import AccordionLink from "./AccordionLink.vue"
import AvatarItem from "./AvatarItem.vue"

import "../css/reset.css";
import "../css/global-styles.scss";

export default {
  title: "TeamProfileCard",
  component: TeamProfileCard

};

const Template = (args, { argTypes }) => ({
  components: { TeamProfileCard, AccordionLink, AvatarItem },
  props: Object.keys(argTypes),
  template: `
    <TeamProfileCard  v-bind="$props"/>
    `
});

export const Regular = Template.bind({});
Regular.args = {
  name: 'Daniel Pett',
  biography: 'Dan was previously Digital Humanities lead at the British Museum, where he designed and implemented digital innovation connecting humanities research, museum practice, and the creative industries. In doing so, he has created extensive cross-disciplinary and cross-sector networks.',
  role: 'Principal investigator',
  bgImageSrc: 'https://hayleypapers.fitzmuseum.cam.ac.uk/files/square_thumbnails/7bce2802b4f3dbb7210d9aa7f445f74f.jpg'
};
