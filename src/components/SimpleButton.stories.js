import SimpleButton from "./SimpleButton.vue";
import Button from "./Button.vue";
import ButtonLink from "./ButtonLink.vue";

import "../css/reset.css";
import "../css/global-styles.scss";

export default {
  title: "SimpleButton",
  component: SimpleButton

};

const Template = (args, { argTypes }) => ({
  components: { SimpleButton, Button, ButtonLink },
  props: Object.keys(argTypes),
  data: function() {
    return {
      handleClick: function() {
        alert("You clicked the button");
      }
    };
  },
  template: `
    <SimpleButton :onClick="handleClick" v-bind="$props"/>
    `
});

export const Regular = Template.bind({});
Regular.args = {
  buttonText: 'Explore more',
  buttonLink: '/#',
};
