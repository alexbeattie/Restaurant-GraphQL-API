# Web Restaurant API

A GraphQL-based restaurant menu management system built with Node.js and Apollo Server. This application provides a complete solution for managing and displaying restaurant menu items with a responsive frontend interface.

## Features

- GraphQL API for menu management
- Categories and menu items with detailed information
- Support for multiple pricing options (e.g., enchilada quantities)
- Item options (e.g., bread choices for sandwiches)
- Search functionality
- Responsive frontend interface
- Error handling and input validation
- Automated tests

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Installation

### Clone the repository:

```bash
git clone <repository-url>
cd restaurant-app
```

### Install dependencies:

```bash
npm install
```

## Project Structure

```
restaurant-app/
├── src/
│   ├── data/
│   │   └── menuData.js
│   ├── schema/
│   │   └── typeDefs.js
│   └── resolvers/
│       └── resolvers.js
├── tests/
│   └── server.test.js
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Running Locally

### Server

Start the server:

```bash
npm start
```

- The server will run on `http://localhost:4000`
- Access the GraphQL Playground at this URL to test queries

### Frontend

Serve the frontend using a simple static server (recommended):

```bash
npx serve public
```

- Alternatively, open `public/index.html` directly in a browser (limited features due to CORS).
- Frontend typically runs on `http://localhost:3000`

## Tests

Run automated tests:

```bash
npm test
```

## API Usage

### GraphQL Endpoint

- URL: `http://localhost:4000`
- Method: POST
- Content-Type: `application/json`

### Example Queries

#### Get all categories and items:

```graphql
query {
  categories {
    id
    name
    items {
      id
      name
      price
      description
      options
    }
  }
}
```

#### Get a specific category:

```graphql
query {
  category(name: "Appetizers") {
    name
    items {
      name
      price
      description
    }
  }
}
```

#### Get a specific menu item:

```graphql
query {
  menuItem(id: "app1") {
    name
    price
    description
    options
  }
}
```

#### Search for items:

```graphql
query {
  searchItems(term: "chicken") {
    name
    price
    category {
      name
    }
  }
}
```

## Configuration

### Menu Data

Edit `src/data/menuData.js` to modify menu items.

Data Structure Example:

```javascript
{
  id: 'category-id',
  name: 'Category Name',
  items: [
    {
      id: 'item-id',
      name: 'Item Name',
      description: 'Item description',
      price: 9.99,
      options: ['option1', 'option2'], // optional
      halfPrice: 7.99, // optional
      multiPrices: { uno: 8.50, dos: 9.95, tres: 11.50 } // optional
    }
  ]
}
```

### Server Configuration

Modify the port in `server.js` if needed:

```javascript
server.listen({ port: 4000 })
```

## Development

### Adding New Features

1. Update schema in `src/schema/typeDefs.js`
2. Add resolvers in `src/resolvers/resolvers.js`
3. Update frontend in `public/index.html`
4. Add tests in `tests/server.test.js`

### Testing

- Tests use Jest framework.
- Add new test cases in `tests/server.test.js`
- Run tests with `npm test`
Technical Decisions

### Technology Choices
 - Node.js: Chosen due to its efficiency and ease of creating scalable APIs quickly.
 - Apollo Server (GraphQL): Selected because of its strong support, excellent documentation, built-in schema validation, and interactive querying through Apollo Sandbox or GraphQL Playground.
 -  Jest: Adopted as the testing framework because it’s widely used, straightforward to set up, and offers clear, readable test output.
 -  Postman: Included for its GraphQL testing capabilities and ability to easily share test collections and my personal familiarity. 

### Data Structure Decisions

The provided unstructured menu data was organized into logical GraphQL types (Category, MenuItem, and MultiPrices) to clearly reflect real-world menu categorization and item customization options. Using explicit fields for options, multiple pricing structures (multiPrices), and optional values allowed for flexible querying and easier future data updates.

----

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Testing with Postman

### GraphQL API Collection

This project includes a Postman collection to help test the GraphQL API:

- [Restaurant GraphQL API Collection](https://www.postman.com/grey-water-6060/workspace/restaurant-graphql-api/collection/67d46f017056d051029d27bc?action=share&creator=1599909)
- Import this collection directly into Postman

### Using the Collection

1. Open Postman
2. Import the provided collection
3. Ensure the server is running (`npm start`)
4. Execute pre-configured GraphQL queries

---

This README includes:
- Detailed installation instructions
- Project structure overview
- Running instructions
- API usage examples
- Configuration details
- Development guidelines
- Contribution instructions
- Testing with Postman instructions