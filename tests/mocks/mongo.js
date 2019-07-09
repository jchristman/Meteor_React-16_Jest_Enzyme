let mongoQueryResult = [];

export const __setMongoQueryResult = (val) => mongoQueryResult = val;

export const Mongo = {
  Collection: jest.fn().mockImplementation(() => ({
    _ensureIndex: (jest.fn()),
    findOne: jest.fn().mockImplementation(() => mongoQueryResult),
    find: jest.fn().mockImplementation(() => ({
      fetch: jest.fn().mockReturnValue(mongoQueryResult),
      count: jest.fn(),
    }))
  }))
};
