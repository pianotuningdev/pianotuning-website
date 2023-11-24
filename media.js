function insertMedia() {
  var mediaContainer = document.getElementById('media-container');
    if (mediaContainer) {
      mediaContainer.innerHTML = mediaHTML;
    }
  }

  var mediaHTML = 
  '<div class="media">' +
  '<div class="image-container">' +
  '<img src="me2.jpg" alt="where did my picture go?"' +
  '</div>' +
  '<div class="image-container">' +
  '<img src="hammers3.jpg" alt="where did my picture go?"' +
  '</div>' +
  '</div>';

insertMedia();
  
