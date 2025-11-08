# E-commerce Platform

This project is a full-featured e-commerce platform built with a modern tech stack. It includes both frontend and backend components, allowing for a seamless shopping experience.

## Features

- **Checkout Page**: Users can fill out an address form and select payment options.
- **Admin Panel**: Admins can manage products, upload updated CSV files, and view orders.
- **Advanced Search System**: Includes autocomplete and product suggestions for enhanced user experience.
- **Review and Comment System**: Customers can leave reviews with star ratings and upload photos of products.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

- Built with React and TypeScript.
- Contains components for various pages, including Home, Product, and Checkout.
- Implements an advanced search system and a review system.

### Backend

- Built with Node.js and Express.
- Handles authentication, product management, checkout processes, and reviews.
- Connects to a database for storing product, user, and order information.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Docker (optional, for containerized setup)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-platform
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Run the application:
   - For development, you can run both frontend and backend concurrently or separately.

### Running with Docker

If you prefer to run the application using Docker, you can use the provided `docker-compose.yml` file.

1. Build and run the containers:
   ```
   docker-compose up --build
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.