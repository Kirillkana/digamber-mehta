function handleNavLogo() {
    const navLogoList = document.querySelector('.nav-logo');
  
    if (window.innerWidth <= 840) {
      navLogoList.style.display = 'none';
    } else {
      navLogoList.style.display = 'flex';
    }
  }
  
  handleNavLogo();
  window.addEventListener('resize', handleNavLogo);

 

// Get all star elements and review textarea
const stars = document.querySelectorAll('.rating-stars .star');
const reviewTextarea = document.querySelector('.review-textarea');

// Variable to store the selected rating
let selectedRating = 0;

// Event listeners for star rating
stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = parseInt(star.getAttribute('data-rating'));
    selectedRating = rating;
    highlightStars(rating);
  });
});

// Function to highlight stars based on selected rating
function highlightStars(starCount) {
  stars.forEach(star => {
    const rating = parseInt(star.getAttribute('data-rating'));
    if (rating <= starCount) {
      star.style.color = 'gold';
    } else {
      star.style.color = 'black';
    }
  });
}

// Function to submit review
function submitReview() {
  const reviewText = reviewTextarea.value;
  // You can add further validation or submission logic here
  if (selectedRating === 0) {
    alert('Please select a rating!');
    return;
  }
  if (reviewText.trim() === '') {
    alert('Please write a review!');
    return;
  }
  
  // For demonstration purposes, log the selected rating and review text
  console.log(`Rating: ${selectedRating}, Review: ${reviewText}`);
  // Here you can implement logic to submit the review to your backend
  // For example, you can make an API request to send the review data
}
