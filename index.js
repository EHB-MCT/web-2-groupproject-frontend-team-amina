"use strict";

fetchApi();

//Getting the data
window.onload = () => { //run the script when the page is loaded
    async function runTest() { //function fecth data from my api
        const resp = await fetch('')
        const data = await resp.json(); // getting data and waiting until that syn function is finished --> response

        document.getElementById('list').innerText = JSON.stringify(data);
        console.log(data);
    }
    runTest();
}
//valid data --> transfrom to a jsonfile --> send it back to the frontend

//fetch heruko api 
function fetchApi (){

    fetch(`https://backend-team-amina.herokuapp.com/challenges`)
        .then(response => {
            return response.json
        })
        .then(data => {
            console.log(data);
        }).then(res =>{
            console.log(response)
        })
}