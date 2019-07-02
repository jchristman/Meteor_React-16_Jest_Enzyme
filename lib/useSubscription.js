import { Meteor } from 'meteor/meteor';
import useTracker from './useTracker.js';

const useSubscription = (name, ...rest) => useTracker(
  () => !Meteor.subscribe(name, ...rest).ready(),
  [name, ...rest]
);

export default useSubscription;
