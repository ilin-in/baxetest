// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import BalanceCard from '.';

export default {
  title: 'components/BalanceCard',
  component: BalanceCard,
} as ComponentMeta<typeof BalanceCard>;

export const Basic: ComponentStory<typeof BalanceCard> = () => <BalanceCard />;

Basic.args = {};
