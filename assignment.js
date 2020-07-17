// Problem 1

function feetToMile(feet)
{
    // 1 mile = 5280 feet
    let calculateMile;
    let comment="You've entered negative value....Please, enter positive value....";
    // If user enter any negative value...then it will exist this condition...
    if(feet < 0)  
    {
        return comment;
    }
    // If user enter any positive value...then it will exist this condition...
    else    
    {
        calculateMile = feet / 5280;    // Equation for Feet to Mile converting
        return calculateMile = calculateMile.toFixed(2);
    }
}
let resultOfProblem1 = feetToMile(5250);
console.log(resultOfProblem1);


// Problem 2

function woodCalculator(chair, table, bed)
{
    
    let calculateChair, calculateTable, calculateBed, totalWood;
    let comment = "Please enter positive value...";
    // If user enter any negative value...then it will exist this condition...
    if(chair < 0 || table < 0 || bed < 0)
    {
        return comment;
    }
    // If user enter any positive value...then it will exist this condition...
    else
    {
        /*
        1 chair = 1 feet
        1 table = 3 feet
        1 bed = 5 feet
        */

        calculateChair = chair * 1;
        calculateTable = table * 3;
        calculateBed = bed * 5;
        return totalWood = calculateChair + calculateTable + calculateBed;
    }
}
let resultOfProblem2 = woodCalculator(2, 3, 4);
console.log(resultOfProblem2);


// Problem 3

function brickCalculator(floorNumber)
{
    let firstTenBrickAmmount, secondTenBrickAmmount, thirdBrickAmmount, totalBrick;
    let comment="You've entered negative value....Please, enter positive value....";

    /*
        1st to 10th floor , every floor takes 15 feet
        11th to 20th floor , every floor takes 12 feet
        21th to more floor , every floor takes 10 feet
    */

    // If user enter any negative value...then it will exist this condition...
    if(floorNumber < 0)
    {
        return comment;
    }
    // If user enter value in range of 1 to 10....then it will exist this condition...
    else if(floorNumber >= 1 && floorNumber <= 10)
    {
        return firstTenBrickAmmount = floorNumber * 15 * 1000; 
    }
    // If user enter value in range of 11 to 20....then it will exist this condition...
    else if(floorNumber >= 11 && floorNumber <= 20)
    {
        let secondaryFloor = floorNumber - 10;
        secondTenBrickAmmount = secondaryFloor * 12;  
        firstTenBrickAmmount = 10 * 15; 
        return totalBrick = (firstTenBrickAmmount + secondTenBrickAmmount) * 1000;
    }
    // If user enter value in range of 21 to more....then it will exist this condition...
    else
    {
        let tirtiaryFloor =  floorNumber - 10;
        firstTenBrickAmmount = 10 * 15; 
        tirtiaryFloor = tirtiaryFloor - 10;
        secondTenBrickAmmount = 10 * 12;  
        thirdBrickAmmount = tirtiaryFloor * 10;
        return totalBrick = (firstTenBrickAmmount + secondTenBrickAmmount + thirdBrickAmmount) * 1000;
    }
}
let resultOfProblem3 = brickCalculator(25);
console.log(resultOfProblem3);

// Problem 4

function tinyFriend(friendsName)
{
    let newArray = friendsName[0];
    // If user enter any empty string...This condition will exist...
    if(friendsName == " ")
    {
        return "You've entered empty string....";
    }
    // To find shortest string....This condition will exist...
    else
    {
        for(let i = 1; i< friendsName.length; i++)
        {
            let element = friendsName[i];
            if(element.length < newArray.length)
            {
                newArray = element;
            }   
        }
        return newArray;
    }
    
}
let resultOfProblem4 = tinyFriend( ["shoyas4444", "shoyas2", "shoyas111", "shoyas33" ] );
console.log(resultOfProblem4);
