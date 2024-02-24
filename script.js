import data from "./contant.js";
import  {generateAllRating} from './commonFunction.js';

const toggleButton = document.getElementById("toggleDark");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const headerContainer = document.querySelector("header-pg");
  headerContainer.classList.toggle("dark-mode");

  const cardContainer = document.querySelector("card-container");
  cardContainer.classList.toggle("dark-mode");

  const subContainer = document.querySelector("subContainer");
  subContainer.classList.toggle("dark-mode");

  const searchContainer = document.querySelector("search-content");
  searchContainer.classList.toggle("dark-mode");
  const cardContent = document.querySelector("card-container");
  cardContent.classList.toggle("dark-mode");

  const footerContainer = document.querySelector("footer");
  footerContainer.classList.toggle("dark-mode");
  const Container = document.querySelector("container");
  Container.classList.toggle("dark-mode");
  const triangleRevers = document.querySelector("triangleReverse");
  triangleRevers.classList.toggle("dark-mode");
  const select = document.querySelector("select");
  select.classList.toggle("dark-mode");
  const button = document.querySelector("button");
  button.classList.toggle("dark-mode");
  //heart cards
  const favoritesContainer = document.getElementById("favoritesContainer");
  favoritesContainer.classList.toggle("dark-mode");
  const smallCard = document.querySelector("small-cards");
  smallCard.classList.toggle("dark-mode");
});

const cardTemplate = `
<div class="card-container">
<div class="image">
<img src="./images/{{image}}" alt="{{imageExists ? 'course image' : ''}}"></div>
<div class="card-content">
<span class="category">{{category}}</span><br>
<span class="topic">{{topic}}</span>
</div>
<div class="author-evaluate">
<p>
{{ratingStars}} </p>
<p> Author:{{name}}
</p>
</div>
</div>
`;



const generateCards = (data) => {
  return data.map((item) => {
    const ratingStars = generateAllRating(item.rating);
    return cardTemplate
      .replace("{{image}}", item.image)
      .replace("{{category}}", item.category)
      .replace("{{topic}}", item.topic)
      .replace("{{name}}", item.name)
      .replace("{{ratingStars}}", ratingStars)
      .replace("{{imageExists}}", !!item.image ? "course-image" : " ");
  }).join("");
};

const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.innerHTML = generateCards(data);

const createCards = (data) => {
  const favoritesContainer = document.getElementById("favoritesContainer");
  const ratingStars = generateAllRating(data.rating);
  favoritesContainer.innerHTML += `
<div class="small-cards">
<img class="img-heart" src="./images/${data.image} "alt="favorite-course">
<div class="card-info">
  <h3>${data.topic}</h3>
  <p class="author-evaluate"> ${ratingStars}</p>
</div>
</div>
  `;
  return favoritesContainer;
};

const displayCard = (container, data) => {
  container.innerHTML = "";
  if (!Array.isArray(data)) {
    return true;
  }
  container.innerHTML += '<p class="topic-card">My Favourite Topics</p>';
  data.forEach((item) => {
    const card = createCards(item);
    card.addEventListener("click",function() {
      window.location.href="detailpage.html";

    })
  });
};
document
  .getElementById("favorite-button")
  .addEventListener("click", function () {
    
    favoritesContainer.classList.toggle("hidden");
    const filterItems = data.filter((item) => item.id == 6 || item.id == 33);
    console.log("filterItems", filterItems);
    displayCard(favoritesContainer, filterItems);
  });


