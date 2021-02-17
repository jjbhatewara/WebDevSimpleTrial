
//const axios = require('axios');

document.addEventListener('DOMContentLoaded', ()=> {
  console.log("OKAY Dom is working");
  //fetch('http://localhost:5000/insert');

});
const submitBtn = document.querySelector('#Submit')
submitBtn.onclick = function(){

    const nameInp = document.querySelector('#input-name-btn');
    let name = nameInp.value;
    nameInp.value = "";
    const rollInp = document.querySelector('#input-roll-btn');
    let roll_no = rollInp.value;
    rollInp.value = "";
    const branchInp = document.querySelector('#input-branch-btn');
    let branch = branchInp.value;
    branchInp.value = "";
    console.log(name+roll_no+branch);
    var tempUrl = 'http://localhost:5000/insert/'+name+'/'+roll_no+'/'+branch;
    console.log(tempUrl);
    fetch(tempUrl,{
      method:'POST'
    });
}

//module.exports.name = name;