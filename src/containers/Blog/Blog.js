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
      posts: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const posts = res.data.slice(0, 4);
      const updatedPost = posts.map((post) => {
        return {
          ...post,
          author: "premchand"
        };
      });
      this.setState({ posts: updatedPost });
    });
  }

  render() {
    const posts = this.state.posts.map((obj) => {
      return <Post author={obj.author} key={obj.id} title={obj.title} />;
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
