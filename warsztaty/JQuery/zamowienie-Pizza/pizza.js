$(function () {
    let formPizzaOrder = $('#pizza-order');
    let firstName = $('#first-name');
    let lastName = $('#last-name');
    let street = $('#street');
    let streetNo = $('#street-no');
    let postCode = $('#post-code');
    let city = $('#city');

    let pizza = $('#pizza');
    let price = $('#price');

    let tomatoSouse = $('#tomato-souse');
    let garlicSouse = $('#garlic-souse');

    let agree = $('#agree');
    let errors = $('#errors');

    // console.log(formPizzaOrder, firstName, lastName, street, streetNo, postCode, city, pizza, price, tomatoSouse, garlicSouse, agree, errors);

    let priceTable = [
        { id: 1, price: 29 },
        { id: 2, price: 32 },
        { id: 3, price: 41 },
        { id: 4, price: 39 },
        { id: 5, price: 36 },
    ];

    pizza.change(function () {
        let pizzaPrice = 0;

        let pizzaType = $(this).val();

        if (pizzaType == 0) {
            price.text("0 pln");
            return;
        }

        priceTable.forEach(function (element) {
            if (element.id == pizzaType) {
                pizzaPrice = element.price;
                price.text(pizzaPrice + " pln");

                // console.log(pizzaPrice + " pln");
            }
        });
        // console.log(pizzaType);
    });

    formPizzaOrder.submit(function () {
        errors.empty();

        let errorsArray = [];

        if ($.trim(firstName.val()) == "") {
            errorsArray.push("<li>" + "Uzupewni pole: Imie")
            // console.log("uzupewni pole: Imie");
            // let liError = "<li>" + "uzupewni pole: Imie";
            // errors.append(liError);
        };

        if ($.trim(lastName.val()) == "") {
            errorsArray.push("<li>" + "Uzupewni pole: Nazwisko")
            // console.log("uzupewni pole: Imie");
            // let liError = "<li>" + "uzupewni pole: Nazwisko";
            // errors.append(liError);
        };

        if ($.trim(street.val()) == "") {
            errorsArray.push("<li>" + "Uzupewni pole: Ulica")
            // console.log("uzupewni pole: Imie");
            // let liError = "<li>" + "uzupewni pole: Ulica";
            // errors.append(liError);
        };

        if ($.trim(streetNo.val()) == "") {
            errorsArray.push("<li>" + "Uzupewni pole: Numer");
        };

        if ($.trim(postCode.val()) == "") {
            errorsArray.push("<li>" + "Uzupewni pole: Kod pocztowy");
        };

        if ($.trim(city.val()) == "") {
            errorsArray.push("<li>" + "Uzupewni pole: Miasto");
        };

        if (pizza.val() == 0) {
            errorsArray.push("<li>" + "Wybierz pizze!");
        };

        if (agree.is(":checked") == false) {
            errorsArray.push("<li>" + "Musisz wyrazyc zgode na RODO");
        };

        if (errorsArray.length != 0) {
            errorsArray.forEach(function (element) {
                errors.append(element);
            });
            // console.log(errorsArray);
        }

        let orderObject = {
            firstName: $.trim(firstName.val()),
            lastName: $.trim(lastName.val()),
            street: $.trim(street.val()),
            streetNo: $.trim(streetNo.val()),
            postCode: $.trim(postCode.val()),
            city: $.trim(city.val()),
            pizza: pizza.val(),
            sauces: [
                tomatoSouse.is(':checked'), garlicSouse.is(":checked")
            ]
        };

        console.log(JSON.stringify(orderObject));
        console.log(orderObject);

        return false;
    });
});

