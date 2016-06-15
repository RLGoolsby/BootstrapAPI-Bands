
//  THIS WAS MY SECOND PLAN--MY INTENTION WAS TO CONNECT BAND NAMES AND LYRICS TO BABY IMAGES AND NAMES
//  TO THE BANDS/SONGS THAT CONTAIN THE WORD BABY IN THEM.     THIS ALL PRESENTED ITSELF TO  AS
//  I CONTINUED TO TRY TO FIND A GOOD API AND TRY TO TIE IT ALL TOGETHER.   ALAS.  I NEED MORE TIME
//  TO REALLY MAKE IT WORK.


//////////////////////////////////////////////////////////////////////////////////
// (function(){
//   "use strict";
////////   API CONNNECT FOR BAND NAMES                      ////////////////////
var artistname = $('input[name="artist"]').val(); + artist + "/" + baby + "/" + //"type=track&limit=10",  extra ideas to remember from classmates
// var weathertype =$('input[type="weather"]').val();

$(".form-control").on("click", function(){
$.getJSON('http://api.bandsintown.com/Fleetwood-Mac/.json?api_version=2.0&app_id=rhonda' + artist + "/" + baby + "/" + //"type=track&limit=10",)  extra ideas
.done(success);


function success () {
  $('input-group-btn').append();

}
console.log("yeap");
});

////////////////////////////////////////////////////////////////////////////////
////////    TRYING TO CREATE AN API CALL FOR BABY NAMES     ////////////////////
var weather = $('input[name="babies"]').val();

$(".form-control").on("click", function(){
$.getJSON('http://www.behindthename.com/api/lookup.php')
// .done(success again);

function success () {
  $('input-group-btn').append();
}
console.log("humm");
});
/////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
//  STARTED IN THIS DIRECTION  AND STOPPED  TO PURSUE  THE GET.JSON WAY   /////////
// $.ajax({
//   Type: "GET",
//   url: 'http://api.bandsintown.com/artists/name.json'
// }).done(function (data) {
//   console.log(data.map(function (u) {
//     return u.login;
//   }));
// });

// });
/////////////////////////////////////////////////////////////////////////////////


















// });
