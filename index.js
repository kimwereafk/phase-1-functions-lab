// Code your solution in this file!
// Returns the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

// Returns the number of feet from Scuber's headquarters to the pickup location
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet long
}

// Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Each block is 264 feet long
}

// Given the starting and ending block, returns the fare for the customer
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot for the distance over 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25 for distance between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // Cannot travel more than 2500 feet
    }
}

