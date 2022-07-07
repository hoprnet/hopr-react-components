import React from 'react';
import styled from "@emotion/styled";
import Section from '../components/Section';

export default {
  title: 'Hopr/Section',
  component: Section,
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
    <Section {...args}>
      <Placeholder/>
    </Section>
  );

export const Gradient = Template.bind({});
Gradient.args = {
  gradient: true,
};

export const Yellow = Template.bind({});
Yellow.args = {
  yellow: true,
};


export const DarkGradient  = Template.bind({});
DarkGradient.args = {
  darkGradient: true,
};

export const Grey  = Template.bind({});
Grey.args = {
  grey: true,
};