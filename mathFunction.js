// console.log(Math.abs(-10));
// console.log(Math.ceil(10.2));
// console.log(Math.floor(10.2));
// console.log(Math.trunc(10.2));
// console.log(Math.pow(10,3));
// console.log(Math.max(10,3,57,546,788,5));
// console.log(Math.min(10,3,57,546,788,5));
// console.log(Math.random()*100);
// let n = 6.48645639456;
// console.log(Number(n.toFixed(2)));

// calculateCompoundInterest
function calculateCompoundInterest(P, r, t, n) {
  let a = P * Math.pow(1 + r / n, n * t);
  let ci = a - P;
  return ci.toFixed(2);
}

console.log(calculateCompoundInterest(1000, 0.5, 10, 4));


// calculateTriangleArea
function calculateTriangleArea(a, b, c) {
    if(a + b <= c || a + c <= b || c + b <= a){
        return "not a triangle"
    }

    let s = (a+b+c)/2;
     
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
     return area.toFixed(2);
}

console.log(calculateTriangleArea(3,4,5));


// random OPT 
console.log(Math.trunc((Math.random()*8999)+1000))