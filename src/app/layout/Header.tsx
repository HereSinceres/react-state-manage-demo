/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/example" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
        Example
      </NavLink>
      <NavLink to="/jotai" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
        jotai
      </NavLink>
      <NavLink to="/zustand" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
        zustand
      </NavLink>{' '}
      <NavLink to="/hook" className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
        hook
      </NavLink>
    </header>
  );
}
