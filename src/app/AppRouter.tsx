/* eslint-disable react/react-in-jsx-scope */
import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { exampleModule } from './app-example';
import { hookServiceDemoModule } from './app-hookServiceDemo';
import { appModule } from './app-jotaiDemo';
import { zustandDemoModule } from './app-zustandDemo';
import { Header } from './layout';

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<LoadingMessage />}>
        <Routes>
          {exampleModule.routes}
          {zustandDemoModule.routes}
          {hookServiceDemoModule.routes}
          {appModule.routes}
          <Route path="/" element={<Navigate replace to="/example" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
