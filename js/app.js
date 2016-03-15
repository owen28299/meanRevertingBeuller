var students;
var classA;

var kids = studentList();

document.getElementById('abc').addEventListener("keyup", function(event){
  if(event.which === 13){
    kids.setStudents(event.target.value);
    event.target.value = "";
  }
});

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

