function cloudLeft() {
    $(".top-cloud").animate({left: "-=500"}, 10000, "swing", cloudRight);
}
function cloudRight() {
    $(".top-cloud").animate({left: "+=500"}, 10000, "swing", cloudLeft);
}

function cloud2Left() {
    $(".bottom-cloud").animate({left: "-=500"}, 10000, "swing", cloud2Right);
}
function cloud2Right() {
    $(".bottom-cloud").animate({left: "+=500"}, 10000, "swing", cloud2Left);
}

cloudRight();
cloud2Left();
