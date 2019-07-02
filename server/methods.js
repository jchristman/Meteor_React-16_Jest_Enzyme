import { Meteor } from 'meteor/meteor';
import { counterId } from './constants.js';
import Counter from '/lib/collections/counter.js';

export default () => {
  Meteor.methods({
    incrementCounter: function() {
      const counter = Counter.findOne({ counterId });
      const update = { value: counter.value + 1 };
      Counter.update({ counterId }, { $set: update });
    }
  });
}
