import { Meteor } from 'meteor/meteor';
import Counter from '/lib/collections/counter.js';
import { counterId } from './constants.js';

Meteor.publish('counter', function() {
  return Counter.findOne({ counterId });
});
