$(document).ready(function () {
    var currentFloor = 2;
    var FloorPath=$(".home-img path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    FloorPath.on("mouseover", function(){
        FloorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });
    counterUp.on("click", function(){
        if (currentFloor <= 17){
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits:2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
            FloorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    counterDown.on("click", function(){
        if (currentFloor > 2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits:2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
            FloorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
});