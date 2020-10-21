import React, { Component } from "react";

import "./Blog.css";
import { Route } from "react-router-dom";
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
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
