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