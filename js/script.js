const colors = ["rgb(0, 145, 255)", "rgb(255, 0, 0)", "rgb(30, 255, 0)", "rgb(0, 255, 242)"]
const heightCheck = $(window).height();
const widthCheck = $(window).width();

let clicks = 0
let countClicks = 0
let height = 0
let width = 0







if (widthCheck < 500) {
    height = heightCheck - 150
    width = widthCheck - 150

}
else {
    height = heightCheck - 300
    width = widthCheck - 300
}

function colorChange() {
    let randomBlue = Math.floor(Math.random() * 255)
    let randomRed = Math.floor(Math.random() * 255)
    let randomGreen = Math.floor(Math.random() * 255)
    $(".a").css("background", "rgb(" + randomRed + "," + randomBlue + "," + randomGreen + ")")
    $(".b").css("background", "rgb(" + randomGreen + "," + randomRed + "," + randomBlue + ")")
    $(".c").css("background", "rgb(" + randomBlue + "," + randomGreen + "," + randomRed + ")")
    $(".d").css("background", "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")")
}




function click() {
    countClicks++
    $(".clicks").text(countClicks)
    let randomLeft = Math.floor(Math.random() * width)
    let randomTop = Math.floor(Math.random() * height)
    clicks++
    $(".lll").css("margin-left", randomLeft).css("margin-top", randomTop)

    $(".a").addClass("dispersion1").removeClass("margin10 margin20 margin30 margin40")
    $(".b").addClass("dispersion2").removeClass("margin10 margin20 margin30 margin40")
    $(".c").addClass("dispersion3").removeClass("margin10 margin20 margin30 margin40")
    $(".d").addClass("dispersion4").removeClass("margin10 margin20 margin30 margin40")

    function mix() {
        if (clicks == 1) {
            $(".a").addClass("margin40")
            $(".b").addClass("margin10")
            $(".c").addClass("margin20")
            $(".d").addClass("margin30")
        }
        else if (clicks == 2) {
            $(".a").addClass("margin30")
            $(".b").addClass("margin40")
            $(".c").addClass("margin10")
            $(".d").addClass("margin20")
        }
        else if (clicks == 3) {
            $(".a").addClass("margin20")
            $(".b").addClass("margin30")
            $(".c").addClass("margin40")
            $(".d").addClass("margin10")
        }
        else {
            $(".a").addClass("margin10")
            $(".b").addClass("margin20")
            $(".c").addClass("margin30")
            $(".d").addClass("margin40")
        }
    }

    setTimeout(mix, 500)
    if (clicks > 3) {
        clicks = 0
    }
}

setInterval(colorChange, 1000)
function runClick() { click() }

$("div").click(runClick)