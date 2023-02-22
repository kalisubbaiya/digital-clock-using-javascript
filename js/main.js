let row = document.querySelector(".row");

let col = document.createElement("div");
col.classList.add("column");
row.appendChild(col);

let dateDisplay = document.createElement("h1");
dateDisplay.setAttribute("id", "dateDisplay");
col.appendChild(dateDisplay);

let currentTime = document.createElement("h1");
currentTime.setAttribute("id", "currentTime");
col.appendChild(currentTime);

let timeDisplay = document.createElement("div");
timeDisplay.setAttribute("id", "timeDisplay");
currentTime.appendChild(timeDisplay);

let session = document.createElement("div");
session.classList.add("session");
currentTime.appendChild(session);

let amCircle = document.createElement("div");
session.appendChild(amCircle);
amCircle.setAttribute("id", "amCircle");
amCircle.classList.add("circle");


let amSession = document.createElement("div");
amSession.setAttribute("id", "amSession");
session.appendChild(amSession);
amSession.innerHTML = "am";

let pmCircle = document.createElement("div");
session.appendChild(pmCircle);
pmCircle.setAttribute("id", "pmCircle");
pmCircle.classList.add("circle");

let pmSession = document.createElement("div");
pmSession.setAttribute("id", "pmSession");
session.appendChild(pmSession);
pmSession.innerHTML = "pm";



let date = new Date();

dateDisplay.innerHTML = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()} : ${date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1} : 
${date.getFullYear()-2000}`;

let digitalClock = setInterval(() =>{
    let date = new Date();
    timeDisplay.innerHTML = `${date.getHours() > 12 ? date.getHours()-12 : date.getHours()} : 
    ${date.getMinutes() < 10 ? "0"+ date.getMinutes() : date.getMinutes()} : 
    ${date.getSeconds() < 10 ? "0"+ date.getSeconds() : date.getSeconds()}`;

    if (date.getHours() > 12){
        pmCircle.style.background = "red";
    }else{
        amCircle.style.background = "red";
    }
},1000);

const days = [{day: "SUN"},{day: "MON"},{day: "TUE"},{day: "WED"},{day: "THU"},{day: "FRI"},{day: "SAT"}];


let showDay = document.createElement("div");
col.appendChild(showDay);
showDay.classList.add("dayContainer");

days.forEach((e, index) =>{
    let circle = document.createElement("div");
    showDay.appendChild(circle);
    circle.classList.add("circle");

    let today = document.createElement("div");
    showDay.appendChild(today);
    today.classList.add("today");
    today.innerHTML = e.day;

    if (date.getDay() == index){
        circle.style.background = "red";
    }
})