// losowanie 3 liczb dla PESEL
function losowanie(min, max){ 
    return Math.floor(Math.random()*(max - min)+min)
}

// let od100do1000 = losowanie(100, 999)
// console.log('od100do1000', od100do1000)
// let od1do9 = losowanie(1,9)
// console.log('od1do9', od1do9)


function womenOrMen(){
    let men = document.getElementById('men').checked
    // let woman = document.getElementById('woman').checked
    if(men) {
        return true  
        // jesli true to wybrano men
    } else {
        return false
    }

    // ternary funkcja
    // return document.getElementById('men').checked ? true : false
}

function generator(){
    const name = document.getElementById('name').value
    const date = document.getElementById('date').value
    let newPesel
    let pierwsze2liczbyPesel = date.substring(2,4)
    let calyRok = parseInt(date.substring(0,4))
    let miesiacUrodzenia = parseInt(date.substring(5,7))
    let miesiacDoNewPesel = calyRok < 2000 ? date.substring(5,7): miesiacUrodzenia + 20
    let dzienUrodzin = date.substring(8,10)
    let cyfry3 = losowanie(100, 999)
    let isMen = womenOrMen() ? losowanie(0,4) * 2 + 1: losowanie(0,4) * 2
    let ostatniaCyfra = losowanie(0,9)

    newPesel = pierwsze2liczbyPesel + miesiacDoNewPesel + dzienUrodzin + cyfry3 + isMen + ostatniaCyfra
    document.getElementById('newPesel').innerHTML = newPesel
    document.getElementById('namePerson').innerHTML = name
}

// ternary
// calyRok < 2000 ? date.substring(5,7)
// :miesiacUrodzenia + 20

// if (calyRok < 2000) {
//     return date.substring(5, 70)
// } else {
//     miesiacUrodzenia + 20
// }