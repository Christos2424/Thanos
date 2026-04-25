// script.js
(function() {
  var overlay = document.getElementById('lightbox-overlay');
  var container = document.getElementById('lightbox-container');
  var img = document.getElementById('lightbox-img');
  var label = document.getElementById('lightbox-label');
  var closeBtn = container.querySelector('.lightbox-close');
  var lastFocus = null;

  var galleryLinks = document.querySelectorAll('.photo-wrap, .media-card');
  galleryLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      lastFocus = document.activeElement;
      var imgSrc = link.querySelector('img').src;
      var imgAlt = link.querySelector('img').alt || '';
      var href = link.getAttribute('href') || '';
      var text = href.replace('#lb-', '');
      if (text === 'lb-contact' || href === '#lb-contact') {
        text = 'Κουρείο Θάνος';
      } else {
        text = text + ' / 10';
      }
      label.textContent = text;
      img.src = imgSrc;
      img.alt = imgAlt;
      container.classList.add('active');
      overlay.classList.add('active');
      closeBtn.focus();
    });
  });

  function closeLightbox() {
    container.classList.remove('active');
    overlay.classList.remove('active');
    if (lastFocus) lastFocus.focus();
  }

  overlay.addEventListener('click', closeLightbox);
  container.addEventListener('click', function(e) {
    if (e.target === container) {
      closeLightbox();
    }
  });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && container.classList.contains('active')) {
      closeLightbox();
    }
  });
})();