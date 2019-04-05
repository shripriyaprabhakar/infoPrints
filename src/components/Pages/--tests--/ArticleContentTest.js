import arxiv from "arxiv";

test("failed query", async () => {
  let data;
  try {
    API.login("me@example.com", "wrong_password");
    var search_query = {
      author: 345435
    };
    data = arxiv.search(search_query, async function(err, results) {
      var response = await results.items;
    });
    fail();
  } catch (e) {
    expect(e.response.data.error).toMatchSnapshot();
  }
});

test("good query", async () => {
  let data;
  try {
    API.login("me@example.com", "wrong_password");
    var search_query = {
      author: 345435
    };
    data = arxiv.search(search_query, async function(err, results) {
      var response = await results.items;
    });
    fail();
  } catch (e) {
    expect(e.response.data.error).toMatchSnapshot();
  }
});
