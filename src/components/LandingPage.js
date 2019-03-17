import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { getListing } from '../actions/listing'
import List from './list'
import Footer from './Footer'
import What from './what'
import { getALLListings } from '../actions/listing'

// import image from '../assets/image.jpeg'
import './LandingPageStyle.css'
import Form from './form'
import { Homepage } from './homepage'
import Navbar from './Navbar'

export class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(getALLListings())
  }
  handleSubmit = e => {
    e.preventDefault()

    this.props.history.push(`/home/${this.state.searchTerm}`)
    console.log(this.state.searchTerm)
  }

  handleSearchTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <img className="background" src={require('../assets/image.jpeg')} />
          <h1 className="Header_landing">Making Real Estate Easier Through Smart Contracts</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="searchForm"
              type="text"
              placeholder="Where do you want to live?"
              name="Listing_title"
              value={this.state.searchTerm}
              onChange={this.handleSearchTermChange}
              autoComplete="off"
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
        <Footer />
      </div>
    )
  }
}

export default connect()(LandingPage)
