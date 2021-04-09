import React, {Component} from 'react';
import NavigationBar from './layouts/Header/NavigationBar';
import Home from './pages/Home/Home';

class App extends Component{

  render(){
    return (
      <div>
        <NavigationBar />
        <Home />
      </div>
    );
  }
}

export default App;
