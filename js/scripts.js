
$(document).ready(function() {
  $('button').click(function(){

    if(this.id =='begin'){
      $('#greeting').hide();
      $('#ID').show();
    }

    if(this.id == 'continue'){
      $('#ID').hide();
      $('#brain').show();
    }

    if(this.id == 'go_on'){
      $('#brain').hide();
      $('#work').show();
    }

    if(this.id == 'next1'){
      $("#work").hide();
      $("#prsntpe").show();
    }

    if(this.id == 'next2'){
      $('#prsntpe').hide();
      $('#why').show();
    }

    if(this.id == 'next3') {
      $('#why').hide();
      $('#result').fadeIn();
    }
});
$("#formOne").submit(function(event){
  event.preventDefault();
  var name =$("#nme").val();
  console.log(name);
});

$("#formTwo").submit(function(event){
  event.preventDefault();
  var qq1 =$("#nme").val();
  console.log(name);
});
