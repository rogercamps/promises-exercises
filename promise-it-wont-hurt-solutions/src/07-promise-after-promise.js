let one = first();

let two = one.then(result => {
  return second(result)
})

two.then(console.log)
