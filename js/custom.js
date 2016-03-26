var count=0;
var inputId='14MCA0009';
var url='';
var counter = 0;
var resp={};
var name='John Doe';
var fbimg;
var reason='';

function playAgain(){

 count=0;
 inputId='14MCA0009';
 url='';
counter=0;
$('.one').hide();
$('.three').hide();
$('.four').hide();
$('.two').addClass('animated fadeInDown').show();
$('.score').text(count);
$('.inputId').val('');
$('.reason').val('');
 $('.blockw').show();

}

function check(){
var width=$('.circle').width();
if(($(".shot").offset().left>=$('.circle').offset().left) && ($(".shot").offset().left<=$(".circle").offset().left+width)) {

			// console.log("yayy");
			$('.shot').removeClass('play');
			$('.shot').addClass('up');
			add();
			setTimeout(function(){ 
									$('.shot').removeClass('up');
									$('.shot').addClass('play');
							}, 500);

}
else {

	// console.log("boooo...");
	remove();

}
$('.score').text(count);
}

// check function ends here 

function listen(){

 $(window).keypress(function (e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    e.preventDefault();
    check();
  }




});

}

function unlisten(){

$(window).unbind("keypress");


//  $(window).keypress(function (e) {
//   if (e.keyCode === 0 || e.keyCode === 32) {
//     e.preventDefault();
   
//   }




// });


}
// listen function ends here...



// Events Based Stuffs

$('a.playnow').on("click",function(e){
	e.preventDefault();

FB.login(function(response) {
  if (response.status === 'connected') {

	$('.one').hide();
	$('.two').show().addClass("animated fadeInDown"); 


FB.api('/me?fields=first_name', function(response) {
    // console.log(JSON.stringify());
    name=response.first_name;
    resp=response;
    $('.name').text(name);
});

FB.api('/me','GET',{"fields":"picture.width(200).height(200)"},
  function(response) {
    
    resp=response;
    fbimg=resp.picture.data.url;

  }
);




    // Logged into your app and Facebook.
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
  }
});




});
$( "#input-thing" ).submit(function( event ) {
$('#input-thing').removeClass("animated shake");
 event.preventDefault();

if($('.input-id').val()=='' || $('.reason').val()=='') {

	$('#input-thing').addClass("animated shake");
	 event.preventDefault();
}
else {
 event.preventDefault();
 $('.two').hide();
   $('.blockw').hide();
 $('.three').show().addClass("animated fadeInDown"); 
 trigger();
}
});



$('.click').on('click',function(){

 $('.two').hide();
 $('.blockw').hide();
 $('.three').show().addClass("animated fadeInDown"); 
 $('.input-id').val('14MCA0009');
 $('.reason').val('On Random Hunt Streak!');
 trigger();



});

function add(){


	count++;
}


function remove(){

	count--;
}

function timer(){

var interval = setInterval(function() {
    counter++;
    $('.time').text(Math.abs(counter-60));
    if (counter==60) {
        // Display a login box
        clearInterval(interval);
        $('.shot').removeClass('play');
        $('.three').hide().addClass('animated ');
        $('.four').show().addClass('animated fadeInDown');
        unlisten();
        makeImage();
        publishScore();
    }
}, 500);


}


var countD=1;
function countDown(){
var intervalC = setInterval(function() {
    $('.that').text(countD);
   countD++;
   console.log(countD);
    if (countD>=5) {
        // Display a login box
        clearInterval(intervalC);
       $('.that').hide();
       console.log(countD);
    }
}, 800);


}


function trigger(){
        $('.that').show();
        countDown();

	      setTimeout(function(){ 
				$('.shot').addClass('play');
				timer();
				listen();}, 5000);



				inputId=$('.input-id').val();
				url='https://academics.vit.ac.in/student/view_photo_2.asp?rgno='+inputId;
				$('.shot').css('background-image', 'url(' + url + ')','background-color','white');


}

// var img='https://academics.vit.ac.in/student/view_photo_2.asp?rgno=14MCA0020';

