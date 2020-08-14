import React from "react";
import fetch from "isomorphic-fetch";
import Blogitem from "./Blogitem";

class Bloglist extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      perPage: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:1337/testblogs")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("could not return data");
        }
        return response.json();
      })
      .then((blogs) => {
        console.log(blogs);
        this.setState({ blogs: blogs });
      });
  }

  render() {
    return (
      <div>
        {this.state.blogs.map(({ id, title, content, featuredImage }) => (
          <div>
            <div style={{ height: "100px", width: "100px" }}>
              <Blogitem
                key={id}
                blogtitle={title}
                blogconent={content}
                featuredimage={featuredImage}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Bloglist;
