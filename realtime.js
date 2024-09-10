let debounceTimeout;
document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value;
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    fetchSearchResults(searchTerm);
  }, 500);
});

function fetchSearchResults(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = ["apple", "appricot", "banana", "grapes"];

      const filteredResults = results.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredResults);
    }, 1000);
  }).then(displayResults);
}

function displayResults(results) {
  const resultList = document.getElementById("results");
  resultList.innerHTML = "";

  results.forEach((result) => {
    const listItem = document.createElement("li");

    listItem.textContent = result;

    resultList.appendChild(listItem);
  });
}
