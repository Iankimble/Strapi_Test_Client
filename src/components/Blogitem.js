import React from "react";

const Blogitem = ({ id, blogtitle, blogconent, featuredimage }) => {
  return (
    <div>
      <div></div>
      <h1>{blogtitle}</h1>
      <img
        width="75%"
        // src={`http://localhost:1337${featuredimage.formats.medium.url}`}
      />
    </div>
  );
};

export default Blogitem;
