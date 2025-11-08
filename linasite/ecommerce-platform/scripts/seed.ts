import { connectDB } from '../backend/src/db/index';
import { Product } from '../backend/src/models/product.model';
import { User } from '../backend/src/models/user.model';
import { Order } from '../backend/src/models/order.model';
import { Review } from '../backend/src/models/review.model';

const seedDatabase = async () => {
    await connectDB();

    // Seed Users
    const users = [
        { name: 'John Doe', email: 'john@example.com', password: 'password123' },
        { name: 'Jane Smith', email: 'jane@example.com', password: 'password123' },
    ];
    await User.insertMany(users);

    // Seed Products
    const products = [
        { name: 'Product 1', price: 29.99, description: 'Description for product 1', imageUrl: 'url1', stock: 100 },
        { name: 'Product 2', price: 49.99, description: 'Description for product 2', imageUrl: 'url2', stock: 50 },
    ];
    await Product.insertMany(products);

    // Seed Orders
    const orders = [
        { userId: 'userId1', productId: 'productId1', quantity: 2, total: 59.98 },
        { userId: 'userId2', productId: 'productId2', quantity: 1, total: 49.99 },
    ];
    await Order.insertMany(orders);

    // Seed Reviews
    const reviews = [
        { productId: 'productId1', userId: 'userId1', rating: 5, comment: 'Great product!', photoUrl: 'photoUrl1' },
        { productId: 'productId2', userId: 'userId2', rating: 4, comment: 'Very good!', photoUrl: 'photoUrl2' },
    ];
    await Review.insertMany(reviews);

    console.log('Database seeded successfully!');
    process.exit();
};

seedDatabase().catch(err => {
    console.error(err);
    process.exit(1);
});