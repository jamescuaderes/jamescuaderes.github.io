import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Career from "./Components/Career/index";
import Home from "./Components/Home/index";
import Coursework from "./Components/Coursework/index";
import Resume from "./Components/Resume/index";


const routing = (
  <Router>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/Career' component={Career}/>
      <Route path='/Coursework' component={Coursework}/>
      <Route path='/Resume' component={Resume}/>
    </div>
  </Router>

);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
