$(document).ready(function(){
  // alert('Hello!');
  $("#hide button").click(function(){
    console.log("hide");
    $("#hide p").hide();
  });
  $("#show button").click(function(){
    $("#show p").show();
  });
  $("#toggle button").click(function(){
    $("#toggle p").toggle(1800);
  })
  $("#slidedown button").click(function(){
      $( "#slidedown p" ).slideDown( "slow" );
  });
  $("#fadeIn button").click(function(){
      $( "#fadeIn p" ).fadeIn( "slow" );
  });
  $("#fadeOut button").click(function(){
      $( "#fadeOut p" ).fadeOut( "slow" );
  });
  $("#addClass button").click(function(){
    $("#addClass p").addClass("red");
  });
  $("#before").click(function(){
    $("#add p").before("Before");
  })
  $("#after").click(function(){
    $("#add p").after("After");
  })
  $("#append").click(function(){
    $("#add p").append("Append");
  })
  $("#html").click(function(){
    $("#add p").html("<h2 class='red'>HTML</h2>");
  })
  $("#attr").click(function(){
    $("#attr_val p").attr("class","red");
  })
  $("#val").click(function(){
    // console.log("red");
    $("#attr_val p").text("red");
  })
  $("#setdata").click(function(){
    $("#attr_val p").data("name", "You get this!");
  })
  $("#getdata").click(function(){
    console.log($("#attr_val p").data("name"));
  })
});
