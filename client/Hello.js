import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import Counter from '/lib/collections/counter.js';
import useSubscription from '/lib/useSubscription.js';
import useTracker from '/lib/useTracker.js';

const increment = () => Meteor.call('incrementCounter');

const Hello = (props) => {
  const ready = useSubscription('counter');
  const counts = useTracker(
    /* istanbul ignore next */
    () => Counter.find().fetch()
  );

  if (counts.length === 0) return ( <div>Loading</div> );

  const { value: counter } = counts[0];

  return (
    <div>
      <button onClick={() => increment()}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  );
}

export default Hello;
