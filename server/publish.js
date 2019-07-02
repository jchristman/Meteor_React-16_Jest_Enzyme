import { Meteor } from 'meteor/meteor';
import Counter from '/lib/collections/counter.js';
import { counterId } from './constants.js';

export default () => {
  Meteor.publish('counter', function() {
    return Counter.find();
  });
};
