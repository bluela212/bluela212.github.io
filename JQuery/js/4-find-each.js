// funkcja document.ready() - wersia skrocona
$(function(){
    'use strict'

    // wybieranie elem z kolekcji za pomoca metody eq()
    // console.log($('body').find('p'));
    $('body').find('p').eq(2).css({'color': 'green'});

    // petla each dodajaca do paragrafow klase z kolejnym numerem
    $('p').each(function(index){

        $(this).addClass('paragraf-' + index);
        console.log($(this));
    })
})