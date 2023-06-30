function insertFooter() {
  var bodyElement = document.getElementsByTagName('body')[0];
  bodyElement.insertAdjacentHTML('beforeend', footerHTML);
}

var footerHTML = '<footer>' +
  '<p class="footer">Last updated: 29 June 2023</p>' +
  '<p class="footer">Designed by Q. Wright</p>' +
  '<p class="footer">&copy; 2023 Q. Wright. All rights reserved.</p>' +
  '<p class="footer"><a href="mailto:wrighttunings@gmail.com">Contact</a> Webmaster</p>' +
  '</footer>';

  insertFooter();