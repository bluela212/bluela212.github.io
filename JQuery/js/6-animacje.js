// funkcja document.ready() - wersia skrocona
$(function(){
    'use strict';

    // efekt hide i show
    $('p').hide(3000).show(3000);

    // efekt fadeOut i fadeIn
    $('h1').fadeOut(3000).fadeIn(3000);

    // efekt slideUp i slideDown
    $('h2').slideUp(3000).slideDown(3000);

    // funkcja zwrotna animacji - tzw.callback
    function koniec() {
        console.log('zakonczona pierwsza animacja. Zaraz startuje druga.');
        $('h3').animate({'font-size': '1em', 'margin-left': '0px'}, 2000)
    }

    // efekt animacji z funkcja zwrotna aniamacji
    $('h3').animate({'font-size': '3em', 'margin-left': '100px'}, 2000, koniec);
})