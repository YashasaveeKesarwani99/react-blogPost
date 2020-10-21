import React, { Component } from "react";

import "./Blog.css";
import { Route, NavLink } from "react-router-dom";
import Posts from "../Blog/Posts/Posts";
import NewPost from "../Blog/Newpost/NewPost";
class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
