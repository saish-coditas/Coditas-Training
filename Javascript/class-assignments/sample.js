// function matrixAddition(a, b)
// {
//   let solutionMatrix = [[]];
//   for(let idx=0; idx<a.length; idx++)
//   {
//     for(let idy=0; idy<b.length; idy++)
//     {
//       solutionMatrix[idx][idy]=a[idx][idy]+b[idx][idy];
//     }
//   }
//   return solutionMatrix;
//   //TODO
// }
// console.log(matrixAddition([1,1,1][1,1,1],[2,-1,2][2,2,-1]));

// const nestedArray = [1,2,3,[4,5]];
// const copyArray = nestedArray.slice();
// copyArray[3]=8;
// console.log(nestedArray);
// console.log(copyArray);

const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
  const newStudent = JSON.parse(JSON.stringify(student1));
  newStudent.skills.frontEnd.push({skill: 'BootStrap', level: 8});
  newStudent.skills.backEnd.push({skill: 'Express', level: 9});
  newStudent.skills.dataBase.push({skill: 'SQL', level: 8});
  newStudent.skills.dataScience.push('SQL');
//   student1.skills.backEnd[2].skill='Express';
//   student1.skills.backEnd[2].level=9;
//   student1.skills.dataBase[1].skill='SQL';
//   student1.skills.dataBase[1].level=8;
//   student1.skills.dataScience[3]='SQL';
  console.log(newStudent);

  
  