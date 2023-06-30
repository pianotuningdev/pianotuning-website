function insertLinkbar() {
  var linkbarContainer = document.getElementById('linkbar-container');
    if (linkbarContainer) {
      linkbarContainer.innerHTML = linkbarHTML;
    }
  }

  var linkbarHTML = '<div class="linkbar">' +
  '<a href="index.html">About</a>' +
  '<a href="services.html">Services</a>' +
  '<a href="contact.html">Contact</a>' +
  '<a href="links.html">Links</a>' +
  '</div>';

insertLinkbar();
  
