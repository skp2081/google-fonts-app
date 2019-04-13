import React, { Component } from 'react'
import {connect} from 'react-redux';
import WebFont from 'webfontloader';
import Messages from './Messages';

class Home extends Component {
  constructor() {
		super();
		this.state = {
			inputVal: "",
    }
  }

  // Hijacked the user input and update it on React state.
	handleInput = (e) => {
		this.setState({inputVal: e.target.value})
  }
  
  // Web Font Loader Method
  loadFont = (font) => {
    WebFont.load({
      google: {
        families:[font]
      }
    })
  }
  
  render() {
    const {fonts} = this.props;
    console.log(fonts,"fonts checking")
    var fontsArr = fonts.slice(2,18);
    console.log(fontsArr,"fonts size reduced")
    return (
      <div className="main-wrapper">
          <h1>Google fonts Browser App</h1>
          <div className="input-container">
            <input onChange={(e) => this.handleInput(e)} type="text" placeholder="Customize the font sample message"/>
          </div>
          <section className="font-section">
          
          {
            fontsArr.map((items,i) => (
              <div className="font-wrapper">
                <p className="font-title">{items.family}</p>
                <div className="divider" />
                <p className="user-text"  style={{fontFamily: items.family}}>

								{/* Conditional Rendering if user input box is empty */}

								{
									(this.state.inputVal) ? (this.state.inputVal) : Messages[i]
								}
								</p>
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

