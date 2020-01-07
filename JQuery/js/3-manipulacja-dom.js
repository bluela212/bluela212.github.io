jQuery(document).ready(function () {

    //  pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);

    // Dodawanie tekstu
    $(".paragraf").text("tekst");

    // dodawanie HTML
    $(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> HTML");

    // dodawania tresci na koncu selektora
    $(".paragrafnext").append("Tresc na koncu selektora");

    // dodawania tresci za selektorem
    $(".paragrafnext").after("Tresc na koncu selektora");

    //usuwanie elem i jego zawartosci 
    $('strong').remove();

    //usuwanie TYLKO zawartosci 
    $('strong').empty();

    // dodawanie css
    $(".paragrafnext").css({"font-size": '3em', 'color': 'red'});
    $(".paragrafnext").css('backgroundColor', 'green');

    // dodawanie klasy
    $('h1').addClass('blue');

    // dodawanie atrybutu
    $('h1').attr('imie', 'Anna');

    let niewiem = $('#niewiem');
    console.log(niewiem.val());

    niewiem.val('Karolina');

    let element = $('#element');
    console.log(element);

    element.text('Marta');
})
