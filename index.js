// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    const first = drivers.slice(0,2);
    return  first;
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}
returnLastTwoDrivers();

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
return function(){
    console.log(fare*5);
    return fare * 5;
}
}
createFareMultiplier();
const fareDoubler = createFareMultiplier(4);
const fareTripler = createFareMultiplier(7.2);

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    console.log(drivers)    
    return returnFirstTwoDrivers();
}
