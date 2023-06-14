// footer.js
document.addEventListener('DOMContentLoaded', function() {
  var footerContainer = document.getElementById('footer-container');
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      footerContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});
