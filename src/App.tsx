import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/GlobalStyles';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
