/*global require*/
/*eslint-env es6*/

const questionOne = document.getElementById('questionOne');
const questionTwo = document.getElementById('questionTwo');
const questionThree = document.getElementById('questionThree')

const score = document.getElementById("Score");


var count1 = 0;



function scoreAdd() {

    if (questionOne.value == "12") {
        count1 = count1 + 1;
    }

    if (questionTwo.value == "10") {
        count1 = count1 + 1;
    }

    if (questionThree.value == "139") {
        count1 = count1 + 1;
    }



    scoreDisplay();

}


function scoreDisplay() {


    document.getElementById("Score").innerHTML = count1;



}



function reset() {

    count1 = 0;
    document.getElementById("Score").innerHTML = count1;

}