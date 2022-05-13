import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponent,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from './../03_forms/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-component" element={<FormikComponent />} />
          <Route path="formik-abstraction" element={<FormikAbstraction />} />

          <Route path="formik-register" element={<RegisterFormikPage />} />
          <Route path="formik-dynamic" element={<DynamicForm />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
