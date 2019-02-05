// Menu Script Start ----------------------------
var myBars,Bar1,Bar2,Bar3,navHeight;

myBars=document.getElementById('bars');
Bar1= document.getElementById('barONE');
Bar2= document.getElementById('barTWO');
Bar3= document.getElementById('barTHREE');
navHeight=document.getElementById('myNAV');


myBars.addEventListener('click',function(){
    Bar1.classList.toggle('firstBAR');
    Bar2.classList.toggle('secBAR');
    Bar3.classList.toggle('thirdBAR');
    navHeight.classList.toggle('navOpen');
    navHeight.classList.remove('navClose'); 
    document.body.classList.toggle('noScroll');
});
function menuClose(){
    Bar1.classList.remove('firstBAR');
    Bar2.classList.remove('secBAR');
    Bar3.classList.remove('thirdBAR');
    navHeight.classList.remove('navOpen');
    navHeight.classList.add('navClose');
    document.body.classList.remove('noScroll');
}
// Menu Script End ------------------------------

// sixth-part Script start ----------------------
var cateforyBTN,myCategory,mMedia,timesClicked;

categoryBTN=document.getElementById('cateforyBTN');
myCategory=document.getElementById('myCategory');

timesClicked=0;
categoryBTN.addEventListener('click',function(){
    categoryBTN.classList.toggle('arrowRo');
    myCategory.classList.toggle('borderCategory');
    if(timesClicked%2==0){
        for( var i = 0 ; i < myCategory.children.length ; i++ ){
            myCategory.children[i].style.display='block';
        }
    }else{
       for( var i = 0 ; i < myCategory.children.length ; i++ ){
            myCategory.children[i].style.display='none';
        } 
    }
    timesClicked++;
});
function closeMyCate(){
    for( var i = 0 ; i < myCategory.children.length ; i++ ){
            myCategory.children[i].style.display='none';
        }
    myCategory.classList.remove('borderCategory');
    categoryBTN.classList.toggle('arrowRo');
    timesClicked++;
}

//change images

var projectIMG,images,i,arrowRight,arrowLeft,j;

projectIMG = document.getElementById('imagesBlock');
arrowRight = document.getElementById('arrowRight');
arrowLeft = document.getElementById('arrowLeft');
i=0;
images = projectIMG.children;
for(j=i+1;j<images.length;j++){
   images[j].classList.add('hideIMG');
}

arrowRight.addEventListener('click',function(){
    i++;
    if(i>0 && i<images.length){
        images[i-1].classList.remove('showIMG');
        images[i-1].classList.add('hideIMG');
        images[i].classList.add('showIMG');
        images[i].classList.remove('hideIMG');
    }if(i==images.length){
        i=0;
        images[i].classList.add('showIMG');
        for( j=i+1;j<images.length;j++){
            images[j].classList.add('hideIMG');
        }
        images[i].classList.remove('hideIMG');
        images[i].classList.add('showIMG');
        images[images.length-1].classList.add('hideIMG');
        images[images.length-1].classList.remove('showIMG');
    }
});
arrowLeft.addEventListener('click',function(){
    if(i>=0){
        i--;
    }if(i<0){
        i=images.length-1;
        images[i].classList.add('showIMG');
        images[i].classList.remove('hideIMG');
        images[0].classList.add('hideIMG');
        images[0].classList.remove('showIMG');
    }else if(i>=0){
        images[i+1].classList.add("hideIMG");
        images[i+1].classList.remove("showIMG");
        images[i].classList.add("showIMG");
        images[i].classList.remove("hideIMG");
    }
});





// sixth-part Script end ------------------------