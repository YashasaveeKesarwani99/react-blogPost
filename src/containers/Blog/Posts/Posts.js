import React, { Component } from "react";
import axios from "axios";
import "./Posts.css";
import Post from "../../../components/Post/Post";
class Posts extends Component {
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
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
