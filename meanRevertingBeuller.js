var students = ["Stephen", "Tyler", "Owen", "Taylor", "Malia", "Laura", "Nat", "Pam"];

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


console.log(classA.getPerson());


console.log(classA.getPeopleInstances());

