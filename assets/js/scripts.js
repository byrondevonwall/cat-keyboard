$(function(){

  $('body').bind('keyup', function(e){
    $("div").css("opacity", "0");
  });
//meow01 keydown on q
$('body').bind('keydown', function(e) {
	if(e.keyCode==81){
    var meow01 = $(".meow01");
    var playMeow01 = meow01.find("audio")[0];
      playMeow01.play();
      $(".meow01").css("opacity", "1");
	};
  console.log(e.keyCode);
});

//meow02 keydown on w
$("body").bind('keydown', function(e){
  if(e.keyCode==87){
    var meow02 = $(".meow02");
    var playMeow02 = meow02.find("audio")[0];
    playMeow02.play();
    $(".meow02").css("opacity", "1")
  };
});

//meow03 keydown on e
$("body").bind('keydown', function(e){
  if(e.keyCode==69){
    var meow03 = $(".meow03");
    var playMeow03 = meow03.find("audio")[0];
    playMeow03.play();
    $(".meow03").css("opacity", "1")
  };
});

//meow04 keydown on r
$("body").bind('keydown', function(e){
  if(e.keyCode==82){
    var meow04 = $(".meow04");
    var playMeow04 = meow04.find("audio")[0];
    playMeow04.play();
    $(".meow04").css("opacity", "1")
  };
});

//meow05 keydown on t
$("body").bind('keydown', function(e){
  if(e.keyCode==84){
    var meow05 = $(".meow05");
    var playMeow05 = meow05.find("audio")[0];
    playMeow05.play();
    $(".meow05").css("opacity", "1")
  };
});

//meow06 keydown on a
$("body").bind('keydown', function(e){
  if(e.keyCode==65){
    var meow06 = $(".meow06");
    var playMeow06 = meow06.find("audio")[0];
    playMeow06.play();
    $(".meow06").css("opacity", "1")
  };
});

//meow07 keydown on s
$("body").bind('keydown', function(e){
  if(e.keyCode==83){
    var meow07 = $(".meow07");
    var playMeow07 = meow07.find("audio")[0];
    playMeow07.play();
    $(".meow07").css("opacity", "1")
  };
});

//meow08 keydown on d
$("body").bind('keydown', function(e){
  if(e.keyCode==68){
    var meow08 = $(".meow08");
    var playMeow08 = meow08.find("audio")[0];
    playMeow08.play();
    $(".meow08").css("opacity", "1")
  };
});

//meow09 keydown on f
$("body").bind('keydown', function(e){
  if(e.keyCode==70){
    var meow09 = $(".meow09");
    var playMeow09 = meow09.find("audio")[0];
    playMeow09.play();
    $(".meow09").css("opacity", "1")
  };
});

//meow10 keydown on g
$("body").bind('keydown', function(e){
  if(e.keyCode==71){
    var meow10 = $(".meow10");
    var playMeow10 = meow10.find("audio")[0];
    playMeow10.play();
    $(".meow10").css("opacity", "1")
  };
});

//meow11 keydown on z
$("body").bind('keydown', function(e){
  if(e.keyCode==90){
    var meow11 = $(".meow11");
    var playMeow11 = meow11.find("audio")[0];
    playMeow11.play();
    $(".meow11").css("opacity", "1")
  };
});

//purr1 keydown on x
$("body").bind('keydown', function(e){
  if(e.keyCode==88){
    var purr1 = $(".purr1");
    var playPurr1 = purr1.find("audio")[0];
    playPurr1.play();
    $(".purr1").css("opacity", "1")
  };
});

//purr2 keydown on c
$("body").bind('keydown', function(e){
  if(e.keyCode==67){
    var purr2 = $(".purr2");
    var playPurr2 = purr2.find("audio")[0];
    playPurr2.play();
    $(".purr2").css("opacity", "1")
  };
});

//purr3 keydown on v
$("body").bind('keydown', function(e){
  if(e.keyCode==86){
    var purr3 = $(".purr3");
    var playPurr3 = purr3.find("audio")[0];
    playPurr3.play();
    $(".purr3").css("opacity", "1")
  };
});

//hiss1 keydown on b
$("body").bind('keydown', function(e){
  if(e.keyCode==66){
    var hiss1 = $(".hiss1");
    var playHiss1 = hiss1.find("audio")[0];
    playHiss1.play();
    $(".hiss1").css("opacity", "1")
  };
});

//   //first meow
//   var code = e.keyCode || e.which;
// if(code == 81) { //Enter keycode
//   //Do something

// var meow01 = $(".meow01");
// var playMeow01 = meow01.find("audio")[0];
// meow01.hover(function(){
//   playMeow01.play();
// });
//
// var meow02 = $(".meow02");
// var playMeow02 = meow02.find("audio")[0];
// meow02.hover(function(){
//   playMeow02.play();
// });
//
// var meow03 = $(".meow03");
// var playMeow03 = meow03.find("audio")[0];
// meow03.hover(function(){
//   playMeow03.play();
// });
//
// var meow04 = $(".meow04");
// var playMeow04 = meow04.find("audio")[0];
// meow04.hover(function(){
//   playMeow04.play();
// });
//
// var meow05 = $(".meow05");
// var playMeow05 = meow05.find("audio")[0];
// meow05.hover(function(){
//   playMeow05.play();
// });
//
// var meow06 = $(".meow06");
// var playMeow06 = meow06.find("audio")[0];
// meow06.hover(function(){
//   playMeow06.play();
// });
//
// var meow07 = $(".meow07");
// var playMeow07 = meow07.find("audio")[0];
// meow07.hover(function(){
//   playMeow07.play();
// });
//
// var meow08 = $(".meow08");
// var playMeow08 = meow08.find("audio")[0];
// meow08.hover(function(){
//   playMeow08.play();
// });
//
// var meow09 = $(".meow09");
// var playMeow09 = meow09.find("audio")[0];
// meow09.hover(function(){
//   playMeow09.play();
// });
//
// var meow10 = $(".meow10");
// var playMeow10 = meow10.find("audio")[0];
// meow10.hover(function(){
//   playMeow10.play();
// });
//
// var meow11 = $(".meow11");
// var playMeow11 = meow11.find("audio")[0];
// meow11.hover(function(){
//   playMeow11.play();
// });
//
// var purr1 = $(".purr1");
// var playPurr1 = purr1.find("audio")[0];
// purr1.hover(function(){
//   playPurr1.play();
// });
//
// var purr2 = $(".purr2");
// var playPurr2 = purr2.find("audio")[0];
// purr2.hover(function(){
//   playPurr2.play();
// });
//
// var purr3 = $(".purr3");
// var playPurr3 = purr3.find("audio")[0];
// purr3.hover(function(){
//   playPurr3.play();
// });
//
// var hiss1 = $(".hiss1");
// var playHiss1 = hiss1.find("audio")[0];
// hiss1.hover(function(){
//   playHiss1.play();
// });
//

});
