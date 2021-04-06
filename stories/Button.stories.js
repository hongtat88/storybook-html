import { createButton } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    ripple: { control: 'boolean' },
    type: {
      control: { type: 'select', options: ['outlined', 'raised'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const outlined = Template.bind({});
outlined.storyName = 'Outlined';
outlined.args = {
  type: 'outlined',
  label: 'Button',
  ripple: true
};


export const raised = Template.bind({});
raised.storyName = 'Raised';
raised.args = {
  type: 'raised',
  label: 'Button',
  ripple: true
};

