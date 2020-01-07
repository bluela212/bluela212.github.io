let cities = ['Warszawa', 'Berlin', 'Paris'];

let olMiasta = document.activeElement('ol');
olMiasta.setAttribute('id','lista miast');

document.body.appendChild(olMiasta);

for (let i=0; i<cities.lenght; ++i) {
  let liMiasto = document.createElement('li');
  liMiasto.setAttribute('class', 'city');

  liMiasto.innerText = cities[i];

  olMiasta.appendChild(liMiasto);
  console.log(cities[i]);
}