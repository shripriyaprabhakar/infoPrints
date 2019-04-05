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

class AuthorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsArts: [],
      dataName: ""
    };
  }

  componentDidMount() {
    var self = this;
    var search_query = {
      author: this.state.dataName
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

  handleClick = (e, i) => {
    e.preventDefault();
    var data = event.target.textContent;
    this.setState({
      dataName: data
    });
  };

  render() {
    consolidate(props.authors);
    const authors = authorsArr.map((author, i) => {
      return (
        <Router>
          <div className="container" style={{ marginTop: "50px" }}>
            <ul>
              <li onClick={event => this.handleClick(event)} key={author.id}>
                <a href="/author">{author.name} </a>
              </li>
            </ul>
            <div />
          </div>
        </Router>
      );
    });

    return <div className="">{authors}</div>;
  }
}

export default AuthorList;
