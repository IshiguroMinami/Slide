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

// FlickityのDOM生成が正しくされているか
console.log($('.carousel').data('flickity')); // nullやundefinedなら初期化ミス

