//const { response } = require("express");


document.addEventListener('DOMContentLoaded', ()=> {
    console.log("OKAY Dom is working");
    fetch('http://localhost:5000/getData');
/*     .then(response => response.json())
    .then(console.log("response")); */
});



function loadHTMLTable(data){
    const table = document.querySelector('table tbody');

    if(data.length == 0){
        table.innerHTML = "<tr><td class = 'no-data' colspan = 5>No Data</td></tr>";    

    }

}
