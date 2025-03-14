// tests/server.test.js
import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../src/schema/typeDefs.js';
import { resolvers } from '../src/resolvers/resolvers.js';

describe('Menu API', () => {
  let server;

  beforeAll(() => {
    server = new ApolloServer({ typeDefs, resolvers });
  });

  test('should fetch all categories', async () => {
    const query = `
      query {
        categories {
          id
          name
          items {
            id
            name
            price
          }
        }
      }
    `;
    const response = await server.executeOperation({ query });
    expect(response.data.categories).toBeDefined();
    expect(response.data.categories.length).toBeGreaterThan(0);
  });

  test('should fetch single category', async () => {
    const query = `
      query {
        category(name: "Appetizers") {
          name
          items {
            name
          }
        }
      }
    `;
    const response = await server.executeOperation({ query });
    expect(response.data.category.name).toBe('Appetizers');
    expect(response.data.category.items.length).toBeGreaterThan(0);
  });

  test('should fetch single menu item', async () => {
    const query = `
      query {
        menuItem(id: "app1") {
          name
          price
          description
        }
      }
    `;
    const response = await server.executeOperation({ query });
    expect(response.data.menuItem.name).toBe('Iceberg Wedge Salad with House Cured Bacon');
  });

  test('should search items', async () => {
    const query = `
      query {
        searchItems(term: "chicken") {
          name
          price
        }
      }
    `;
    const response = await server.executeOperation({ query });
    expect(response.data.searchItems.length).toBeGreaterThan(0);
  });
});
