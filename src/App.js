import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Home from './components/Home';

class App extends Component {
  componentDidMount = () => {
    fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDbhiSfHjnsyxiXrjmOER-86aAmdza_cRA")
    .then(res => res.json())
    .then(({items} )=> 
       this.props.dispatch({type:"ADD_FONTS",payload: items})
    )}
    
  render() {
    return (
      <Home />
    )
  }
}

export default connect()(App);
