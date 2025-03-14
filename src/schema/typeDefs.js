import { gql } from 'apollo-server';

export const typeDefs = gql`
  type MultiPrices {
    uno: Float!
    dos: Float!
    tres: Float!
  }

  type MenuItem {
    id: ID!
    name: String!
    description: String
    price: Float!
    options: [String!]           
    halfPrice: Float
    isCold: Boolean
    upgradePrice: Float
    multiPrices: MultiPrices
  }

  type Category {
    id: ID!
    name: String!
    items: [MenuItem!]!
  }

  type Query {
    categories: [Category!]!
    category(name: String!): Category
    menuItem(id: ID!): MenuItem
    searchItems(term: String!): [MenuItem!]
  }
`;
