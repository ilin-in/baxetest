// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Item from '.';

export default {
  title: 'components/OffersBar/Item',
  component: Item,
} as ComponentMeta<typeof Item>;

export const Basic: ComponentStory<typeof Item> = args => <Item {...args} />;

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
