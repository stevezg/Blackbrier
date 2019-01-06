import React from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'
import Footer from './Footer'
import Form from './form'
import List from './list'

import { getListing } from '../actions/listing'

export class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { readyToMakePost: false }
  }

  componentDidMount() {
    document.title = this.props.user
      ? `${this.props.user}'s Posts`
      : 'All Posts'

    this.props.dispatch(getListing())
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
          <button
            onClick={() =>
              this.setState({
                readyToMakePost: !this.state.readyToMakePost
              })
            }
          >
            Create New Listing
          </button>
        </header>
        {this.state.readyToMakePost ? <Form /> : ''}
        <List />
        <button onClick={() => {}} />
        <Footer />
      </div>
    )
  }
}

export default connect()(Homepage)
