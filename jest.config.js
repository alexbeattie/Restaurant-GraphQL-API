export default {
  // Use node environment for testing
  testEnvironment: 'node',

  // Tell Jest to transform node_modules that use ESM
  transformIgnorePatterns: [
    "node_modules/(?!(apollo-server|@apollo|graphql)/)"
  ]
};

