var doubleOrNothing = 1
var randomShot = function (attr, b, don, reset) {
  if (reset) {
    doubleOrNothing = 1
    return 'reset made'
  }
  if (b) {
    if (don) doubleOrNothing = doubleOrNothing + 1
    return 'drink ' + doubleOrNothing
  } else if (1 + ~~(Math.random() * 6) <= 3) {
    if (don) doubleOrNothing = doubleOrNothing + 1
    return 'drink ' + doubleOrNothing
  } else {
    doubleOrNothing = 1
    return "don't drink"
  }
}

console.log(randomShot())
