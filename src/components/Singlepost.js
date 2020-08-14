import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Singlepost extends React.Component {
  constructor() {
    super();
    this.state = {
      SinglePost: [],
      BlogImage: "",
      CurrentPage: 1,
      PostsPerPage: 5,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:1337/testblogs/${this.props.match.param.postid}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("could not return data");
        }
        return response.json();
      })
      .then((blog) => {
        console.log(blog);
        this.setState({ SinglePost: blog });
        this.setState({ BlogImage: blog.featured.url });
      });
  }
  render() {
    const { id, blogtitle, blogcontents } = this.state.SinglePost;
    return <div></div>;
  }
}

export default Singlepost;
