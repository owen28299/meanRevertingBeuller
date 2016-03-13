var students = ["Stephen", "Tyler", "Owen", "Taylor", "Malia", "Laura", "Nat", "Pam"];

//Change this to change the degree of mean reversion.
//Higher number = LESS mean reversion
var degreeOfMeanReversion = 20;

//Number of activities
var times = 8;


function meanRevertingBeuller(arr) {
  var people = arr;

  var peopleInstances = {};

  for (var i in people) {
    peopleInstances[people[i]] = [0,0,0];
  }

  function getMean(){

    var sum = 0;
    for (var i in peopleInstances){
      sum += (peopleInstances[i][0]);
    }
    return sum / people.length;

  }

  function getPerson(){

    var mean = getMean();

    for (var x in peopleInstances){

      peopleInstances[x][1] = 10 *(mean - peopleInstances[x][0]);

      peopleInstances[x][2] = Math.random()*(20 + peopleInstances[x][1]);

    }

    var personChosen;
    var highest = 0;

    for (var p in peopleInstances) {
      if(peopleInstances[p][2] > highest) {
        highest = peopleInstances[p][2];
        personChosen = p;
      }
    }

    peopleInstances[personChosen][0] += 1;

    return personChosen;

  }

  function getPeopleInstances(){
    return peopleInstances;
  }

  return {
    getPerson: getPerson,
    getPeopleInstances: getPeopleInstances,
    getMean: getMean
  };

}

var classA = meanRevertingBeuller(students);

document.getElementById("run").onclick = function(){
  var picked = classA.getPerson();
  document.getElementById("person").innerHTML = picked;
};

