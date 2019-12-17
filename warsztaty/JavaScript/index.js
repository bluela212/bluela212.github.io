// let global;

// function iloczyn(par1, par2, par3) {
//   let wynik = par1*par2*par3
//   return wynik;
// }

// global = iloczyn(2,3,4)

// console.log(global)


// // nowe
// function palindromy(slowo) {
//     slowo = slowo.toUpperCase()
//     console.log(slowo)
//     let odwrocone = slowo.split('').reverse('').join('');
//     if(odwrocone == slowo) {
//       console.log("Tak")
//     } else {
//       console.log("nie")
//     }
//   }
//   palindromy("dom")
// }



// //  nowe
// // Jak zrobic date
// let data = new Date()
// console.log(data)
// // albo tak:
// var now = new Date()
// alert (now);

// // zeby rok dowedzic sie
// let data = new Date()
// console.log(data.getFullYear() + "." + eval (data.getMonth()+1))

// console.log(data.tolocaleString("en-US")) 



// Klasy
function Pracownik(name, sname, email, phone) {
  this.nameSurName = name + " " + sname;
  this.email = email
  this.phone = phone
}

let wszyscyPracownicy = []
console.log("TCL:wszyscyPracownicy", wszyscyPracownicy)

let janKowalski = new Pracownik("Jan", "Kowalski", "jk@open.pl", "254123689")
wszyscyPracownicy.push(janKowalski)
console.log(janKowalski)
console.log("TCL:wszyscyPracownicy", janKowalski)
console.log("TCL:wszyscyPracownicy", wszyscyPracownicy)

let adamNowak = new Pracownik("Adam", "Nowak", "ab@op.pl", "745632159")
wszyscyPracownicy.push(adamNowak)
console.log("TCL:wszyscyPracownicy dodano adam Nowak", wszyscyPracownicy)

// es5
function Pracownik(name, sname, email, phone) {
  this.nameSurName = name + " " + sname;
  this.email = email
  this.phone = phone
}
// es6
class NowyPracownik {
  constructor(name, sname, email, phone, children, ageChildren) {
    this.nameSurName = name + " " + sname;
    this.email + email
    this.phone + phone
    this.children = {
      age: ageChildren,
      nameChildren: children
    }
  }
}
let adamJakis = new NowyPracownik("adam", "jakis", "s@uh.pl", "652314623", "Brad", "3 lata")
console.log("TCL: adamJakis", adamJakis)