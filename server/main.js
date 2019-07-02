import { Meteor } from 'meteor/meteor';
import { counterId } from './constants.js';
import Counter from '/lib/collections/counter.js';
import methods_setup from './methods.js';
import publish_setup from './publish.js';

Meteor.startup(function() {
  const count = Counter.findOne({ counterId });
  if (count === undefined) {
    Counter.insert({ counterId, value: 0 });
  }

  methods_setup();
  publish_setup();
});
