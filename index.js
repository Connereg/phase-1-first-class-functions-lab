// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = function () {
    let firstTwoBYIndex = drivers.slice(0, 2)
    console.log(firstTwoBYIndex)
    return firstTwoBYIndex

}

const returnLastTwoDrivers = function () {
    let lastTwoByIndex = drivers.slice(2, 4)
    console.log(lastTwoByIndex)
    return lastTwoByIndex
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(multiplier){
    return function (fare) {
        return (fare * multiplier)
    }
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    function selectDifferentDrivers(drivers){
        return returnFirstTwoDrivers
    }
}



