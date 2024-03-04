import React from 'react';
import ReactDOM from 'react-dom/client';

import { HomePage } from '@pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return <HomePage />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
