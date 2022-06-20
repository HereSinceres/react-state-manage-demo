/* eslint-disable react/react-in-jsx-scope */
import '../styles/app.css';
import './app.i18n';

import { QueryClient, QueryClientProvider } from 'react-query';

import AppRouter from './AppRouter';
import { containerBuilder } from './app.container';

// Create a client
export const RNQueryClient = new QueryClient();

containerBuilder();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={RNQueryClient}>
        <AppRouter />
      </QueryClientProvider>
    </div>
  );
}
