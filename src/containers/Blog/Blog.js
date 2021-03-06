import React, { Component } from "react";
import FullPost from "../Blog/Fullpost/FullPost";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/new-post" component={NewPost} />

          <Route path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
