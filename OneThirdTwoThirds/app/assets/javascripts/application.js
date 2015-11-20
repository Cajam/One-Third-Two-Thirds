// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//

// Attempt to get table rows to highlight a color when checkbox is checked for that row. Had trouble getting each checkbox to target it's own row.

// $(document).ready(function(){
//   function checkboxes(){
//     $('#complete').click(function(){
//         if($(this).prop("checked") == true){
//             $(this).parent("tr").css({"background-color": "lightgreen"});
//         }
//         else if($(this).prop("checked") == false){
//             var thisRow = $(this).closest("tr");
//             thisRow.toggleClass("completed");
//         }
//     });
//     $('#incomplete').click(function(){
//         if($(this).prop("checked") == true){
//             var thisRow = $(this).closest("tr");
//             thisRow.toggleClass("incompleted");
//         }
//         else if($(this).prop("checked") == false){
//             var thisRow = $(this).closest("tr");
//             thisRow.toggleClass("incompleted");
//         }
//     });
//   }
// });

$(document).ready(function(){
    $( "#hideButton" ).click(function() {
    $('.createdAt, .createdAtHeader').toggle("slow", function(){

    });
  });
});

$(document).ready(function(){
    $( "#hideTimer" ).click(function() {
    $('.sidebar').toggle("slow", function(){

    });
  });
});
