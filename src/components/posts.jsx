import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search);
  console.log(result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month: {match.params.month} <br />
      See how tedious it is to extract such data. We have to repeatedly do the same thing. ES6 comes with destructuring to save the day. Let's jump right into it.<br />

    Let us repeat the above example with ES6. Instead of assigning it one by one, we can use an object on the left to extract the data.
    </div>
  );
};

export default Posts;
