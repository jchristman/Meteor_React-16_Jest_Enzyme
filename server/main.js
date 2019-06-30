import { Meteor } from 'meteor/meteor';
import Counter from '/lib/collections/counter.js';
import { counterId } from './constants.js';

Meteor.startup(function() {
  const count = Counter.findOne({ counterId });
  if (count === undefined) {
    Counter.insert({ counterId, value: 0 });
  }
});
