 var arrMovie = [
     "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2462475058.jpg",
     "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2461747793.jpg",
     "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462611862.jpg",
     "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2464315908.jpg",
     "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.jpg",
     "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2462387248.jpg",
     "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462515303.jpg",
     "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
     "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2461834877.jpg",
     "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2459198108.jpg"
 ];
 var html = "";
 $.each(arrMovie, function(i) {
     console.log(arrMovie[i]);
     html += "<div class='swiper-slide blue-slide movieImg'><img src='" + arrMovie[i] + "'></div>";
 })
 $(".banner").append(html);


 var mySwiper2 = new Swiper('#swiper-container2', {
     effect: 'cube',
 })