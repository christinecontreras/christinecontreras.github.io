// gallery 1 java
    $('#carousel-example-generic').on('slid.bs.carousel', function () {
        $(".item.active:nth-child(" + ($(".carousel-inner .item").length -1) + ") + .item").insertBefore($(".item:first-child"));
        $(".item.active:last-child").insertBefore($(".item:first-child"));
    });   
