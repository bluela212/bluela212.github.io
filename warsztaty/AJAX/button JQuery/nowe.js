'use strick'

$(document).ready(function(){
    console.log("dziala")
    let button = $("#button");
    button.click(function(){
       $.getJSON('https://jsonplaceholder.typicode.com/users/1', function (emp) {
           $('#display').html('<p> ID: ' + emp.id + '</p>');
           $('#display').append('<p> Nazwa Uzytkownika: ' + emp.name + '</p>');
           $('#display').append('<p> Website: ' + emp.website + '</p>');
        });
   })
});

//    var items = [];
        //    $each(data, function (key, val) {
        //        items.push("<li id='" + key + "'>" + val + "</li>");
        //    });

        //    $("ul/>", {
        //        "class": "my-new-list",
        //        html: items.join("")
        //    }).appendTo("body");