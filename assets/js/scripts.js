// (function(){
//   "use strict";

var artistname = $('input[name="artist"]').val();
// var weathertype =$('input[type="weather"]').val();

$(".form-control").on("click", function(){
$.getJSON('http://api.bandsintown.com/Sheryl-Crow/.json?api_version=2.0&app_id=rhonda')
.done(success);

function success () {
  $('input-group-btn').append();

}
console.log("yeap");


});


var weather = $('input[name="babies"]').val();

$(".form-control").on("click", function(){
$.getJSON('http://placekitten.com/200/300')
// .done(success again);

function success () {
  $('input-group-btn').append();
}
console.log("humm");
});

// $.ajax({
//   Type: "GET",
//   url: 'http://api.bandsintown.com/artists/name.json'
// }).done(function (data) {
//   console.log(data.map(function (u) {
//     return u.login;
//   }));
// });

// });




















// });
