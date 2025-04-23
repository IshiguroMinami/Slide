$(document).ready(function () {
  const $carousel = $('.carousel').flickity({
    cellAlign: 'center',
    contain: true,
    pageDots: true,
    prevNextButtons: true,
    wrapAround: true,
    imagesLoaded: true,
    setGallerySize: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false
  });

  const flkty = $carousel.data('flickity');

  $carousel.on('staticClick.flickity select.flickity dragEnd.flickity', function () {
    flkty.stopPlayer(); // 一度止める
    flkty.playPlayer(); // 再開する
  });
});
