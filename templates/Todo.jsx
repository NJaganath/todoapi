import React from 'react';
import './templates/Todo.css';

export default function Todo() {
  return (
      <div>
          <div className="navbar-fixed">
          <nav className="blue">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">{/* Your title here */}</a>
            <ul id="nav-mobile" className="right">
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </nav>
          </div>

          <div id="content">
              <form className="card" >
              <div className="card-content">
                <span className="card-title">Create Todo</span><br></br>
                <div className="input-field">
                  <input
                    type="text"
                    name="text"
                    placeholder="Enter Todo Text"
                    className="materialize-textarea"
                  />

                </div>
              </div>
              <div className="card-actions">
                <div className="row">
                  <div className="col sm12 m4 offset-m8">
                    <input className="btn blue right" type="submit" value="SAVE" />
                  </div>
                </div>
              </div>
              </form>

              
          </div>
      </div>
  );
};