// Unfinished - needs substitute for .unique(ruby function)

// Create variable that throws a function

// const distinct = (value, index, self) => {
//   return self.indexOf(value) === index;
// }

const uniqueInOrder2 = iterable = (x,funk) => {
  const orderString = (x)
  const orderStringSplit = x.split(/(?=[A-Z])/);
  const unique = orderStringSplit.filter(funk())
}

uniqueInOrder2('AAAAABBBBCCCDAAABBB', distinct)