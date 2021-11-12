var monsters = [
  {
    name: 'Cá heo',
    attack: 50,
    speed: 100,
    hitpoint: 100,
},
{
    name: 'Khủng long',
    attack: 150,
    speed: 80,
    hitpoint: 180,
},
]

function findAMonsterByAttack(monsters) {

  var monster = monsters.find(function(monster) {
      return monsters.attack === 150
  })

  if (monster === undefined) {
      return null
  } else {
      return monster
  }
}

findAMonsterByAttack()