'use strick'

// console.log("hej");


function getData() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            document.getElementById("id").innerHTML = response.id
            document.getElementById("name").innerHTML = response.name
            document.getElementById("email").innerHTML = response.email

            // robila karolina i Marta
            // let paragraf = document.createElement('p');
            // paragraf.innerHTML = response.name;
            // document.body.appendChild(paragraf)
        });
};

let klik = document.getElementById("click")
klik.addEventListener("click", getData);




// Kristian robi
const getData = (event) => {
    // console.log("działa klik");
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {
            // console.log(response.website);

            let pID = document.createElement('p');
            pID.innerHTML = `User ID: ${response.id}`;
//             let pIDtxt = document.createTextNode(`User ID: ${response.id}`);
//             pID.appendChild(pIDtxt);

//             let pName = document.createElement('p');
//             let pNameTxt = document.createTextNode(`User name: ${response.name}`);
//             pName.appendChild(pNameTxt);

//             let pWebsite = document.createElement('p');
//             let pWebsiteTxt = document.createTextNode(`User url: ${response.website}`);
//             pWebsite.appendChild(pWebsiteTxt);

            let divData = document.getElementById('data');

            divData.appendChild(pID);
            divData.appendChild(pName);
            divData.appendChild(pWebsite);

            console.log(pName);

        });

}

// let btnGetData = document.getElementById("getdata");
// // console.log(btnGetData);

// btnGetData.addEventListener('click', getData);