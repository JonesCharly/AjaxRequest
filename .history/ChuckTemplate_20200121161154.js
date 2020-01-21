function fetchChuckJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://api.chucknorris.io/jokes/random`;
  axios
    .get(url)
    .then(function(response) {
      return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
    })
    .then(function(quote) {
      console.log("data decoded from JSON:", quote);

      // Build a block of HTML
      const quoteHtml = `
        <p><strong>${quote.name}</strong></p>
        <img src="${quote.sprites.front_shiny}" />
      `;
      document.querySelector("#quote").innerHTML = quoteHtml;
    });
}

fetchChuckJSON();
