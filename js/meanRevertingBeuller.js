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
  var mean = 0;

  function getPerson(){

    mean = count / people.length;

    for (var x in peopleInstances){

      var deviation =  (0.01 * Math.random()) + mean - peopleInstances[x].currentScore;

      peopleInstances[x].randomScore = Math.random()*(degreeOfMeanReversion + deviation);

    }

    var personChosen;
    var highest = -Infinity;

    for (var p in peopleInstances) {
      if(peopleInstances[p].randomScore > highest) {
        highest = peopleInstances[p].randomScore;
        personChosen = p;
      }
    }

    peopleInstances[personChosen].currentScore += 1;

    count++;

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

function studentList(){
  var studentArray = [];

  function getStudents(){
    return studentArray;
  }

  function setStudents(array){
    var arr = array.split(",");

    for(var m in arr){
      studentArray.push(arr[m]);
    }
  }

  return{
    getStudents : getStudents,
    setStudents : setStudents
  };

}

