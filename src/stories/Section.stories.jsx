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
  argTypes: {
    variant: {
      options: [null, 'gradient', 'yellow', 'darkGradient', 'grey'],
      control: { type: 'radio' },
    },
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

export const Default = Template.bind({});
