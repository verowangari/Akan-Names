const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
const male = document.getElementById("male");
const female = document.getElementById("female");
let DD, MM, YY;
function getDay() {
  DD = parseInt(date.value);
  MM = parseInt(month.value);
  YY = parseInt(year.value);
  YY = YY.toString().substr(1, 4);
  let CC = YY.toString().substr(0, 2);
  let d = (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  d = Math.floor(d);
  return d;
}

function getAkan() {
  let daysofWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let maleAkan = [
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
    "Kwasi",
  ];
  let femaleAkan = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"];
  let index = getDay();
  if (male.checked) {
    let yourAkanName = `Your Akan Name is ${maleAkan[index]} and you were born on ${daysofWeek[index]}`;
    alert(yourAkanName);
  } else {
    let yourAkan = `Your Akan Name is ${femaleAkan[index]} and you were born on ${daysofWeek[index]}`;
    alert(yourAkan);
  }
}
function validate() {
  if (DD > 31) {
    alert("input correct date");
  } else if (MM > 12) {
    alert("Input correct month");
  } else {
    getAkan();
  }
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  getDay();
  validate();
  
  console.log(DD);
});
