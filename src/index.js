module.exports = function solveEquation(equation) {
  // your implementation
  let res = [];
  let num = equation.split(" ");
  let b = parseInt(num[3]+num[4]);
  let a = parseInt(num[0]);
  let c = parseInt(num[7]+num[8]);
  res[0] = Math.round((-1*b + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a));
  res[1] = Math.round((-1*b - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a));
  return res.sort((a,b)=>a-b);

}
