import React, { useState } from 'react';
import Counter from '/lib/collections/counter.js';
import useSubscription from '/lib/useSubscription.js';
import useTracker from '/lib/useTracker.js';

const Hello = (props) => {
  const [ counter, setCounter ] = useState(0);
  const ready = useSubscription('counter');
  const counts = useTracker(() => Counter.find().fetch());
  console.log(ready, counts);

  return (
    <div>
      <button onClick={() => increment()}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
}

export default Hello;
