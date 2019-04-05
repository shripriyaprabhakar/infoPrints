import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainNav from "../Shared/MainNav";

const refreshPage = () => {
  window.location.reload();
};

const AuthorArticlesList = props => {
  const authors = props.authorsArticles.map((article, i) => {
    return (
      <Router>
        <div className="container" style={{ marginTop: "50px" }}>
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-info text-center container bg-light text-success mb-0 border border-success h5"
              onClick={refreshPage}
              key={i}
            >
              {article.title}
            </li>
          </ul>
        </div>
      </Router>
    );
  });

  return <div className="container">{authors}</div>;
};

export default AuthorArticlesList;
