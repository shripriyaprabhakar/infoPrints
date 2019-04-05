import React from "react";
import AuthorList from "../AuthorList.js";
import renderer from "react-test-renderer";

test("Link changes the path when hovered", () => {
  const container = document.createElement("div");
  ReactDOM.render(<AuthorList />, container);

  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// This test has to be fixed. I intend to check whether the link is taking us to the correct route.
