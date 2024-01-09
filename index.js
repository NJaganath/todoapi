import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Login from './templates/LoginPage'
import Signup from './Signup';
import Todo from './Todo';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Login/>
  </StrictMode>
);
