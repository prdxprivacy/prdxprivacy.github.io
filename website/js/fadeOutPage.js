// $(document).ready(function() {

// $(document).on("click", "a", function () {

//     // get the href attribute
//     var newUrl = $(this).attr("href");

//     // veryfy if the new url exists or is a hash
//     if (!newUrl || newUrl[0] === "#") {
//         // set that hash
//         location.hash = newUrl;
//         return;
//     }

    
//     // now, fadeout the html (whole page)
//     $("html").fadeOut(0000,function () {
//         // when the animation is complete, set the new location
//         $("html".delay(3000));
//         location = newUrl;
//     });

//     // prevent the default browser behavior.
//     return false;
// });

// });{
window.onload = function(){
$('.slowfade').click(function (e) {
  var t    = this,

//       //store the href for the clicked element
       href = t.href;
       e.preventDefault();

       $("body").addClass("fadeOutt");
       
       setTimeout(function (){
             window.location = href;
           }, 500);
});
}

// var t    = this,

//       //store the href for the clicked element
//       href = t.href;
//       
//   //prevent the default behavior
//   e.preventDefault();
  
//   //apply the fade out transition class to the parent ul element
//   $(t).parent().parent().addClass('fadeOutt');

//   //setTimeout to wait for fade out animation to complete before changing pages
//   setTimeout(function (){
//     window.location = href;
//   }, 2000);