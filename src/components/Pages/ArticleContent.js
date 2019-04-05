import React, { Component } from "react";
import { Link } from "react-router-dom";
import arxiv from "arxiv";

import AuthorList from "./AuthorList.js";
import Spinner from "../Shared/Spinner.js";
import AuthorsScore from "../AuthorsArt/AuthorsScore.js";
import MainNav from "../Shared/MainNav.js";

class ArticleContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
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
      return <AuthorList authors={this.state.authors} />;
    }

    return <Spinner message="Loading Articles...Please Wait" />;
  }

  render() {
    return (
      <div>
        <MainNav />
        <div
          className="container bg-light text-success mb-0 border border-success h5"
          style={{ marginTop: "60px" }}
        >
          {this.props.location.state}
        </div>

        <div>{this.renderContent()}</div>
      </div>
    );
  }
}
export default ArticleContent;
