function myFunction() {
    //tworzymy tabelę
    let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
    //tworzymy element ol
    const lista = document.createElement("ol");
    //przyswajamy elementu ol id
    lista.id = "lista";
    //wyświetlamy element ol w html
    document.getElementById("cont").appendChild(lista);
    //tworzymy pętlę typu for
  for(let i = 0; i <cities.length; i++ ) {
      var li = document.createElement("li");
      li.innerHTML = cities[i];
      li.classList.add("city");
      document.getElementById("lista").appendChild(li);
      }
}