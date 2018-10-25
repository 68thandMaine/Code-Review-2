function countAnswers(qq1, qq2, qq3, qq4) {
  var c = 0;
  var r = 0;
  var p = 0;
  var j = 0;



  // question 1 logic
  if (qq1 == "1") {
    j++;
    p++;
  } else if (qq1 === "2") {
    c++;
    r++;
  } else if (qq1 === "3") {
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
  if (qq3 == "yes") {
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
  var answersARR = [c, r, p, j];
  console.log(answersARR)
  return answersARR;
};


// front end
$(document).ready(function() {

  function determineWinner(array) {
    //This function will take the results variable containing the array of counted answers and...
    var c = array[0]
    var r = array[1];
    var p = array[2];
    var j = array[3];
    if (c >= r && c >= p && c >= j) {
      //if c is the higest result then display resultC
      $("#resultC").show();
    } else if (r >= c && r >= p && r >= j) {
      //if
      $("#resultr").show()
    } else if (p >= c && p >= r && p >= j) {
      //if
      $("#resultj").show()
    } else if (j >= c && j >= p && j >= r) {
      //if
      $("#resultj").show()
    }
    //output the language card that should be deisplayed based off of the array results
  };



  $("#form1").submit(function(event) {
    event.preventDefault();
    var qq1 = $("#q1").val();
    var qq2 = $("#q2").val();
    var qq3 = $("#q3").val();
    var qq4 = $("#q4").val();
    var results = countAnswers(qq1, qq2, qq3, qq4);
    determineWinner(results)
    console.log(results)

  });

  $('button').click(function() {
    if (this.id == 'begin') {
      $('#greeting').hide();
      $('#formOne').show();
    }
  });
  $('button').click(function() {
    if (this.id == 'end') {
      $("#pt1").hide();
    }
  });







});


// answersARR.sort();
// var topResult = answersARR[0];
// console.log(name);
