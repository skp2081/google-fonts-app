import React, { Component } from 'react'
import {connect} from 'react-redux';
import WebFont from 'webfontloader';

class Home extends Component {
  constructor() {
		super();
		this.state = {
			inputVal: "",
    }
  }
  loadFont = (font) => {
    WebFont.load({
      google: {
        families:[font]
      }
    })
  }
	handleInput = (e) => {
		this.setState({inputVal: e.target.value})
	}
  
  render() {
    const {fonts} = this.props;
    console.log(fonts,"fonts checking")
    var fontsArr = fonts.slice(2,18);
    console.log(fontsArr,"fonts size reduced")
    return (
      <div className="main-wrapper">
          <h1>Google font Browser</h1>
          <div className="input-container">
            <input onChange={(e) => this.handleInput(e)} type="text" placeholder="Customize the font sample message"/>
          </div>
          <section className="font-section">
          
          {
            fontsArr.map((items) => (
              <div className="font-wrapper">
                <p className="font-title">{items.family}</p>
                <div className="divider" />
                <p className="user-text"  style={{fontFamily: items.family}}>{this.state.inputVal}</p>
                {
                  this.loadFont(items.family)
                }
              </div>)
            )
          }
          </section>
          <footer>
            <p>Made with &#9829; at <a href="https://altcampus.io" target="_blank">AltCampus</a></p>
          </footer>

        </div>
    )
  }
}
function mapStateToProps(state){
  return {
    fonts: state.fonts
  }
}
export default connect(mapStateToProps)(Home)

