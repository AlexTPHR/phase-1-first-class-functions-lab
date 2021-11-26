// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(driversArray){
    return driversArray.slice(0,2);
}
function returnLastTwoDrivers(driversArray){
    return driversArray.slice(2,5);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(){
    return integer*integer
    }
}
// function fareDoubler(createFareMultiplier){
//     return createFareMultiplier.fareDoubler*2;
// } keep this in as one test was passing and was close

const fareDoubler = fare => fare*2
const fareTripler = fare => fare*3

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}