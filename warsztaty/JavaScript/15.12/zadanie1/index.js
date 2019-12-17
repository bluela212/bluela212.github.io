let btn = document.createElement( "button" )
let text = document.createTextNode( "jestem" )
btn.appendChild(text)

// pierwsa metoda dodawanie atrybutow
let classAtr = document.createAttribute( "class" )
classAtr.value = "mainBtn"

// druga
btn.setAttribute("class", "mainBtn")
document.getElementById("maindiv").appendChild(btn)
