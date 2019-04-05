import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const refreshPage = () => {
  window.location.reload();
};

const consolidate = array => {
  var output = [];

  array.forEach(function(item) {
    output = output.concat(item.authors);
  });

  return output;
};

const AuthorList = props => {
  const authorsArr = consolidate(props.authors);
  const authors = authorsArr.map((author, i) => {
    return (
      <Router>
        <div className="container" style={{ marginTop: "50px" }}>
          <ul className="list-group bg-light">
            <li
              className="list-group-item list-group-item-info text-center"
              onClick={refreshPage}
              key={author.id}
            >
              <Link to={{ pathname: "/author", state: author.name }}>
                <p className="h4 text-center">{author.name}</p>
              </Link>
            </li>
          </ul>
          <div />
        </div>
      </Router>
    );
  });

  return <div className="container">{authors}</div>;
};

export default AuthorList;
