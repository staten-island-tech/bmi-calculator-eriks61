let a = Number(prompt("Weight in kg"));
let b = Number(prompt("Height in m"));

function Power() {
  return b * b;
}
const prod = Power();
console.log(a / prod);
if (a / prod < 18.5) {
  console.log("Underweight");
} else if (18.5 < a / prod < 30) {
  console.log("Healthy");
} else {
  console.log("Unhealthy");
}
