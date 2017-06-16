 var banner = document.querySelector('#banner');
 window.onresize = set;
 set();

 function set() {
     var boxWidth = parseInt(getComputedStyle(banner)['width']);
     banner.style.height = boxWidth * (248 / 1242) + "px";
 }