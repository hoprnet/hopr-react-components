import React from 'react';
import styled from "@emotion/styled";
import Typography from '../components/Typography';

export default {
  title: 'Hopr/Typography',
  component: Typography,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Placeholder = styled.div`
  height: 300px; 
  width: 300px
`

const Template = (args) => (
  <Typography
      {...args}
  >
    {args.text}
  </Typography>
  );


export const Default = Template.bind({});
Default.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

export const h2 = Template.bind({});
h2.args = {
  type: "h2",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
};

export const h5 = Template.bind({});
h5.args = {
  type: "h5",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
};

export const h6 = Template.bind({});
h6.args = {
  type: "h6",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
};

