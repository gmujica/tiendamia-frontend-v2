// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { ItemsPage } from './pages/items';
import { ReportsPage } from './pages/reports';
import { RouterLayout } from '../src/common/RouterLayout';
import { CardDetailsPage } from "./pages/cardDetails";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/items/:item_id" element={<CardDetailsPage />} />
      </Route>
    </Routes>
  );
};
