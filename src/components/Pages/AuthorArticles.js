import React, { Component } from "react";
import { Link } from "react-router-dom";
import arxiv from "arxiv";

import Spinner from "../Shared/Spinner.js";
import AuthorArticlesList from "./AuthorArticlesList.js";

class AuthorArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsArts: []
    };
  }
  componentDidMount() {
    var data = this.props.location.state;
    console.log("authorsname", this.props.location.state);
    var self = this;
    var search_query = {
      author: data
    };

    arxiv.search(search_query, async function(err, results) {
      console.log(
        "Found in authorarticles" +
          results.items.length +
          " results out of " +
          results.total
      );

      var response = await results.items;
      console.log("authorsarticles", response);
      self.setState({
        authorsArts: response
      });
    });
  }

  renderContent() {
    if (this.state.authorsArts.length > 1) {
      return <AuthorArticlesList authorsArticles={this.state.authorsArts} />;
    }

    return <Spinner message="Loading Articles...Please Wait" />;
  }

  render() {
    return (
      <div className="container bg-light" style={{ marginTop: "50px" }}>
        <p className="h4 text-center">{this.props.location.state}</p>
        <div className="">{this.renderContent()}</div>
      </div>
    );
  }
}
export default AuthorArticles;
