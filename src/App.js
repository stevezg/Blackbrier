import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import Homepage from './components/homepage'
import LandingPage from './components/LandingPage'
import Form from './components/form'
import RegistrationPage from './components/registration-page'
import Terms from './components/Terms'
import landingpage from './components/landing-page'
import Dashboard from './components/dashboard'
import { refreshAuthToken } from './actions/auth'
import './App.css'

class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh()
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh()
    }
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh()
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    )
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }

    clearInterval(this.refreshInterval)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/login" component={landingpage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/sign-up" component={RegistrationPage} />
        <Route exact path="/home/:searchTerm" component={Homepage} />
        <Route exact path="/home/" component={Homepage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/form" exact component={Form} />
        <Route exact path="/terms" exact component={Terms} />
      </div>
    )
  }
}

export default withRouter(App)
