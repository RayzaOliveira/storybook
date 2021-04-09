import Countdown from './Countdown';

export default {
  title: 'Atoms/Countdown',
  component: Countdown,
};

const Template = (args: any) => {
  return <Countdown {...args} />;
};

export const Example = Template.bind({});

Example.args = {
  endDate: Date.now() + 10000,
};
