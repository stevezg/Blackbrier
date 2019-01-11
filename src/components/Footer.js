import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import './footer.css'


export default function Footer(){
  return(<div>
  <footer>
  <div>
  <Link to="/terms">
          <p className="terms">Terms and Conditions</p>
        </Link></div></footer>

  </div>

  );
}

