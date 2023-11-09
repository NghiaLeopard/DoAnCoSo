var widthLaptop = document.getElementsByClassName('product-item')[1].offsetWidth+30;
var laptopPSlide = document.getElementById('product-slider');
var phonePSlide = document.getElementById('product-slider1');
var laptopPPosition = 0;
var phonePPosition = 0;
var minLaptopWidth=0;
var minPhoneWidth=0;
var maxLaptopWidth=document.getElementById('product-slider').children.length * widthLaptop - (widthLaptop*5)
var maxPhoneWidth=document.getElementById('product-slider1').children.length * widthLaptop - (widthLaptop*5)
function right(){
    if(laptopPPosition>-maxLaptopWidth){
        widthlaptop = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        laptopPPosition-=widthLaptop;
        laptopPSlide.style.transform="translateX("+laptopPPosition+"px)";
    }
}
function right1(){
    if(phonePPosition>-maxPhoneWidth){
        widthLaptop = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        phonePPosition-=widthLaptop;
        phonePSlide.style.transform="translateX("+phonePPosition+"px)";
    }
}
function left(){
    if(laptopPPosition<minLaptopWidth){
        widthLaptop = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        laptopPPosition+=widthLaptop;
        laptopPSlide.style.transform="translateX("+laptopPPosition+"px)";
    }
}
function left1(){
    if(phonePPosition<minPhoneWidth){
        widthLaptop = document.getElementsByClassName('product-item')[1].offsetWidth+30;
        phonePPosition+=widthLaptop;
        phonePSlide.style.transform="translateX("+phonePPosition+"px)";
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