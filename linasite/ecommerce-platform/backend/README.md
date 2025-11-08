# E-commerce Platform Backend

This is the backend for the E-commerce platform project. It is built using TypeScript and Express.js, providing a RESTful API for the frontend application.

## Features

- **Product Management**: Admins can manage products, including adding, updating, and deleting products.
- **Checkout Process**: Handles user checkout, including address collection and payment processing.
- **User Authentication**: Secure authentication for users and admins.
- **Advanced Search**: Implemented search functionality with autocomplete and product suggestions.
- **Review System**: Users can leave reviews and ratings for products, including the ability to upload photos.

## Getting Started

### Prerequisites

- Node.js
- npm
- TypeScript

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd ecommerce-platform/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

5. Start the server:
   ```
   npm run start
   ```

### Running Tests

To run the tests for the backend, use:
```
npm run test
```

## Folder Structure

- `src/`: Contains the source code for the backend.
  - `controllers/`: Contains the logic for handling requests.
  - `routes/`: Defines the API routes.
  - `services/`: Contains business logic and interactions with external services.
  - `models/`: Defines the data models.
  - `db/`: Database connection setup.
  - `middleware/`: Custom middleware for authentication and error handling.
  - `types/`: Type definitions used throughout the backend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.