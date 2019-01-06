import React from 'react'
import { connect } from 'react-redux'
import { createListing } from '../actions/listing'

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Listing_title: '',
      descritpion: '',
      price: '',
      location: ''
    }
  }
  handleSubmit = e => {
    console.log(this.state.Listing_title)
    console.log(this.state.price)
    console.log(this.state.location)

    alert('A Listing was submitted')

    e.preventDefault()

    //dispatch action to create new entry
    //connect
    let listing = {}
    listing.title = this.state.Listing_title
    listing.price = this.state.price
    listing.location = this.state.location
    listing.descritpion = this.state.descritpion
    this.props.dispatch(createListing(listing))
  }

  handleTitleChange = e => {
    this.setState({
      Listing_title: e.target.value
    })
  }
  handleDescriptionChange = e => {
    this.setState({
      descritpion: e.target.value
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
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Listing Title:
            <input
              type="text"
              name="Listing_title"
              value={this.state.Listing_title}
              onChange={this.handleTitleChange}
            />
          </label>
          <label>
            Description:
            <input
              onChange={this.handleDescriptionChange}
              value={this.state.descritpion}
              type="text"
              name="Description"
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
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="Location"
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default connect()(Form)
// mapStateToProps()()
