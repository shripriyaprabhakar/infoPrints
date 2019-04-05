import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "../ArticleList.js";

test('renders "no items" when the item list is empty', () => {
  const container = document.createElement("div");
  ReactDOM.render(<ArticleList items={[]} />, container);
  expect(container.textContent).toMatch("no items");
});

test("renders the items in a list", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <ArticleList items={["apple", "orange", "pear"]} />,
    container
  );
  expect(container.textContent).toMatch("apple");
  expect(container.textContent).toMatch("orange");
  expect(container.textContent).toMatch("pear");
});
