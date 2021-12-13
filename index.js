//Getting the data

const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'))


app.get('/', (req, res, next) => {
    res.status(200).redirect('index.html');
})

window.onload = () => { //run the script when the page is loaded
    console.log('Loaded');
    const insertForm = document.getElementById("upload");

    function createChallenge(event) {
        let idChallenge = document.getElementById('id').value;
        let nameChallenge = document.getElementById('name').value;
        let pointsChallenge = document.getElementById('points').value;
        let courseChallenge = document.getElementById('course').value;
        let sessionChallenge = document.getElementById('session').value;




        //valid data --> transfrom to a jsonfile --> send it back to the frontend
        //fetch heruko api 

        fetch('https://backend-team-amina.herokuapp.com/challenges', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name" : nameChallenge,
                "points": pointsChallenge,
                "course": courseChallenge
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            console.log(data)
        })

    }

    insertForm.addEventListener('submit', event => {
        event.preventDefault();

        createChallenge(event);
    })

    let allChallenges = document.getElementById("seeAllChallenges");
    allChallenges.addEventListener('click', e => {
        e.preventDefault();
        let insertdata = ""

        fetch('https://backend-team-amina.herokuapp.com/challenges')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let insertdata = "";
                data.forEach(data => {
                    insertdata += `<p>
                - ${data.name} 
                - ${data.course} 
                - ${data.points}
                - ${data._id}</p>`
                });
                document.getElementById("input").innerHTML = insertdata;
            })


    })
}

//course: "the course this challenge belongs to"
//name: "this is the name of the challenge"
// points:: 10
// _id: "61a5e59ae914551c72ef204b"