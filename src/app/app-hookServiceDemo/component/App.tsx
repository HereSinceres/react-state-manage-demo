/* eslint-disable react/react-in-jsx-scope */

import { createService } from 'hook-service';
import { Provider } from 'jotai';
import { useState } from 'react';

function useSome(name: string) {
  const [state, setState] = useState(name);
  return {
    state,
    setState
  };
}

// transform hook to service
const SomeService = createService(useSome);

function SomeComponent() {
  // service injected
  const { state, setState } = SomeService.useInject();

  return <div>name from service: {state} </div>;
}

function ChangeButton() {
  const { state, setState } = SomeService.useInject();
  return (
    <button
      onClick={() => {
        setState(Math.random().toString());
      }}
    >
      cl
    </button>
  );
}
export default function App() {
  return (
    <Provider>
      <SomeService.Provider deps={['new name']}>
        <SomeComponent />
        <ChangeButton />
      </SomeService.Provider>
    </Provider>
  );
}
