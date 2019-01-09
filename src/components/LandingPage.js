import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

// import image from '../assets/image.jpeg'
import './LandingPageStyle.css'
import Form from './form'
import { Homepage } from './homepage'

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  handleSubmit = e => {
    e.preventDefault()

    //dispatch action to create new entry
    //connect
    // let listing = {}
    // listing.title = this.state.Listing_title
    // listing.price = this.state.price
    // listing.location = this.state.location
    // listing.description = this.state.description
    // this.props.dispatch(createListing(listing)).then(() => {
    //   this.props.dispatch(getListing())
    // })
  }

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <img className="background" src={require('../assets/image.jpeg')} />
        <p className="title">Presige Worldwide</p>
        <Link to="/login">
          <p className="login">Log in</p>
        </Link>
        <Link to="/sign-up">
          <p className="sign-up">Sign Up</p>
          {/* same problem of re-rendering */}
        </Link>
        <h1 className="Header_landing">Buying a Home. Done Right.</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchForm"
            type="text"
            placeholder="Where do you want to live?"
            name="Listing_title"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            autocomplete="off"
          />
        </form>

        <p className="market">Market your property to millions</p>
        <button className="list-property-button" onClick={() => {}}>
          <Link className="buttonText" to="/form">
            List Your Property
            {/* Why isnt the page re-rendering */}
          </Link>
        </button>
      </div>
    )
  }
}
