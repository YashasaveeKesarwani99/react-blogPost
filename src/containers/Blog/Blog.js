import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/Fullpost/FullPost";
import NewPost from "../../components/Newpost/NewPost";
import "./Blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedId: null
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const posts = res.data.slice(0, 4);
      const updatedPost = posts.map((post) => {
        return {
          ...post,
          author: "premchand",
          selectorId: null
        };
      });
      this.setState({ posts: updatedPost });
    });
  }

  //updating selectorId
  postSelector = (id) => {
    return this.setState({ selectedId: id });
  };

  render() {
    const posts = this.state.posts.map((obj) => {
      return (
        <Post
          author={obj.author}
          key={obj.id}
          title={obj.title}
          clicked={() => this.postSelector(obj.id)}
        />
      );
    });

    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>New Post</a></li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost ID={this.state.selectedId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
