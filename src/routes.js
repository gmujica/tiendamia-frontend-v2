// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { ItemsPage } from './pages/items';
import { ReportsPage } from './pages/reports';
import { RouterLayout } from '../src/common/RouterLayout';
import { CardDetailsPage } from "./pages/cardDetails";
import { CreateItemPage } from './pages/createItem'
import { CreateOrderPage } from './pages/createOrder';
import { OrderDetailsPage } from './pages/orderDetails'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/items/:item_id" element={<CardDetailsPage />} />
        <Route path="/orders/:order_id" element={<OrderDetailsPage />} />
        <Route path="/items/create-item" element={<CreateItemPage />} />
        <Route path="/orders/create-order" element={<CreateOrderPage />} />
      </Route>
    </Routes>
  );
};
