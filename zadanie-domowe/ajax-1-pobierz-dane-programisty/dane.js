'use strick'

$(document).ready(function(){
    console.log("dziala")
    let button = $("#button");
    button.click(function(){
       $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (emp) {
           $('#dane-programisty').html('<p> Imię: ' + emp.imie + '</p>');
           $('#dane-programisty').append('<p> Nazwisko: ' + emp.nazwisko + '</p>');
           $('#dane-programisty').append('<p> Zawód: ' + emp.zawod + '</p>');
           $('#dane-programisty').append('<p> Firma: ' + emp.firma + '</p>');
        });
   })
});
