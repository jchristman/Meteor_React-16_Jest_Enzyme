let subscriptionReady = false;
let usersQueryResult = [];

export const __setUsersQueryResult = (val) => usersQueryResult = val;
export const __setSubscriptionReady = (val) => subscriptionReady = val;

export const Meteor = {
  users: {
    findOne: jest.fn().mockImplementation(() => usersQueryResult),
    find: jest.fn().mockImplementation(() => ({
      fetch: jest.fn().mockReturnValue(usersQueryResult),
      count: jest.fn(),
    })),
  },
  subscribe: jest.fn().mockImplementation(() => ({
    ready: jest.fn().mockReturnValue(subscriptionReady)
  }))
};
