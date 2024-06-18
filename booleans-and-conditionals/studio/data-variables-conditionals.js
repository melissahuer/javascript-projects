// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
const maximumMassLimit = 850000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    console.log("Too many astronauts")
    let preparedForLiftOff = false;
} else if (astronautStatus !== "ready"){
    console.log("Astronaut crew is not ready");
    let preparedForLiftOff = false;
} else if (totalMassKg > maximumMassLimit){
    console.log("Mass is too great");
    let preparedForLiftOff = false;
} else if (fuelTempCelsius > maximumFuelTemp && fuelTempCelsius < minimumFuelTemp){
    console.log("Fuel temp is out of appropriate range");
    let preparedForLiftOff = false; 
} else if (fuelLevel !== "100%"){
    console.log("Not enough fuel");
    let preparedForLiftOff = false;
}else if (weatherStatus !== "clear"){
    console.log("Not appropriate weather");
    let preparedForLiftOff = false;
} else{
    console.log ("All Systems Go: Intitiate Launch")
    console.log("Date:",date);
    console.log("Time:",time);
    console.log("Astronaut Count:",astronautCount);
    console.log("Crew Mass:",crewMassKg,"kg");
    console.log("Fuel Mass:",fuelMassKg,"kg");
    console.log("Shuttle Mass:",shuttleMassKg,"kg");
    console.log("Total Mass:",totalMassKg,"kg");
    console.log("Fuel Temperature:",fuelTempCelsius,"C");
    console.log("Weather Status:",weatherStatus);
    console.log("Have a safe trip astronauts!");
}

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
