// var C# = 0
// var Ruby = 0
// var PHP= 0
// var CSS/Design = 0



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
      $(".work").hide();
      // $('#work').show();
    }
});
});
