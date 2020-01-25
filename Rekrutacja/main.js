// pobieramy tabele
const selectDiv = document.getElementById('tabela')

// do pobranego div pobieramy change - ktory dziala na rozne zmiany
selectDiv.addEventListener('change', nbpData)
// pobieramy div
const mainDiv = document.getElementById('dane')

//funkcja odpali sie bo jest addListener
function nbpData(){
    // sprawdzam czy string nie jest pusty/ jerzeli vartosc div nie jest pusta
    if(selectDiv.value !=='') {
        // w tuldzie! pobiera link
        fetch(`http://api.nbp.pl/api/exchangerates/tables/${selectDiv.value}/?format=json`)
        // res to prosto nazwa i zamienia text na json
        .then(res => res.json())
        .then(res => {
            // zeby oczysczac div za kazdym razem
            mainDiv.innerHTML = ''
            let h = document.createElement('h1')
            h.innerHTML = "Tabela" + res[0].table
            mainDiv.appendChild(h)
            // console.log('nbpData -> res', res)
            // console.log(res[0].rates)
            // rates to jest notowanie kursu, czyli pobralismy wartosc jednej tab(0) i pozniej mamy jakos w niej porusac sie i wybieramy rates a w nim code
            // i - wartosc poczatkowa, jak dlugo bedzie spejniona i ostatnie dodaje 1
            for(let i=0; i< res[0].rates.length; i++) {
                // if(res[0].rates[i].code==="EUR"){
                //     console.log(res[0].rates[i].code)
                // }
                // sprawdzie czy ta wartosc istnieje, w 3 tab jej nie ma/ czyli albo mid albo bid
                // to skrót ternary
                // let kurs = res[0].retes[i].mid ? res[0].retes[i].mid : res[0].retes[i].bid
                // a to to same ale rozszerzone
                function sprawdzamyCzyJestMid(){
                    if(res[0].rates[i].mid) {
                        return res[0].rates[i].mid
                    } else {
                        return res[0].rates[i].bid
                    }
                }
                // tworzymy zmiena w ktorej tworzymyparagraf w div
                let paragraf = document.createElement('p')
                // dodajemy dane do pafragrafy w html
                paragraf.innerHTML = res[0].rates[i].code + " a kurs " + sprawdzamyCzyJestMid()  + " waluta " + res[0].rates[i].currency + ' jest to tabela ' + res[0].table
                // wyswietlamy
                mainDiv.appendChild(paragraf)
            }
            
        })
        // console.log(selectDiv.value)
    }
}