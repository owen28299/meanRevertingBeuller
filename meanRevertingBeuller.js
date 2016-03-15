var students;
var classA;
var degreeOfMeanReversion;

var kids = studentList();

document.getElementById('abc').addEventListener("keyup", function(event){
  if(event.which === 13){
    kids.setStudents(event.target.value);
    event.target.value = "";
  }
});

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

    console.log(studentArray);

  }

  return{
    getStudents : getStudents,
    setStudents : setStudents
  };

}

document.getElementById("commence").onclick = function(){
  students = kids.getStudents();
  classA = meanRevertingBeuller(students);

  var start = document.getElementById("start");

  for (var i in students){
    var p = document.createElement('p');
    var row = start.appendChild(p);
    row.id = students[i];
    document.getElementById(students[i]).innerHTML = students[i];
  }

  switch(document.getElementById('MR').value){
    case "full":
      degreeOfMeanReversion = 0;
      break;
    case "partial":
      degreeOfMeanReversion = 5;
      break;
    case "random":
      degreeOfMeanReversion = 10;
      break;

  }
};



//students = ["Stephen", "Tyler", "Owen", "Taylor", "Malia", "Laura", "Nat", "Pam"];
//Change this to change the degree of mean reversion.
//Higher number = LESS mean reversion

document.getElementById("run").onclick = function(){
  var picked = classA.getPerson();
  document.getElementById("person").innerHTML = picked;

  var times = classA.getPeopleInstances()[picked].currentScore;
  document.getElementById(picked).innerHTML =
    picked + " " + times;
};

document.getElementById('123').onclick = function(){
  console.log("frog");
};
