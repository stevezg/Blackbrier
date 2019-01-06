import React, { Component } from 'react'
import { connect } from 'react-redux'

export class List extends Component {
  render() {
    const editListing = () => {
      alert('edit listing')
    }
    const removeListing = () => {
      alert('remove listing')
    }
    const listing = this.props.listing.map(item => {
      return (
        <div>
          <button
            onClick={() => {
              // this.editListing
            }}
          >
            Edit Listing
          </button>
          <button
            onClick={() => {
              // this.removeListing
            }}
          >
            Remove Listing
          </button>
          <ul>
            <li>{item.title}</li>
            <li>${item.description}</li>
            <li>${item.location}</li>
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
