import data from "./contant.js";
const cardTemplate = `
<div class="card-container">
<div class="image">
<img src="./images/{{image}}" alt="{{imageExists ? 'course image' : ''}}"></div>
<div class="card-content">{{category}}</div>
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
        .replace("{{name}}", item.name)
        .replace("{{ratingStars}}", "⭐".repeat(Math.round(item.rating)))
        .replace("{{imageExists}}", !!item.image ? "course-image" : " ");
    })
    .join("");
};

const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.innerHTML = generateCards(data);
