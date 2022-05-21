import "./styles.css";

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");

var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://api.newscatcherapi.com/v2/search",
  params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
  headers: {
    "x-api-key": "your_key_1"
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
