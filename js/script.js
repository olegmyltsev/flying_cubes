let clicks = 0





function click() {
    let randomLeft = Math.floor(Math.random() * 1200)
    let randomTop = Math.floor(Math.random() * 600)
    clicks++
    $(".lll").css("margin-left", randomLeft).css("margin-top", randomTop)

    if (clicks == 1) {
        $(".a").addClass("margin40").removeClass("margin10")
        $(".b").addClass("margin10").removeClass("margin20")
        $(".c").addClass("margin20").removeClass("margin30")
        $(".d").addClass("margin30").removeClass("margin40")
    }
    else if (clicks == 2) {
        $(".a").addClass("margin30").removeClass("margin40")
        $(".b").addClass("margin40").removeClass("margin10")
        $(".c").addClass("margin10").removeClass("margin20")
        $(".d").addClass("margin20").removeClass("margin30")
    }
    else if (clicks == 3) {
        $(".a").addClass("margin20").removeClass("margin30")
        $(".b").addClass("margin30").removeClass("margin40")
        $(".c").addClass("margin40").removeClass("margin10")
        $(".d").addClass("margin10").removeClass("margin20")
    }
    else if (clicks == 4) {
        $(".a").addClass("margin10").removeClass("margin20")
        $(".b").addClass("margin20").removeClass("margin30")
        $(".c").addClass("margin30").removeClass("margin40")
        $(".d").addClass("margin40").removeClass("margin10")
    }

    if (clicks > 3) {
        clicks = 0
    }
}

function run() { click() }


$("div").click(run)