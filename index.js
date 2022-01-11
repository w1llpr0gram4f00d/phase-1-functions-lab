// Code your solution in this file!
function distanceFromHqInBlocks(pickup) { 
    return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
    return Math.abs((pickup - 42) * 264);
}

function distanceTravelledInFeet(start, dest) {
    return Math.abs((dest - start) * 264);
}

function calculatesFarePrice(start, dest) {
    const distance = Math.abs((dest - start) * 264);
    let fare = 0;
    switch (true) {
        case distance < 400:
            return 0;
            break;
        case (distance >= 400 && distance <= 2000):
            return Math.abs((distance - 400) * 0.02);
            break;
        case (distance > 2000 && distance < 2500):
            return 25;
            break;
        default:
            return 'cannot travel that far';
    }
}