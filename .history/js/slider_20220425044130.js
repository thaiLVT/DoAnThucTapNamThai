$(document).ready(() => {
    let slider = $('#slider');

    let listSider = [{
            id: 1,
            alt: 'slider_1',
            src: "images/slider-1.jpg",
        },
        {
            id: 2,
            alt: 'slider_2',
            src: "images/slider-2.jpg",
        },
        {
            id: 3,
            alt: 'slider_3',
            src: "images/slider-3.jpg",
        },
    ]
    let current = 0;
    if (slider) {
        console.log(listSider[0].src)
        slider.html(`<li><img src="${listSider[current].src}" alt="" /></li>`);
    }

})