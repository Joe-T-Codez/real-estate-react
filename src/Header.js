import React, { Component} from 'react'
// import ReactDOM from 'react-dom'


export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (<header>
      <div className="logo"> Jone's Real Estate</div>

      <nav className="menu-links">
      <a href="https://www.youtube.com/">Create Ads</a>
      <a href="https://www.youtube.com/">Bop</a>
      <a href="https://www.youtube.com/">About Us</a>
      <a href="https://www.youtube.com/">Log In</a>
      <a href="https://www.youtube.com/" className="register-btn">Register </a>
      </nav>
      </header>)
  }
}
