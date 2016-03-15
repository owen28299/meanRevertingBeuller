'use strict';

const test = require('tape');
const Fs = require('fs');
const Vm = require('vm');
const Path = require('path');


let filePath = Path.resolve(__dirname, './../js/meanRevertingBeuller.js');
const IndexFileRaw = Fs.readFileSync( filePath, { encoding : 'utf8' });

let sandbox = {};
const Script = new Vm.Script(IndexFileRaw);
Script.runInNewContext(sandbox);


test('Beuller', (spec)=>{

  const students = ["student0","student1","student2","student3","student4"];

  spec.test('should not start with the same person very often', (should)=>{

    // instantiate 10 beullers, student0 should not be the first one picked more than 5 times
    let countOfFirstPicks = students.reduce((counts,name)=>{
      counts[name] = 0;
      return counts;
    },{});

    for(let i = 0, l = 10; i < l; i++){
      let beuller = sandbox.meanRevertingBeuller(students); // fresh new instance
      countOfFirstPicks[beuller.getPerson()]++;
    }

    let mostPicked = Object.keys(countOfFirstPicks).reduce((largest,name)=>{
      return (countOfFirstPicks[name] > largest.count) ? { name : name, count : countOfFirstPicks[name] } : largest;
    }, { name:null, count:-Infinity });

    should.ok(mostPicked.count < 5, `Student [${mostPicked.name}] was picked over 5/10 times! [actual: ${mostPicked.count}]`);

    should.end();

  });
});

