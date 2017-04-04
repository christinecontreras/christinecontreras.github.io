$(document).ready(function () {

  function areaSize() {
    var size = $('input#q1').val();
    if (size) {
      size = parseInt(size);
    } else {
      size = 0;
    }

    return size;
  }

  function waterCalc() {
    var water = $('input#q2').val();
    if (water) {
      water = parseInt(water);
    } else {
      water = 0;
    }

    //water = ((areaSize * gallons * number of times per month) /100) * cost/gal * 12(months)
    water = (((areaSize() * 0.623 * water) / 100) * 0.1176 * 12);
    return water;
  }

  function fertilizerCalc() {
    var fertilizer = $('input#q3').val();
    if (fertilizer) {
      fertilizer = parseInt(fertilizer);
    } else {
      fertilizer = 0;
    }
    //(area size * cost of fertilizer per sqft) * times per year
    fertilizer = (areaSize() * 0.20) * fertilizer;
    return fertilizer;
  }

  function pesticidesCalc() {
    var pesticides = $('input#q4').val();
    if (pesticides) {
      pesticides = parseInt(pesticides);
    } else {
      pesticides = 0;
    }

    //(area size * cost of fertilizer per sqft) * times per year
    pesticides = (areaSize() * 0.10) * pesticides;
    return pesticides;
  }

  function irrigationCalc() {
    var irrigation = ($('input#q5').val()).toLowerCase();
    if (irrigation == 'yes') {
      irrigation = 150;
    } else {
      irrigation = 0;
    }
    return irrigation;
  }

  function gardenerCalc() {
    var gardener = $('input#q6').val();
    if (gardener) {
      gardener = parseInt(gardener);
    } else {
      gardener = 0;
    }

    gardener = gardener * 12;
    return gardener;
  }

  function timeCalc() {
    var time = $('input#q7').val();
    if (time) {
      time = parseInt(time);
    } else {
      time = 0;
    }

    //(hrs per month spent on maintenance * $15/hr) * 12 months
    time = (time * 15) * 12;
    return time;
  }

  function lawnCostPerYear() {
    var sum = [waterCalc(), fertilizerCalc(), pesticidesCalc(), irrigationCalc(), gardenerCalc(), timeCalc()].reduce(
    function (total, num) { return total + num; }, 0);

    var value = sum.toFixed(2);

    return value;

  }

  function turfCalc() {
    var turf = (areaSize() * 13) + (areaSize() * 0.37);
    turf = turf.toFixed(2);
    return turf;
  }

  function savingsCalc() {
    var savings = turfCalc() / lawnCostPerYear();
    savings = savings.toFixed(1);
    return savings;
  }

  function alertMessage() {
    $('#calc-alert').addClass('alert-danger');
  }

  function message() {
      $(".title:nth-of-type(1) span").text(lawnCostPerYear());
      $(".title:nth-of-type(2) span").text(turfCalc());
      $(".savings span").text(savingsCalc() + ' years');
    }

    $("input#q1").blur(function() {
        if ($(this).val() != '') {
          $('input#q1').removeClass("invalid");
      } else {
        $('div#q1').append("<p>*input invalid</p>");
      }
    });

    $("input#q1").focus(function() {
        $("div#q1 p").remove();
    });

    $("input#q2").blur(function() {
        if ($(this).val() != '') {
          $('input#q2').removeClass("invalid");
        } else {
          console.log('testing');
        $('div#q2').append("<p>*input invalid</p>");
        }
    });

    $("input#q2").focus(function() {
        $("div#q2 p").remove();
    });

    $("input#q3").blur(function() {
        if ($(this).val() != '') {
          $('input#q3').removeClass("invalid");
        }else {
        $('div#q3').append("<p>*input invalid</p>");
        }
    });

    $("input#q3").focus(function() {
        $("div#q3 p").remove();
    });

    $("input#q4").blur(function() {
        if ($(this).val() != '') {
          $('input#q4').removeClass("invalid");
        }else {
        $('div#q4').append("<p>*input invalid</p>");
        }
    });

    $("input#q4").focus(function() {
        $("div#q4 p").remove();
    });

    $("input#q5").blur(function() {
        if ($(this).val() != '' || isNaN($(this).val())) {
          $('input#q5').removeClass("invalid");
        }else {
        $('div#q5').append("<p>*input invalid</p>");
        }
    });

    $("input#q5").focus(function() {
        $("div#q5 p").remove();
    });

    $("input#q6").blur(function() {
        if ($(this).val() != '') {
          $('input#q6').removeClass("invalid");
      }else {
      $('div#q6').append("<p>*input invalid</p>");
      }
    });

    $("input#q6").focus(function() {
        $("div#q6 p").remove();
    });

    $("input#q7").blur(function() {
        if ($(this).val() != '') {
            $('input#q7').removeClass("invalid");
          }else {
          $('div#q7').append("<p>*input invalid</p>");
          }
    });

    $("input#q7").focus(function() {
        $("div#q7 p").remove();
    });

    $("#next").click(function(event){
	     var errorFree=true,
    	 element=$('input'),
    	 invalid = element.hasClass("invalid");

    	     if(invalid){
             alertMessage();
             $('#calc-alert').html("<p>Please fill out all questions</p>");

             errorFree = false;
           }
          if (!errorFree){
    	        event.preventDefault();
            }
            else {
              $('#calc-alert').css( "visibility", "hidden" );
              $('.calculator-form').hide();
              $('#finalMessage').css("display", "flex");
    	         message();
            }
        });

    // $('#next').click(function() {
    //   alerts();
    //   message();
    //
    // });
//ready function closing
});
