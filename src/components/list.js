import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removeListingAction,
  getListing,
  updateListing
} from '../actions/listing'

export class List extends Component {
  editListing(id) {
    console.log('edit listing')
    this.props.dispatch(updateListing(id)).then(() => {
      this.props.dispatch(getListing())
    })
  }
  removeListing(id) {
    console.log('remove listing')

    this.props.dispatch(removeListingAction(id)).then(() => {
      this.props.dispatch(getListing())
    })
  }

  render() {
    const listing = this.props.listing.map(item => {
      return (
        <div>
          <button
            onClick={() => {
              this.editListing()
            }}
          >
            Edit Listing
          </button>
          <button
            onClick={() => {
              this.removeListing(item.id)
            }}
          >
            Remove Listing
          </button>
          <ul>
            <li>{item.title}</li>
            <li>{item.description}</li>
            <li>{item.location}</li>
            <li>${item.price}</li>
          </ul>
        </div>
      )
    })
    return (
      <div>
        <p>Current Listings</p>

        <div>{listing}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listing: state.listing.listing
  }
}

export default connect(mapStateToProps)(List)
