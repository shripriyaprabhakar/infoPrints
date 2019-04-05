import React, { Component } from "react";
import { Link } from "react-router-dom";
import arxiv from "arxiv";

import Spinner from "../Shared/Spinner.js";

import MainNav from "../Shared/MainNav.js";
import AuthorList from "../Pages/AuthorList.js";

class AuthorsScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      articleList: []
    };
  }
  componentDidMount() {
    var self = this;
    var search_query = {
      author: "all"
    };

    arxiv.search(search_query, async function(err, results) {
      console.log(
        "Found in authors" +
          results.items.length +
          " results out of " +
          results.total
      );

      var response = await results.items;
      console.log("authors", response);
      self.setState({
        authors: response
      });
    });
  }

  renderContent() {
    if (this.state.authors.length > 1) {
      return (
        <div>
          <AuthorList authors={this.state.authors} />:{" "}
          {this.state.articleList.length}
        </div>
      );
    }

    return <Spinner message="Loading Articles...Please Wait" />;
  }

  render() {
    return (
      <div className="container bg-light" style={{ marginTop: "50px" }}>
        <MainNav />

        <div className="">{this.renderContent()}</div>
      </div>
    );
  }
}
export default AuthorsScore;
