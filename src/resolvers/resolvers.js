// src/resolvers/resolvers.js
import { menuData } from '../data/menuData.js';
import { UserInputError } from 'apollo-server';

export const resolvers = {
  Query: {
    categories: () => {
      if (!menuData.length) throw new Error('No menu data available');
      return menuData;
    },
    category: (_, { name }) => {
      if (!name) throw new UserInputError('Category name is required');
      const category = menuData.find(cat => cat.name.toLowerCase() === name.toLowerCase());
      if (!category) throw new UserInputError(`Category "${name}" not found`);
      return category;
    },
    menuItem: (_, { id }) => {
      if (!id) throw new UserInputError('Item ID is required');
      for (const category of menuData) {
        const item = category.items.find(item => item.id === id);
        if (item) return item;
      }
      throw new UserInputError(`Item with ID "${id}" not found`);
    },
    searchItems: (_, { term }) => {
      if (!term || term.length < 2) throw new UserInputError('Search term must be at least 2 characters');
      const results = [];
      for (const category of menuData) {
        const matches = category.items.filter(item =>
          item.name.toLowerCase().includes(term.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(term.toLowerCase()))
        );
        results.push(...matches);
      }
      return results;
    }
  }
};
