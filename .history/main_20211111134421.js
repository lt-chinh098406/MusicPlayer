const obj = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
    cat2: {
      name: 'John',
      cat3: {
        name: 'Wich'
      }
    }
  }
}

if (obj?.cat?.cat2?.cat3) {
  console.log(obj.cat.cat2.cat3.name)
}