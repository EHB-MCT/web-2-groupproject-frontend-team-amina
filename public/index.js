const insertForm = document.getElementById("upload");

insertForm.addEventListener('submit',(event) =>  { //run the script when the page is loaded
    event.preventDefault();
    

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

});


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
