const search = document.getElementById("search").value;
const news = document.getElementById("news")
const submit = document.getElementById("submit").addEventListener("click", () => {
    const search = document.getElementById("search").value;
    if (search == "") {
        alert("Please enter a valid query!");
    } else {
        // delete all news exisiting
        news.innerHTML = ""
        getNews(search)
    }
});

function getNews(search) {
    const apiUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=dd3543615d4748b5a21353c68cae3bfd`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            data.articles.forEach((article) => {
                const newArticle = document.createElement("article");
                newArticle.innerHTML = `
                        <hr/>
                        <img src="${article.urlToImage}"  width="100px" alt="${article.title}">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                        `;
                news.appendChild(newArticle);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}