var pets = ['dog', 'rat', 'cat', 'dog', 'lion', 'rat', 'rabbit'];

const countPets = pets.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1
  } else {
    obj[item] += 1
  }
  return obj
}, {})

console.log(countPets)

/*

Output

{
  dog: 2,
  rat: 2,
  cat: 1,
  lion: 1,
  rabbit: 1
}

*/



var pilots = [{
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

const totalYears = pilots.reduce((result, item) => {

  result > item.years ? result : result = item.years
  return result

}, 0);

console.log(totalYears) /// Most exeperienced pilots





var personnel = [{
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const totalScoreForceUser = personnel.filter((record) => {
  return record.isForceUser === true
}).reduce((totalScore, filterRecord) => {
  return totalScore += filterRecord.pilotingScore + filterRecord.shootingScore
}, 0)

console.log(totalScoreForceUser)  // Count score of only isForceUser
