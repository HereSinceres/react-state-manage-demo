import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Example = lazy(() => import('./Example'));

// eslint-disable-next-line react/react-in-jsx-scope
export default <Route path="/example" element={<Example />} />;
