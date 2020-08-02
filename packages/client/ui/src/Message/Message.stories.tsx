import React from 'react';

import { Message } from './Message';

export default {
  title: 'Example/Message',
  component: Message,
};

const Template = (args: any) => <Message {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  message: 'a',
};
