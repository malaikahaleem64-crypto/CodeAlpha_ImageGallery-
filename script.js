
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
   
    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox
galleryItems.forEach(item => {
  item.querySelector('img').addEventListener('click', function() {
    window.open(this.src, '_blank');
  });
});
