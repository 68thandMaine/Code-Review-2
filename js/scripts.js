var c=0;
var r=0;
var p=0;
var j=0;

console.log(j);
function countAnswers(qq1, qq2, qq3, qq4,){
// question 1 logic
  if (qq1 == "1") {
    j++;
    p++;
  } else if (qq1 == "2") {
    c++;
    r++;
  } else if (qq1 == "3") {
    c++;
    r++;
    j++;
    p++;
  }
// question 2 logic
  if (qq2 == "1") {
    p++;
    r++;
  } else if (qq2 == "2") {
    c++;
    p++;
    j++;
  } else if (qq2 == "3") {
    c++;
  } else if (qq2 == "4") {
    j++;
    r++;
  }
// question 3 logic
  if (qq3 =="yes") {
    r++;
    p++;
  } else {
    c++;
    j++;
    p++;
  }
// question 4 logic Below
  if (qq4 == "a") {
    j++;
    r++;
  } else if (qq4 == "b") {
    c++;
    p++;
  } else if (qq4 == "c") {
    r++;
    j++;
    p++;
  } else if (qq4 == "d") {
    j++;
  }
}

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();
    var name = $("#nme").val();
    var qq1 = $('#q1').val();
    var qq2 = $('#q2').val();
    var qq3 = $('#q3').val();
    var qq4 = $('#q4').val();
    countAnswers(q1, q2, q3, q4);
    var answersArr = [c r, p, j];
    answers.Arr.sort();
    var topResult = answersArr[0];
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
