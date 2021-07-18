import React, {Component} from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';

  /**
 * App component managing the web-app routing
 *
 * @component
 * @example
 *  * return (
 *   <App />
 * )
 */
class App extends Component{

  render(){
    return (
      <Switch>
        <Redirect from="/Sportsee" to="/user/12" />
        <Route exact path="/user/:id" component={UserPage} />
        <Route component={ErrorPage} />
      </Switch>
    );
  }
}

export default App;
