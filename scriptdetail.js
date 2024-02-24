import data from "./contant.js";
import  {generateAllRating} from './commonFunction.js';

const generateDetailPage = (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return "";
  }

  let detailPage = "";
  const filteredData = data.filter((item) => item.id == 1);
  filteredData.forEach((item) => {
    const ratingStars = generateAllRating(item.rating);
    const itemHtml = `
    
        <div class="category">
        <ul>
        <li class="category-type"> ${item.category}</li>
        <li class="rating-evaluate"> ${ratingStars}</li>
        <li class="category-topic"> ${item.topic}</li>

          </div>
          <ul class="detail-description">
       <li>   ${item.description}</li>
        </ul>
      `;

    detailPage += itemHtml;
  });

  return detailPage;
};

const cardsDetail = document.getElementById("detailContent");
cardsDetail.innerHTML = generateDetailPage(data);

//generate subtopic
//generate subtopic
const generateSubTopic = (subtopicsData) => {
  let subTopicHtml = "<table class='table-container'>";
  subtopicsData = data.filter((item) => item.id == 1);
  subtopicsData.forEach((subtopic) => {
    const subtopicList = subtopic.subtopics
    .map(
      (sub) =>
        `<tr><td><ion-icon name="checkmark-circle-outline" class="icon icon-border"></ion-icon>${sub}</td></tr>`
    )
      .join("");
    subTopicHtml += `
        
    <div class="subDetail">
    <tr class="SubTitle">
    <td>Html SubTopics</td>
    </tr>        <tr>
                    ${subtopicList}
                </tr>
            </div>
        `;
  });
  subTopicHtml += "</table>";
  return subTopicHtml;
};

const cardsSubTopic = document.getElementById("subDetail");
cardsSubTopic.innerHTML = generateSubTopic(data);
