var students = ["Stephen", "Tyler", "Owen", "Taylor", "Malia", "Laura", "Nat", "Pam"];

//Change this to change the degree of mean reversion.
//Higher number = LESS mean reversion
var degreeOfMeanReversion = 0;

function meanRevertingBeuller(arr) {
  var people = arr;

  var peopleInstances = {};

  for (var i in people) {
    peopleInstances[people[i]] = {
      currentScore : 0,
      randomScore : 0
    };
  }

  var count = 0;
  var mean = count / people.length;

  function getPerson(){

    mean = count / people.length;

    for (var x in peopleInstances){

      var deviation =  (count + 100) * (mean - peopleInstances[x].currentScore);

      peopleInstances[x].randomScore = Math.random()*(degreeOfMeanReversion + deviation);

    }

    console.log(mean);

    var personChosen;
    var highest = -Infinity;

    for (var p in peopleInstances) {
      if(peopleInstances[p].randomScore > highest) {
        highest = peopleInstances[p].randomScore;
        personChosen = p;
      }
    }

    peopleInstances[personChosen].currentScore += 1;

    console.log("frog");
    count++;
    console.log(count);

    return personChosen;

  }

  function getPeopleInstances(){
    return peopleInstances;
  }

  return {
    getPerson: getPerson,
    getPeopleInstances: getPeopleInstances
  };

}

var classA = meanRevertingBeuller(students);

var start = document.getElementById("start");

for (var i in students){
  var p = document.createElement('p');

  var row = start.appendChild(p);

  row.id = students[i];

  document.getElementById(students[i]).innerHTML = students[i];

}


document.getElementById("run").onclick = function(){
  var picked = classA.getPerson();
  document.getElementById("person").innerHTML = picked;

  var times = classA.getPeopleInstances()[picked].currentScore;
  document.getElementById(picked).innerHTML =
    picked + " " + times;
};

