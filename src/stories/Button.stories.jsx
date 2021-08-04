import React from 'react';

import Sparkline from 'react-sparkline-svg';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
};

const getArrayOfRandomNumbers = (arraySize = 20, min = 1, max = 100) => Array(arraySize)
      .fill(null)
      .map((_) => getRandomInt(min, max));

export default {
  title: 'Sparkline',
  component: Sparkline,
  argTypes: {
    decimals: {
      control: { type: 'number' }
    },
    desc: {
      control: { type: 'text' }
    },
    fill: {
      control: { type: 'color' }
    },
    height: {
      control: { type: 'text' }
    },
    preserveAspectRatio: {
      control: { type: 'text' }
    },
    stroke: {
      control: { type: 'color' }
    },
    strokeWidth: {
      control: { type: 'text' }
    },
    title: {
      control: { type: 'text' }
    },
    viewBoxHeight: {
      control: { type: 'number' }
    },
    viewBoxWidth: {
      control: { type: 'number' }
    },
    width: {
      control: { type: 'text' }
    },
  }
};

const Template = (args) => <Sparkline {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  values: getArrayOfRandomNumbers(40, 10, 1000),
  width: '600px',
  height: '200px',
  fill: 'dodgerblue',
  stroke: 'blue',
  strokeWidth: '0.35'
}