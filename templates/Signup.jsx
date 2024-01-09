import React from 'react';
import './templates/Signup.css';

export default function Signup() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              Sign Up
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a href="/login">Login Page</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="content">
        <main className="container" style={{ marginTop: '100px' }}>
          <form
            className="card col s12"
            id="loginForm"
            method="POST"
            action="/signup"
            style={{ padding: '1em' }}
          >
            <div className="row">
              
              <div className="input-field col s12 m6">
              <label htmlFor="email">Email</label><br></br><br></br>
                <input
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                  className="validate"
                />
              </div>

              <div className="input-field col s12 m6">
              <label htmlFor="username">Username</label><br></br><br></br>
                <input
                  placeholder="Enter Username"
                  name="username"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="password">Password</label><br></br><br></br>
                <input name="password" type="password" className="validate" />
                
              </div>
            </div>
            <div className="card-action row">
              <input type="submit" className="blue text-white btn right" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}