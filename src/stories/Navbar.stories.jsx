import React from 'react';
import styled from "@emotion/styled";
import Navbar from '../components/Layout/navbar.jsx';
import imageFile from "./assets/hopr_derp.gif";

export default {
  title: 'Hopr/Navbar',
  component: Navbar,
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
    <Navbar>
    </Navbar>
  );

export const Default = Template.bind({});

