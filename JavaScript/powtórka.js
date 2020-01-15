function formularz(event) {
    console.log('dziala');
    event.preventDefault();

    let pole1 = document.getElementById('pole1');
    let pole2 = document.getElementById('pole2');
    let wynik = parseInt(pole1.value) + parseInt(pole2.value);

    document.getElementById("wynik").innerHTML = wynik;
    
    console.log(wynik)

    return false;
}

let form = document.getElementById('form');

console.log(form);

form.addEventListener('submit', formularz);


// gadały o this
console.log(this);

if (this === window) {
    console.log("to jest obiekt window");
    
}

let kobieta = {
    wzrost: 170,
    imie: "Marta",
    przedstawSie: function() {
        console.log(`Cześć, mam na imie: ${this.imie}, mam ${this.wzrost}cm wzrostu`)
    }
}

let kobieta2 = {
    wzrost: 171,
    imie: "Ola",
    przedstawSie: function() {
        console.log(`Cześć, mam na imie: ${this.imie}, mam ${this.wzrost}cm wzrostu`)
    }
}