var c=0;
var r=0;
var p=0;
var j=0;

function countAnswers(qq1, qq2, qq3, qq4,){
// question 1 logic
  if (q1 == "1") {
    j++;
    p++;
  } else if (q1 == "2") {
    c++;
    r++;
  } else if (q1 == "3") {
    c++;
    r++;
    j++;
    p++;
  }
// question 2 logic
  if (q2 == "1") {
    p++;
    r++;
  } else if (q2 == "2") {
    c++;
    p++;
    j++;
  } else if (q2 == "3") {
    c++;
  } else if (q2 == "4") {
    j++;
    r++;
  }
// question 3 logic
  if (q3 =="yes") {
    r++;
    p++;
  } else {
    c++;
    j++;
    p++;
  }
// question 4 logic Below
  if (q4 == "a") {
    j++;
    r++;
  } else if (q4 == "b") {
    c++;
    p++;
  } else if (q4 == "c") {
    r++;
    j++;
    p++;
  } else if (q4 == "d") {
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
})

console.log(j);
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
