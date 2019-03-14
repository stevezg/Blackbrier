import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearAuthToken } from '../local-storage'
import { clearAuth } from '../actions/auth'
import './navbar.css'

export class Navbar extends React.Component {
  logout() {
    clearAuthToken()
    this.props.dispatch(clearAuth())
  }
  render() {
    let logout
    if (this.props.loggedIn)
      logout = (
        <Link onClick={this.logout} to="/">
          Log out
        </Link>
      )
    else {
      logout = (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign up</Link>
        </div>
      )
    }
    console.log(this.props.loggedIn, logout)

    return (
      <nav className="navbar">
        <Link className="logo" to="/">
          Prestige Worldwide
        </Link>
        <div className="right">{logout}</div>
      </nav>
    )
  }
}
const mapStateToProps = state => {
  const { currentUser } = state.auth
  return { loggedIn: currentUser }
}

export default connect(mapStateToProps)(Navbar)
