import React from 'react';

import { Text } from '@theme-ui/components';
import CountdownComponent from 'react-countdown';

// Random component
const Completionist = () => <Text sx={{ fontSize: '48px' }}>END!!</Text>;

type CountDownRenderedProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
  renderFinish: React.ReactElement;
};
// Renderer callback with condition
const CountDownRendered = ({
  hours,
  minutes,
  seconds,
  completed,
  renderFinish,
}: CountDownRenderedProps) => {
  if (completed) {
    // Render a completed state
    return renderFinish;
  }
  // Render a countdown
  return (
    <Text sx={{ fontSize: '48px' }}>{`${hours}h${minutes}m${seconds}s`}</Text>
  );
};
type CountDownProps = {
  endDate: Date;
};

const CountDown = ({ endDate }: CountDownProps) => {
  return (
    <CountdownComponent
      autoStart
      date={endDate}
      renderer={(props) => (
        <CountDownRendered renderFinish={<Completionist />} {...props} />
      )}
    />
  );
};

export default CountDown;
