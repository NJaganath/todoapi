import React from 'react';
import './templates/LoginPage.css';

export default function Login() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              Login
            </a>
            <ul id="nav-mobile" className="right">
              <a href="/signup">Signup</a>
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
            action="/login"
            style={{ padding: '1em' }}
          >
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="first_name">Username</label>
                <br></br>
                <br></br>
                <input
                  placeholder="Placeholder"
                  name="username"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="password">Password</label>
                <br></br>
                <br></br>
                <input name="password" type="password" className="validate" />
              </div>
            </div>
            <div className="card-action row">
              <input type="submit" className="blue text-white btn left" />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
