var C# = 0;
var Ruby = 0;
var PHP= 0;
var CSS/Design = 0;

function countAnswers(q1, q2, q3, q4, q5){
  if (q1 == "yes") {
    ww++;
    jb++;
  } else {
    hp++;
    dt++;

  }
}

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
});
