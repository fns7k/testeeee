import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminProductList from './pages/Admin/ProductList';
import AdminUploadCsv from './pages/Admin/UploadCsv';
import AdminOrders from './pages/Admin/Orders';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/products" component={AdminProductList} />
        <Route path="/admin/upload-csv" component={AdminUploadCsv} />
        <Route path="/admin/orders" component={AdminOrders} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;