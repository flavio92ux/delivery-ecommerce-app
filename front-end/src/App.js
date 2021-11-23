import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminPage from './pages/AdminPage';
import { PricesProvider } from './context/productsProvider';
import MyRequestsPage from './pages/MyRequestsPage';
import ClientOrderDetails from './pages/ClientOrderDetails';
import './App.css';

function App() {
  // const userStorage = localStorage.getItem('user');
  // const keepUserLoggedIn = userStorage ? '/customer/products' : '/login';
  return (
    <Routes>
      {/*  <Route path="/" element={ <Navigate replace to={ keepUserLoggedIn } /> } />
      <Route path="/login" element={ <Navigate replace to={ keepUserLoggedIn } /> } />
      <Route path="/register" element={ <Navigate replace to={ keepUserLoggedIn } /> } />
      */}

      <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route
        path="/customer/products"
        element={
          <PricesProvider>
            <ProductPage />
          </PricesProvider>
        }
      />
      <Route
        path="/customer/checkout"
        element={ <PricesProvider><CheckoutPage /></PricesProvider> }
      />
      <Route path="/customer/orders" element={ <MyRequestsPage /> } />
      <Route path="/customer/orders/:id" element={ <ClientOrderDetails /> } />
      <Route path="/admin/manage" element={ <AdminPage /> } />
    </Routes>
  );
}

export default App;
