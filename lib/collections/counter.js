import { Mongo } from 'meteor/mongo';

const Counter = new Mongo.Collection('counter');

export default Counter;