// img.onload=makeImage();
var stringresult="",stringresultbig="";
function makeImage(){

var canvas = document.getElementById("img");
var ctx = canvas.getContext("2d");
 reason=$('.reason').val();
canvas.width=1000;//horizontal resolution (?) - increase for better looking text
canvas.height=500;//vertical resolution (?) - increase for better looking text
ctx.font = "32px Aller";
ctx.textAlign="center";
ctx.fillStyle="#FFffff";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#999999";
stringresult=inputId+", got killed "+count+" times by "+name;
stringresultbig=stringresult+" Because '"+reason+"'";
ctx.fillText(stringresult,500,60);
ctx.font = "25px Aller";
ctx.fillText("Reason: "+reason,500,100);




// ctx.fillText("Hit by: Sarabpreet",50,50);
// ctx.fillText("Reason: For being nice and shiting all arround my place",50,90);

      var imageObj = new Image();    
      var img2= new Image();
      var img3= new Image();

img3.onload=function(){

	      imageObj.onload = function() {
        // ctx.drawImage(imageObj,10,60);
  	     ctx.drawImage(img3,250,140,200, 200*imageObj.height/imageObj.width);
 	    ctx.drawImage(imageObj,550,140,200, 200*imageObj.height/imageObj.width);

      };
   	  imageObj.src=url;
      // img2.src="img/dirt.png";
      img2.crossOrigin = 'anonymous';
      img2.onload=function(){
	
	      // ctx.drawImage(img2,550,120,400, 300*imageObj.height/imageObj.width);
      ctx.drawImage(img2,200,120);
      }

}
      // imageObj.src = 'https://academics.vit.ac.in/student/view_photo_2.asp?rgno=14MCA0009';

     img3.src=fbimg;
     img3.crossOrigin = 'anonymous';
    	



}




// canvas.style.width=width;//actual width of canvas
// canvas.style.height=height;//actual height of canvas

$('a').on("click",function(e){

 e.preventDefault();

// if($(this).attr('thing')!='share') {



// }

if($(this).hasClass('topScore')) {
$('#topScore').modal().addClass("animated fadeInDown");
  // console.log("top top score.../");
}
if($(this).hasClass('comment')) {


$('#comments').modal().addClass("animated fadeInDown");

}



if($(this).hasClass('how')) {

$('#how').modal().addClass("animated fadeInDown");
}



if($(this).hasClass('contribute')) {
$('#contribute').modal().addClass("animated fadeInDown");
}





});


// the last nav 

$('.four .those a').on("click",function(){

// console.log($(this).text());

if($(this).attr('thing')=='share'){


shareOnFacebook();
// console.log("i am share...");
}
if($(this).attr('thing')=='replay'){

// console.log("i am play again....");
playAgain();

}
 if($(this).attr('thing')=='modal'){

// console.log("i am popup");
$('#topScore').modal().addClass("animated fadeInDown");
}


});



function publishScore(){

// console.log("update has been called : ");

   
    ref.push({
    score:count,
    name:name,
    reason:reason,
    victim:inputId,
    time:Firebase.ServerValue.TIMESTAMP,
      
    });


}


 var ref = new Firebase("https://shark-attack-vit.firebaseio.com/score");
ref.orderByChild("score").on("child_added", function(snapshot) { 
var time = moment(snapshot.val().time).format("DD-MM-YYYY h:mm:ss");
var string="<tr><td>"+time+"</td><td>"+snapshot.val().name+"</td><td>"+snapshot.val().score+"</td><td>"+snapshot.val().victim+"</td><td>"+snapshot.val().reason+"</td></tr>";

  $('.insert-data-here').append(string);

});



// function saveImage() {
//     var canvasData = canvas.toDataURL("image/png");
//     var ajax = new XMLHttpRequest();
//     ajax.open("POST",'testSave.php',false);
//     ajax.onreadystatechange = function() {
//         console.log(ajax.responseText);
//     }
//     ajax.setRequestHeader('Content-Type', 'application/upload');
//     ajax.send("imgData="+canvasData);

// }





// var globalFacebookShareObject = {name:'Shark Attack VIT VERSION'} //will be set when I click on a product, on a picture, on a comment or post, or whatever I want to share on Facebook or when I load the page

function shareOnFacebook(){
    FB.ui({
        method: 'feed',
        name:stringresult,
        link: "http://sarabpreet.in",
        caption: 'Shark Attack Vit Version',
        description:stringresultbig,
        picture:fbimg
    }, function(response) {
        if(response && response.post_id){}
        else{}
    });
}

// <button >Share it!</button>





