import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import AuthorsScore from "./components/AuthorsArt/AuthorsScore.js";

import "./App.css";
import ArticleContent from "./components/Pages/ArticleContent";
import AuthorArticles from "./components/Pages/AuthorArticles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/article" component={ArticleContent} />
          <Route path="/author" component={AuthorArticles} />
          <Route path="/authors-articles" component={AuthorsScore} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
