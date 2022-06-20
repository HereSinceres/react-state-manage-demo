/* eslint-disable react/react-in-jsx-scope */
import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Example = lazy(() => import('./component/App'));

export default <Route path="/jotai" element={<Example />} />;
