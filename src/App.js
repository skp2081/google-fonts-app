import React, { Component } from 'react'; 
import {connect} from 'react-redux';
import Products from './components/Products';

class App extends Component {
 
  render() {
    return (
      
    <>
      <div>hello</div>
      < Products/>
    </>
    )
  }
}

export default connect()(App);
