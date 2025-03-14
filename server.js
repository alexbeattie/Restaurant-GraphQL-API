// server.js
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './src/schema/typeDefs.js';
import { resolvers } from './src/resolvers/resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

export { server };
