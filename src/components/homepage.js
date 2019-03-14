import React from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'
import Footer from './Footer'
import Form from './form'
import List from './list'
import { Link } from 'react-router-dom'

import { getListing } from '../actions/listing'

export class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { readyToMakePost: false }
  }

  componentDidMount() {
    if (this.props.match.params.searchTerm) {
      this.props.dispatch(getListing(this.props.match.params.searchTerm))
    }
  }

  componentWillUnmount() {
    console.log('homepage unmounting')
  }

  componentDidUpdate() {
    document.title = this.props.user ? `${this.props.user}'s Page` : 'HomePage'
  }

  render() {
    return (
      <div className="home">
        <Navbar />
        <header className="App-header">
          <p>Smart Real Estate Contracts</p>
        </header>
        <button className="button" onClick={() => {}}>
          <Link className="buttonText" to="/form">
            Add Listing
            {/* Why isnt the page re-rendering */}
          </Link>
        </button>
        <List />
        <Footer />
      </div>
    )
  }
}

export default connect()(Homepage)
