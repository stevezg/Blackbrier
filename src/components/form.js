import React from 'react'
import { connect } from 'react-redux'
import { createListing, getListing } from '../actions/listing'
import './form.css'
import NavBar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Listing_title: '',
      description: '',
      price: '',
      location: ''
    }
  }
  handleSubmit = e => {
    console.log(this.state.Listing_title)
    console.log(this.state.price)
    console.log(this.state.location)

    e.preventDefault()

    Object.keys(this.state).map((key, index) => {
      //clear the form
      this.setState({ [key]: '' })
    })

    //dispatch action to create new entry
    //connect
    alert(`a property has been submitted with
    Title: ${this.state.Listing_title}
    Description: ${this.state.description}
    Price: ${this.state.price}
    Location: ${this.state.location}`)
    let listing = {}
    listing.title = this.state.Listing_title
    listing.price = this.state.price
    listing.location = this.state.location
    listing.description = this.state.description
    this.props.dispatch(createListing(listing)).then(() => {
      this.props.dispatch(getListing())
    })
  }

  handleTitleChange = e => {
    this.setState({
      Listing_title: e.target.value
    })
  }
  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    })
  }
  handlePriceChange = e => {
    this.setState({
      price: e.target.value
    })
  }
  handleLocationChange = e => {
    this.setState({
      location: e.target.value
    })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="form">
            <h1>Add Your Property</h1>
            <h4>Sell your property to the most qualified buyers</h4>
            <form onSubmit={this.handleSubmit} ref="form">
              <label>
                Name
                <input
                  type="text"
                  name="Listing_title"
                  value={this.state.Listing_title}
                  onChange={this.handleTitleChange}
                  autoComplete="off"
                />
              </label>
              <label>
                Description:
                <input
                  onChange={this.handleDescriptionChange}
                  value={this.state.description}
                  type="text"
                  name="Description"
                  autoComplete="off"
                />
              </label>
              <label>
                Price:
                <input
                  required="true"
                  type="number"
                  name="Price"
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                  autoComplete="off"
                />
              </label>
              <label>
                Location:
                <input
                  type="text"
                  name="Location"
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                  autoComplete="off"
                />
              </label>
              <input type="submit" value="Submit" />
              <Link to="/sign-up">
                <p className="sign-up">Sign Up</p>
              </Link>
            </form>
          </div>
        </div>
      </Router>
    )
  }
}
export default connect()(Form)
// mapStateToProps()()
