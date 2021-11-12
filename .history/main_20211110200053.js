var array = ['JS', 'PHP', 'Ruby']

function logger(a, b, c) {
  console.log(a, b, c)
}

logger(...array)