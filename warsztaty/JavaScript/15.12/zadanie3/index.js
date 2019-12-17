// let inputTyp = document.getElementsByTagName("input")
// console.log("TCL: inputTyp", inputTyp[2].type)

let inputTyp = document.getElementsByTagName("input")[2].addEventListener("click", function (e) {
    e.preventDefault()
    let fname = document.getElementsByName("frame")[0].value
    // console.log("TCL: frame", frame)
    let lname = document.getElementsByName("lname")[0].value
    console.log(fname + " " + lname)
})
