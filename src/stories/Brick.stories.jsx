import React from 'react';
import styled from "@emotion/styled";

import Brick from '../components/Brick';
import Section from '../components/Section';

import imageFile from './assets/hopr_derp.gif';
import {LoggedOut} from "./Header.stories";


export default {
    title: 'Hopr/Brick',
    component: Brick,
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
    <Section
        variant={args.sectionVariant}
    >
        <Brick
            title={args.title}
            text={args.text}
            image={args.image}
            button={args.button}
            buttonHref={args.buttonHref}
            reverse={args.reverse}
            className={args.className}
        />
    </Section>
);

export const Default = Template.bind({});
Default.args = {
    title: "HOW IS THIS DONE?",
    text: "As soon as you start a wallet, it gets in touch with the RPC provider to find out basic information such as your token balances and network (Ethereum, Polygon, Gnosis Chain, etc.)",
    image: imageFile,
    button: "LEARN MORE",
    buttonHref: "https://medium.com/hoprnet/intro-to-d-e-r-p-9e09a5e54904",
    reverse: false,
    className: ''
};
