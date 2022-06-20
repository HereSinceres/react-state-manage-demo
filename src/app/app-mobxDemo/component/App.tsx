/* eslint-disable react/react-in-jsx-scope */
import { observer } from 'mobx-react';

import { MyTimerService } from '../controller';

const TimerView = observer(() => {
  // Grab the timer from the context.
  // const timer = useContext(TimerContext); // See the Timer definition above.
  const timer = MyTimerService.useInject();
  return <div onClick={() => timer.increase()}>Seconds passed</div>;
});

const TimerViewButton = observer(() => {
  // Grab the timer from the context.
  const timer = MyTimerService.useInject();
  return (
    <div>
      {Math.random()} Seconds passed: {timer.secondsPassed}
    </div>
  );
});

export default function App() {
  return (
    <MyTimerService.Provider deps={[]}>
      <TimerView />
      <hr />
      <TimerViewButton />
      <hr />
      <TimerView />
    </MyTimerService.Provider>
  );
}
