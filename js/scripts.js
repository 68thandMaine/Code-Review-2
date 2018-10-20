
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
    var qq1 =$("#q1").val();
    console.log(qq1);
  });
  $("#formThree").submit(function(event){
    event.preventDefault();
    var qq2 =$("#q2").val();
    console.log(qq2);
  });
  $("#formFour").submit(function(event){
    event.preventDefault();
    var qq3 =$("#q3").val();
    console.log(qq3);
  });
  $("#formFive").submit(function(event){
    event.preventDefault();
    var qq4 =$("#q4").val();
    console.log(qq4);
  });

});
