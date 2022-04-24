$(document).ready(() => {
    let slider = $('#slider');

    let listSider = [{
            id: 1,
            alt: 'slider_1',
            scr: "images/slider-1.jpg",
        },
        {
            id: 2,
            alt: 'slider_2',
            scr: "images/slider-2.jpg",
        },
        {
            id: 3,
            alt: 'slider_3',
            scr: "images/slider-3.jpg",
        },
    ]
    if (slider) {
        slider.html('<li><img src="images/slider-2.jpg" alt="" /></li>');
    }
})