import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'

import './dashboardStyle.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

export class Dashboard extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <h1>Profile</h1>
          Wecome: {this.props.username}
        </div>
        <div>
          <button className="home-button" onClick={() => {}}>
            <Link className="buttonHomeText" to="/">
              Go to HOME
            </Link>
          </button>
        </div>
        <div className="dashboard-protected-data">
          {/* Protected data: {this.props.protectedData} */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`
  }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
