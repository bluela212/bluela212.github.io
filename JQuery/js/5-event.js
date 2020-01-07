// function klik() {
//     alert('niewiem');
// }
// var btnKlik = document.getElementById('klik');
// // console.log(btnKlik);
// btnKlik.addEventListener('click', klik);


// funkcja document.ready() - wersia skrocona
// $(function(){
//     'use strict';

//     //pojedyncze zdazenie na paragrafie
//     $('#klik').click(function (){
//         $(this).css('color', 'orange');
//     })

// })

// grupa zdarzen na naglowku
$('h1').on(
    {
        'mouseenter': function () {
            $(this).css("color", "pink");
        },

        'mouseleave': function () {
            $(this).css("color", "green");
        },

        'click': function () {
            $(this).css("color", "red");
        },
    }
);