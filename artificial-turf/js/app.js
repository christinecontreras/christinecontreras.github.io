$(document).ready(function() {

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
            function(total, num) {
                return total + num;
            }, 0);

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

    //final message
    function message() {
        $(".title:nth-of-type(1) span").text(lawnCostPerYear());
        $(".title:nth-of-type(2) span").text(turfCalc());
        $(".savings span").text(savingsCalc() + ' years');
    }

        $("input#q5").blur(function() {
            if ($(this).val() != '') {
                $("input#q5").removeClass("invalid");
            } else {
                $("div#q5").append("<p class='error'>*input invalid</p>");
            }
        });

        $("input#q5").focus(function() {
            $("div#q5 p").remove();
        });

    function numInput(id) {
        $("input" + id).blur(function() {
            var inputNumber = parseInt($("input" + id).val());

            if ($(this).val() == '' || isNaN(inputNumber)) {
                console.log(inputNumber);
                $("div" + id).append("<p class='error'>*input invalid</p>");
            } else {
                $("input" + id).removeClass("invalid");
            }
        });
    }

    //focus in on an invalid input
    function inputFocus(id) {
        $("input" + id).focus(function() {
            $("div" + id + " p").remove();
        });
    }

    var num = ['#q1', '#q2', '#q3', '#q4', '#q6', '#q7'],
        length = num.length;
    for (var i = 0; i < length; i++) {
            numInput(num[i]);
            inputFocus(num[i]);
    }

    $("#next").click(function(event) {
        var errorFree = true,
            element = $('input'),
            invalid = element.hasClass('invalid');

        if (invalid) {
            $('.invalid').parents('.form-group').append("<p class='error'>*input invalid</p>");
            $('#calc-alert').addClass('alert-danger');
            $('#calc-alert').html("<p>Please fill out all highlighted questions</p>");
            errorFree = false;
        }

        if (!errorFree) {
            event.preventDefault();
        } else {
            $('#calc-alert').css("visibility", "hidden");
            $('.calculator-form').hide();
            $('#finalMessage').css("display", "flex");
            message();
        }
    });

});
