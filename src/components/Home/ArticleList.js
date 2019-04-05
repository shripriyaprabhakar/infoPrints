import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const refreshPage = () => {
  window.location.reload();
};

const ArticleList = props => {
  const articles = props.articles.map((article, i) => {
    return (
      <Router>
        <div className="container" style={{ marginTop: "50px" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" onClick={refreshPage}>
              <Link
                to={{ pathname: "/article", state: article.summary }}
                key={parseInt(article.id.slice(-7, -2))}
              >
                {article.title}
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    );
  });

  return <div className="container">{articles}</div>;
};

export default ArticleList;
