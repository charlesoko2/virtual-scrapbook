// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the photo gallery elements
  const photoGallery = document.querySelector(".photo-gallery");
  const photoPrevBtn = document.querySelector(".photo-prev-btn");
  const photoNextBtn = document.querySelector(".photo-next-btn");

  // Set up variables to keep track of the current photo index and total number of photos
  let currentPhotoIndex = 0;
  const totalPhotos = photoGallery.children.length;

  // Add event listeners to the previous and next buttons
  photoPrevBtn.addEventListener("click", showPreviousPhoto);
  photoNextBtn.addEventListener("click", showNextPhoto);

  // Function to show the previous photo
  function showPreviousPhoto() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
      currentPhotoIndex = totalPhotos - 1;
    }
    updatePhotoGallery();
  }

  // Function to show the next photo
  function showNextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= totalPhotos) {
      currentPhotoIndex = 0;
    }
    updatePhotoGallery();
  }

  // Function to update the photo gallery display
  function updatePhotoGallery() {
    for (let i = 0; i < totalPhotos; i++) {
      const photo = photoGallery.children[i];
      if (i === currentPhotoIndex) {
        photo.classList.add("active");
      } else {
        photo.classList.remove("active");
      }
    }
  }

  // Get references to the video gallery elements
  const videoGallery = document.querySelector(".video-gallery");
  const videoPrevBtn = document.querySelector(".video-prev-btn");
  const videoNextBtn = document.querySelector(".video-next-btn");

  // Set up variables to keep track of the current video index and total number of videos
  let currentVideoIndex = 0;
  const totalVideos = videoGallery.children.length;

  // Add event listeners to the previous and next buttons
  videoPrevBtn.addEventListener("click", showPreviousVideo);
  videoNextBtn.addEventListener("click", showNextVideo);

  // Function to show the previous video
  function showPreviousVideo() {
    currentVideoIndex--;
    if (currentVideoIndex < 0) {
      currentVideoIndex = totalVideos - 1;
    }
    updateVideoGallery();
  }

  // Function to show the next video
  function showNextVideo() {
    currentVideoIndex++;
    if (currentVideoIndex >= totalVideos) {
      currentVideoIndex = 0;
    }
    updateVideoGallery();
  }

  // Function to update the video gallery display
  function updateVideoGallery() {
    for (let i = 0; i < totalVideos; i++) {
      const video = videoGallery.children[i];
      if (i === currentVideoIndex) {
        video.classList.add("active");
      } else {
        video.classList.remove("active");
      }
    }
  }

  // Get references to the message form and message list elements
  const messageForm = document.getElementById("message-form");
  const messageList = document.getElementById("message-list");

  // Add an event listener to the form for the submit event
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the values from the input fields
    const name = document.getElementById("name-input").value;
    const message = document.getElementById("message-input").value;

    // Create a new message element
    const newMessage = document.createElement("div");
    newMessage.innerHTML = `<strong>${name}:</strong> ${message}`;

    // Append the new message to the message list
    messageList.appendChild(newMessage);

    // Clear the input fields
    document.getElementById("name-input").value = "";
    document.getElementById("message-input").value = "";
  });
});
