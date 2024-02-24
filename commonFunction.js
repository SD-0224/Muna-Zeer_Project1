const generateAllRating = (rating) => {
    const filledStars = Math.min(Math.round(rating), 5);
    const emptyStars = Math.max(0, 5 - filledStars);
  
    const ratingIcon = '<ion-icon name="star" class="icon-fill"></ion-icon>';
  
    let ratingIcons = "";
  
    // Add filled stars
    ratingIcons += ratingIcon.repeat(filledStars);
  
    // Add empty stars
    ratingIcons +=
      '<ion-icon name="star-outline" class="icon-fill"></ion-icon>'.repeat(
        emptyStars
      );
  
    return ratingIcons;
  }; 

  export{generateAllRating}