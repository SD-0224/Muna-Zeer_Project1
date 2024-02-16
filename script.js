import data from "./contant.js";

const toggleButton = document.getElementById("toggleDark");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const headerContainer=document.querySelector("header-pg");
  headerContainer.classList.toggle("dark-mode");

  const cardContainer=document.querySelector("card-container");
  cardContainer.classList.toggle("dark-mode");

  const subContainer=document.querySelector("subContainer");
  subContainer.classList.toggle("dark-mode");

  const searchContainer=document.querySelector("search-content");
  searchContainer.classList.toggle("dark-mode");
  const cardContent=document.querySelector("card-container");
  cardContent.classList.toggle("dark-mode");

  const footerContainer=document.querySelector("footer");
  footerContainer.classList.toggle("dark-mode");
  const Container=document.querySelector("container");
  Container.classList.toggle("dark-mode");
  const triangleRevers=document.querySelector("triangleReverse");
  triangleRevers.classList.toggle("dark-mode");
  const select=document.querySelector("select");
  select.classList.toggle("dark-mode");
  const button=document.querySelector("button");
  button.classList.toggle("dark-mode");

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

const generateAllRating = (star) => {
  //filled stars
  const filled = Math.round(star);
  //empty stars
  const emptyStar = 5 - filled;
  const starIcon =
    '<ion-icon name="star-outline" class="icon-fill"></ion-icon>'.repeat(
      filled
    );
  const emptyStarIcon =
    '<ion-icon name="star-outline" class="icon-fill"></ion-icon>'.repeat(
      starIcon
    );
  return starIcon + emptyStarIcon;
};
const generateCards = (data) => {
  return data
    .map((item) => {
      return cardTemplate
        .replace("{{image}}", item.image)
        .replace("{{category}}", item.category)
        .replace("{{topic}}", item.topic)
        .replace("{{name}}", item.name)
        .replace("{{ratingStars}}", "⭐".repeat(Math.round(item.rating)))
        .replace("{{imageExists}}", !!item.image ? "course-image" : " ");
    })
    .join("");
};

const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.innerHTML = generateCards(data);
