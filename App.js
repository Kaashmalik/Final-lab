import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:category" element={<DetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
