import React from 'react';
import { Mainpage } from './components/Mainpage';
import { ErrorBoundary } from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Mainpage />
  </ErrorBoundary>
);

export default App;
