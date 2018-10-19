var c=0;
var r=0;
var p=0;
var j=0;

function countAnswers(qq1, qq2, qq3, qq4,){
  if (q1 == "yes") {
    ww++;
    jb++;
  } else {
    hp++;
    dt++;

  }
}

$(document).ready(function() {
$('#formOne').submit(function(event) {
  event.preventDefault();
  var name = $("#nme").val();
  console.log(name);
  var qq1 = $('#q1').val();
  var qq2 = $('#q2').val();
  var qq3 = $('#q3').val();
  var qq4 = $('#q4').val();
})

  // code for next buttons
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

});
