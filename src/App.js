import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from "./components/Nav";
import Page2 from './components/Page2'
import Page3 from './components/Page3'


class App extends Component {
  componentDidMount = () => {
    fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDbhiSfHjnsyxiXrjmOER-86aAmdza_cRA")
    .then(res => res.json())
    .then(({items} )=> 
       this.props.dispatch({type:"ADD_FONTS",payload: items})
    )}

  render() {
    return (
      <Router>
      <div className='container'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Page2' component={Page2} />
          <Route path='/Page3' component={Page3} />
        </Switch>
    </div>
    </Router> 
      
    )
  }
}

export default connect()(App);
