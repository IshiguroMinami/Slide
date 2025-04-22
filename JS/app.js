$(document).ready(function(){
  $('.carousel').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    prevNextButtons: true,
    wrapAround: true,
    imagesLoaded: true,
    setGallerySize: true,
    autoPlay: 3000
  });
});
