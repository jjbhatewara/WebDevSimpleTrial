//const temp = require('../server/app');


//console.log(temp.data);
document.addEventListener('DOMContentLoaded', ()=> {
    console.log("OKAY Dom is working");
    loadHTMLTable();
    fetch('http://localhost:5000/getData')
    .then(console.log(rows)); 
});



function loadHTMLTable(){
    const table = document.querySelector('table tbody');
    table.innerHTML = "<tr>\
    <th>1</th> \
<th>Jinesh</th> \
<th>06</th> \
<th>COMP</th> \
</tr>";
    /* if(data.length == 0){
        table.innerHTML = "<tr><td class = 'no-data' colspan = 5>No Data</td></tr>";    

    } */

}
