import React, { Component } from "react";

import arxiv from "arxiv";
import "../../App.css";
import ArticleList from "./ArticleList.js";
import MainNav from "../Shared/MainNav.js";
import Spinner from "../Shared/Spinner.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    var self = this;
    var search_query = {
      title: "machine learning, data science, psychiatry, therapy"
    };

    arxiv.search(search_query, async function(err, results) {
   

      var response = await results.items.slice(0, 25);
      
      self.setState({
        articles: response
      });
      if(err) {
      console.log(err);
      }
    });
  }
  //console.log(results.items[0].title);
  //console.log(results.items[0].authors);
  //console.log(results.items[0].summary);
  renderContent() {
    if (this.state.articles.length > 1) {
      return <ArticleList articles={this.state.articles} />;
    }

    return <Spinner message="Loading Articles...Please Wait" />;
  }

  render() {
    return (
      <div className="">
        <div>
          <MainNav />
        </div>
        <div className="container ">{this.renderContent()}</div>
      </div>
    );
  }
}

export default Home;
