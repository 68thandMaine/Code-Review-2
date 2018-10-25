
function countAnswers(qq1, qq2, qq3, qq) {
  var c= 0;
  var r= 0;
  var p= 0;
  var j=  ;
  var answersARR = [c, r, p, j];
  var topResult = answersArr.sort();


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
  return topResult
  console.log(topResult)
};


$(document).ready(function() {

  $("#form1").submit(function(event){
    event.preventDefault();
    var qq1 =$("#q1").val();
    var qq2 =$("#q2").val();
    var qq3 =$("#q3").val();
    var qq4 =$("#q4").val();
    var results = countAnswers(qq1,qq2,qq3,qq4);
    console.log(results)
  });

    $('button').click(function(){
      if(this.id =='begin'){
        $('#greeting').hide();
        $('#formOne').show();
      }
    });
    $('button').click(function(){
      if (this.id =='end') {
        $("#pt1").hide();
      }
    });







  });


  // answersARR.sort();
  // var topResult = answersARR[0];
  // console.log(name);
