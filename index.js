// import accesskey from "./accesskey";

const accessKey = "N1ev0We5Y4xtq5AXwDxvo3l7t84FN7AuGQO6XH_ZKvk";

const searchForm = document.getElementById("search__form");
const searchBox = document.getElementById("search__box");
const searchResult = document.getElementById("search__result");
const showMore = document.getElementById("show__more__btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    // here we are checking if the images div has content. If it has, we clear it 
    if (page === 1) {
        searchResult.innerHTML = "";
    }


    const results = data.results;

    // the function to display the images 
    results.map(result => {
        const image = document.createElement("img");
        image.src = result.urls.regular;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";


        // we append the images to the images div crearted in the html file 
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    // after the search, we change the css of the showMore button to block 
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

// this will increase the loaded images by increasing the page by one whenver the show more button is clicked on 
showMore.addEventListener("click", () => {
    page++;
    searchImages();
})





// access key 
// N1ev0We5Y4xtq5AXwDxvo3l7t84FN7AuGQO6XH_ZKvk