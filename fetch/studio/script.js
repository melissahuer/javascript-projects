//TODO: Add Your Code Below
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then(function(json){
        const div = document.getElementById("container");

        let astronaut = "";
        let activeColor;
        for(let i = 0; i<json.length; i++){
            const status = json[i].active;
            if (status) {
                activeColor = "green" ;

            }else {
                activeColor = "red";
            }
            astronaut += `
                        <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space:${json[i].hoursInSpace}</li>
                    <li style = "color: ${activeColor}">Active:${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
            </div>
            `
        }
        div.innerHTML = astronaut;
        document.body.insertAdjacentHTML("afterend",`<p> 
        Astronaut count: ${json.length}</p>`)
    })
    })
});