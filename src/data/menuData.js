// src/data/menuData.js
export const menuData = [
  // Your data structure...
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { id: 'app1', name: 'Iceberg Wedge Salad with House Cured Bacon', description: 'Tomato salsa gorgonzola', price: 7.50 },
      { id: 'app2', name: 'Sautéed Shredded Brussels Sprouts', description: 'Bacon hazelnuts gorgonzola', price: 6.95 },
      { id: 'app3', name: 'Kale Salad', description: 'Parmesan crisp corn radish garlic-lemon vinaigrette', price: 7.50 },
      { id: 'app4', name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto', description: 'Grilled tomato salsa crostini', price: 6.95 },
      { id: 'app5', name: 'Chicken and Cabbage Eggrolls', description: 'Hot & sour dipping sauce', price: 6.95 }
    ]
  },
  {
    id: 'entrees',
    name: 'Entrees',
    items: [
      { id: 'ent1', name: 'Farfalle Pasta with Braised Pork in Tomato Cream', description: 'Capers butternut squash kale', price: 12.95 },
      { id: 'ent2', name: 'Stout Braised Bratwurst', description: 'Horseradish mashed potatoes roasted root veggies grilled onion', price: 13.95 },
      { id: 'ent3', name: 'Salmon & Crispy Tofu in Yellow Curry Sauce', description: 'Vegetable sauté golden raisin chutney', price: 15.95 },
      { id: 'ent4', name: 'Sesame Shrimp', description: 'Udon noodles ramen broth shiitake mushrooms bean sprouts scallions', price: 13.95 }
    ]
  },
  {
    id: 'sandwiches-cold',
    name: 'Sandwiches - Cold',
    items: [
      { id: 'sand1', name: 'Turkey & Avocado', description: 'With tomato', price: 9.25, halfPrice: 7.95, options: ['Sourdough', 'Whole Wheat', 'Rye Bread'] },
      { id: 'sand2', name: 'Pub Club', description: 'Turkey, bacon, lettuce, tomato', price: 9.25, halfPrice: 7.95, options: ['Sourdough', 'Whole Wheat', 'Rye Bread'] },
      { id: 'sand3', name: 'Rare Roast Beef & Swiss', description: 'Sweet-hot mustard, lettuce, red onion', price: 9.25, halfPrice: 7.95, options: ['Sourdough', 'Whole Wheat', 'Rye Bread'] },
      { id: 'sand4', name: 'Veggie', description: 'Pepper jack, avocado, sprout, tomato', price: 9.25, halfPrice: 7.95, options: ['Sourdough', 'Whole Wheat', 'Rye Bread'] }
    ]
  },
  {
    id: 'sandwiches-hot',
    name: 'Sandwiches - Hot',
    items: [
      { id: 'sand5', name: 'Southwest Chicken Breast', description: 'Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese', price: 9.50, options: ['Whole Wheat Bun', 'Cheese & Onion Bun'] },
      { id: 'sand6', name: 'Portobello Fresh Mozzarella', description: 'Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli', price: 9.50, options: ['Whole Wheat Bun', 'Cheese & Onion Bun'] },
      { id: 'sand7', name: 'Chipotle BBQ Pork Sandwich', description: 'With Pickled Jalapeño Slaw', price: 9.50, options: ['Whole Wheat Bun', 'Cheese & Onion Bun'] },
      { id: 'sand8', name: 'Bacon Burger', description: 'Swiss, Lettuce, Tomato', price: 9.25, options: ['Whole Wheat Bun', 'Cheese & Onion Bun'] },
      { id: 'sand9', name: 'Mexi Burger', description: 'Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole', price: 9.25, options: ['Whole Wheat Bun', 'Cheese & Onion Bun'] },
      { id: 'sand10', name: 'Herb Marinated Top Sirloin', description: 'Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia', price: 10.95 },
      { id: 'sand11', name: 'Roast Beef with Ancho Au Jus', description: 'Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette', price: 9.75 },
      { id: 'sand12', name: 'Blackened Catfish', description: 'Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough', price: 9.75 }
    ]
  },
  {
    id: 'soup-salad',
    name: 'Soup & Salad Combos',
    items: [
      { id: 'soup1', name: 'French Onion or Soup of the Day', description: '', price: 4.95 },
      { id: 'soup2', name: 'Soup with Small Green Salad, Fresh Fruit or House Pasta', description: '', price: 7.25 },
      { id: 'soup3', name: 'Soup with Half Pasta of the Day', description: '', price: 8.75 }
    ]
  },
  {
    id: 'fajitas',
    name: 'Fajitas',
    description: 'Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas',
    items: [
      { id: 'faj1', name: 'Chicken Fajitas', description: 'Onions, Poblano and Bell Peppers, Guacamole, Two Salsas', price: 10.95 },
      { id: 'faj2', name: 'Sirloin Steak Fajitas', description: 'Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas', price: 10.95 }
    ]
  },
  {
    id: 'tacos',
    name: 'Tacos',
    description: 'Served with red rice, black beans, corn & romaine salad, tortilla chips',
    items: [
      { id: 'taco1', name: 'Beer Battered Fish', description: 'Jalapeño Remoulade, Roasted Salsa, Cabbage', price: 9.95 },
      { id: 'taco2', name: 'Carne Asada', description: 'Guacamole, Tomatillo Salsa', price: 9.95 },
      { id: 'taco3', name: 'Citrus Marinated Chicken', description: 'Guacamole, Tomatillo Salsa', price: 9.95 },
      { id: 'taco4', name: 'Grilled Veggie', description: 'Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa', price: 9.95 }
    ]
  },
  {
    id: 'enchiladas',
    name: 'Enchiladas',
    description: 'With Southwestern Succotash, Black Beans with Chipotle Crema',
    items: [
      { id: 'ench1', name: 'Beef Enchilada', description: 'Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, multiPrices: { uno: 8.50, dos: 9.95, tres: 11.50 } },
      { id: 'ench2', name: 'Chicken Enchilada', description: 'Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, multiPrices: { uno: 8.50, dos: 9.95, tres: 11.50 } },
      { id: 'ench3', name: 'Cheese Enchilada', description: 'Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, multiPrices: { uno: 8.50, dos: 9.95, tres: 11.50 } },
      { id: 'ench4', name: 'Veggie Enchilada', description: 'Southwestern Succotash, Black Beans with Chipotle Crema', price: 8.50, multiPrices: { uno: 8.50, dos: 9.95, tres: 11.50 } }
    ]
  },
  {
    id: 'specials',
    name: 'Specials',
    items: [
      { id: 'spec1', name: 'Chili Relleno', description: 'Stuffed with Jack Cheese & Corn, Glazed Yam, Chayote Squash Succotash, Red Chili Sauce', price: 9.95 },
      { id: 'spec2', name: 'Pepita Crusted Salmon', description: 'Chipotle Glaze, chevre whipped yams, jicama slaw, tomatillo sauce', price: 10.95 }
    ]
  },
  {
    id: 'quiche',
    name: 'Quiche',
    items: [
      { id: 'q1', name: 'Bacon, Swiss, Mushroom Quiche', description: 'Choice of Fresh Fruit or Green Salad', price: 8.95, options: ['Fresh Fruit', 'Green Salad'] }
    ]
  },
  {
    id: 'salads',
    name: 'Green Salads',
    items: [
      { id: 'sal1', name: 'Grilled Red Trout', description: 'Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette', price: 10.95 },
      { id: 'sal2', name: 'Smoked Turkey', description: 'Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado', price: 9.95 },
      { id: 'sal3', name: 'Asian Grilled Chicken', description: 'Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Peanut Dressing', price: 10.50 },
      { id: 'sal4', name: 'Southwest Grilled Chicken', description: 'Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette', price: 10.50 },
      { id: 'sal5', name: 'Mediterranean', description: 'Italian Sausage, Artichoke Hearts, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette', price: 9.95 },
      { id: 'sal6', name: 'Grilled Salmon', description: 'Artichoke tapenade, shredded kale, corn, radish, parmesan crisps', price: 11.50 }
    ]
  }
];

