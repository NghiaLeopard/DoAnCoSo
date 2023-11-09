var widthfashion = document.getElementsByClassName('product-item')[1].offsetWidth+30;
var fashionPSlide = document.getElementById('product-slider');
var watchedPSlide = document.getElementById('product-slider1');
var fashionPPosition = 0;
var watchedPPosition = 0;
var minfashionWidth=0;
var minWatchedWidth=0;
var maxfashionWidth=document.getElementById('product-slider').children.length * widthfashion - (widthfashion*5)
var maxWatchedWidth=document.getElementById('product-slider1').children.length * widthfashion - (widthfashion*5)
function right(){
    if(fashionPPosition>-maxfashionWidth){
        widthfashion = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        fashionPPosition-=widthfashion;
        fashionPSlide.style.transform="translateX("+fashionPPosition+"px)";
    }
}
function right1(){
    if(watchedPPosition>-maxWatchedWidth){
        widthfashion = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        watchedPPosition-=widthfashion;
        watchedPSlide.style.transform="translateX("+watchedPPosition+"px)";
    }
}
function left(){
    if(fashionPPosition<minfashionWidth){
        widthfashion = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        fashionPPosition+=widthfashion;
        fashionPSlide.style.transform="translateX("+fashionPPosition+"px)";
    }
}
function left1(){
    if(watchedPPosition<minWatchedWidth){
        widthfashion = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        watchedPPosition+=widthfashion;
        watchedPSlide.style.transform="translateX("+watchedPPosition+"px)";
    }
}
function chooseColor(e){
    var className = e.className;
    var number = className.charAt(className.length-1);
    var openBox = "box-img"+number;
    var openbox_img = $(e).parent().parent().siblings('.'+openBox)[0];
    var box_img = $(e).parent().parent().siblings('.box-img');
    for( var i =0;i<box_img.length;i++){
        box_img[i].style.display='none';
    }
    openbox_img.style.display='block';

}