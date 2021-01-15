import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap';

import MainPage from './pages/main-page';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
