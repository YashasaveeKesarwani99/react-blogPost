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
  componentDidUpdate() {
    if (this.props.ID) {
      if (!this.state.postFull || this.state.postFull.id !== this.props.ID)
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${this.props.ID}`)
          .then((res) => {
            //console.log(res);
            this.setState({ postFull: res.data });
            console.log(this.state.postFull);
          });
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.ID) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.postFull.id) {
      post = (
        <div className="FullPost">
          <h1>{this.state.postFull.title}</h1>
          <p>{this.state.postFull.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
