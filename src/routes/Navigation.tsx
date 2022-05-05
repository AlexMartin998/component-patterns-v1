import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShoppingPage } from '../b_component-patterns/pages/ShoppingPage';
import { MainLayout } from '../layouts/MainLayout';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ShoppingPage />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/users" element={<h1>Users Page</h1>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
