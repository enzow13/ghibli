/* Concepts Slider */

let count = 1
document.getElementById('radio1').checked = true;
setInterval( function() {
    changeImageSlider();
}, 8000)


function changeImageSlider() {
    count++
    if ( count >= 4 ) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

/* Concepts Slider */