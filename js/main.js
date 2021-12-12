const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
const male=document.getElementById("male")
const female=document.getElementById("female")
function getDay() {
  let DD = parseInt(date.value);
  let MM = parseInt(month.value);
  let YY = parseInt(year.value);
  YY = YY.toString().substr(2, 4);
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
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  let femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let index=getDay()
  if(male.value=="male"){
    let yourAkanName=`Your Akan Name is ${maleAkan[index]} and you were born on ${daysofWeek[index]}` 
    alert(yourAkanName)

  }
  else if(female.value=="female"){
      let yourAkanName=`Your Akan Name is ${femaleAkan[index]} and you were born on ${daysofWeek[index]}`
  alert(yourAkanName)
    }

}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  getAkan();
});
