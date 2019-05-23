// aug = integer, percent = positive or null number, p0 & p are 
// positive integers

// convert 2% = 0.02 /100
// implment count / while lopp until p0 === 12000

// const nbYear = (p0, percent, aug, p) => {
//   p0 === 1000
//   while (p0 < 1200) {

//   }
// }


const nbYear = (p0, percent, aug, p, count = 0) => {

  if (p0 >= p) {
    return count
  } else {
    count += 1
    pop = p0 + p0 * (percent/100) + aug
    return nbYear(pop, percent, aug, p, count)
  }
}


(nbYear(1500, 5, 100, 5000), 15);
(nbYear(1500000, 2.5, 10000, 2000000), 10);
(nbYear(1500000, 0.25, 1000, 2000000), 94);