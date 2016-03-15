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

