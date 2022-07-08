import React from 'react';
import styled from "@emotion/styled";
import Footer from '../components/Layout/footer.jsx';

export default {
  title: 'Hopr/Footer',
  component: Footer,
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
    <Footer>
    </Footer>
  );

export const Default = Template.bind({});
