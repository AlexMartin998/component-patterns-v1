import { Outlet, NavLink } from 'react-router-dom';

import logo from './../logo.svg';

export const MainLayout = () => {
  const isActiveFx = ({ isActive }: { isActive: boolean }): string =>
    isActive ? 'nav-active' : '';

  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="logo-react" />

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive && 'nav-active') || ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={isActiveFx}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={isActiveFx}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={isActiveFx}>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/formik-basic" className={isActiveFx}>
              Formik - Basic
            </NavLink>
          </li>
          <li>
            <NavLink to="/formik-yup" className={isActiveFx}>
              Formik - Yup
            </NavLink>
          </li>
          <li>
            <NavLink to="/formik-component" className={isActiveFx}>
              Formik - Component
            </NavLink>
          </li>
          <li>
            <NavLink to="/formik-abstraction" className={isActiveFx}>
              Formik - Abstractions
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
