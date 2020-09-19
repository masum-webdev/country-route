import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';

function App() {
  return (
    <Router>
      <div >
        <ul>
        <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
            <Link to="/home">Home Page</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/home" children={<Home />} />
        <Route exact path="/" children={<Home />} />
        <Route exact path="/country/:countryName" children={<CountryDetails />} />
        <Route path="*" children={<NotMatch />} />
      </Switch>
    </Router>
  );
}

export default App;
