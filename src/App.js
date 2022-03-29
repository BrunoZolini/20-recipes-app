import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/myProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
