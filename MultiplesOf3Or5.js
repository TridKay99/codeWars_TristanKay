
function test(n, expected) {
  let actual = solution(n)
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`)
}

Test.describe("basic tests", function(){
  test(10,23)
})

arr1 = []

const solution = (num) => {
  const total = 0 
  for(let i = 0; i < num; i++)
  if(num % 3 === 0 && num % 5 === 0) {
    total += num
  }
  return total
}