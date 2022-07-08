import React from 'react';
import styled from "@emotion/styled";

import EncourageSection from '../components/EncourageSection';

import typingBotAnimation from '../assets/animations/typing-bot-animation.json'
import imageFile from "./assets/hopr_derp.gif";

export default {
  title: 'Hopr/EncourageSection',
  component: EncourageSection,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};


const Template = (args) => (
    <EncourageSection
        {...args}
    />
);

export const Default = Template.bind({});
Default.args = {
  title: 'BE PART OF THE HOPR ECOSYSTEM',
  text: 'HOPR is building the transport layer privacy needed to make web3 work. Work with us to build dApps that change data privacy for good.',
  animationData: typingBotAnimation
};

