import Typewriter from 'typewriter-effect';
import React from 'react';

export const getDynamicTagLine = () =>
    <Typewriter
        options={{
            strings: ['{ Cooking some tasty code recipes }', '{ Improving myself and empowering others }', '{ Enjoying my best life }'],
            autoStart: true,
            loop: true,
        }}
    />