import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postFull: {}
    };
  }
  //for updating state
  componentDidMount() {
    this.loadPost();
  }

  componentDidUpdate() {
    this.loadPost();
  }

  loadPost() {
    if (this.props.match.params.id) {
      if (
        !this.state.postFull ||
        this.state.postFull.id !== +this.props.match.params.id
      )
        axios
          .get(
            `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
          )
          .then((res) => {
            console.log(res);
            this.setState({ postFull: res.data });
            console.log(this.state.postFull);
          });
    }
  }

  deletePost = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this)
      .then((res) => console.log(res.data));
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.postFull.id) {
      post = (
        <div className="FullPost">
          <h1>{this.state.postFull.title}</h1>
          <p>{this.state.postFull.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePost}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
