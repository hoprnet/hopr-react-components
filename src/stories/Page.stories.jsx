import React from 'react';
import styled from "@emotion/styled";

import Layout from '../components/Layout';
import Brick from '../components/Brick'
import Section from '../components/Section'
import Typography from "../components/Typography";

import imageFile from './assets/hopr_derp.gif';

export default {
  title: 'Examples/Page',
  component: Layout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    sectionVariant: {
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
    <Layout >
      <Section
          variant={args.sectionVariant}
      >
          <Typography>
              {args.content}
          </Typography>
          {
              args.showBrick &&
              <Brick
                  title="HOW IS THIS DONE?"
                  text="As soon as you start a wallet, it gets in touch with the RPC provider to find out basic information such as your token balances and network (Ethereum, Polygon, Gnosis Chain, etc.)"
                  image={imageFile}
                  button={args.button}
                  buttonHref={args.buttonHref}
                  reverse={args.reverse}
                  className={args.className}
              />
          }
      </Section>
    </Layout>
  );

export const Default = Template.bind({});
Default.args = {
    content: "As soon as you start a wallet, it gets in touch with the RPC provider to find out basic information such as your token balances and network (Ethereum, Polygon, Gnosis Chain, etc.)",
    showBrick: true,
};
