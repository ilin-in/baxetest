import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import OffersBar from '.';

export default {
  title: 'components/OffersBar',
  component: OffersBar,
} as ComponentMeta<typeof OffersBar>;

export const Basic: ComponentStory<typeof OffersBar> = () => <OffersBar />;

Basic.args = {};
