$(document).ready(function () {
    var currentFloor = 2;
    var currentFlat = 40;
    var FloorPath=$(".home-img path");
    var FlatsPath=$(".flats path");
    var FlatsNum=$(".flat-list a");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");


    



    FlatsNum.on("mouseover", function(){
        currentFlat = $(this).attr('num');
        FlatsNum.removeClass("flat-link-active");
        FlatsPath.removeClass("current-flat");
        $(`[data-flats=${currentFlat}]`).toggleClass("current-flat");
    });

    FlatsPath.on("mouseover", function(){
        currentFlat = $(this).attr('data-flats');
        FlatsPath.removeClass("current-flat");
        FlatsNum.removeClass("flat-link-active");
        $(`[num=${currentFlat}]`).toggleClass("flat-link-active");
    });

    FlatsPath.on("mouseout", function(){
        FlatsPath.removeClass("current-flat");
        FlatsNum.removeClass("flat-link-active");
    });

    FlatsNum.on("mouseout", function(){
        FlatsPath.removeClass("current-flat");
        FlatsNum.removeClass("flat-link-active");
    });

    

    FloorPath.on("mouseover", function(){
        FloorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });

    viewFlatsButton.on("click", toggleModal);
    FloorPath.on('click', toggleModal);
    modalCloseButton.on("click", toggleModal);

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
    function toggleModal() {
            modal.toggleClass("is-open");
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits:2, useGroupping: false});
            $(".modal-counter").text(usCurrentFloor);

            var FlatListNum = currentFloor;
            FlatListNum = FlatListNum * 10;
            $(".flat-number-1").text(FlatListNum);
            $(".flat-number-2").text(FlatListNum + 1);
            $(".flat-number-3").text(FlatListNum + 2);
            $(".flat-number-4").text(FlatListNum + 3);
            $(".flat-number-5").text(FlatListNum + 4);
            $(".flat-number-6").text(FlatListNum + 5);
            $(".flat-number-7").text(FlatListNum + 6);
            $(".flat-number-8").text(FlatListNum + 7);
            $(".flat-number-9").text(FlatListNum + 8);
            $(".flat-number-10").text(FlatListNum + 9);
    }

   
        
        
    
});