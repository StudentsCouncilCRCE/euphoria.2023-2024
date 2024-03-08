$(document).ready(function () {
    $("#btn_click").on("click", function () {
        $(".mirage-h1 span").addClass("mirage_ghost").delay(1000).queue(function () {
            $(".mirage-line").addClass("mirage_gone");
            $(".mirage-author").addClass("mirage_gone");
            $(".mirage-copy").addClass("mirage_gone");
            $(".mirage-button").addClass("mirage_gone").delay(500).queue(function () {
                $(".mirage-info").addClass("mirage_white");
                $(".mirage").addClass("mirage_shrink").delay(1000).queue(function () {
                    $(".scene-button").css("display", "none");
                    $(".scene-spinner").css("display", "flex").delay(4500).queue(function () {
                        $(".scene-spinner").css("display", "none");
                        $(".scene-torus").css("display", "flex").delay(9000).queue(function () {
                            $(".scene-torus").css("display", "none");
                            $(".scene-hole").css("display", "flex").delay(6500).queue(function () {
                                $(".scene-hole").css("display", "none");
                                $(".scene-polygon").css("display", "flex");
                            })
                        })
                    })
                });
            });
        });
    });
});