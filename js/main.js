let row = document.querySelector(".row");

let col = document.createElement("div");
col.classList.add("column");
row.appendChild(col);

let dateDisplay = document.createElement("h1");
dateDisplay.setAttribute("id", "dateDisplay");
col.appendChild(dateDisplay);

let timeDisplay = document.createElement("h1");
timeDisplay.setAttribute("id", "timeDisplay");
col.appendChild(timeDisplay);




let date = new Date();

dateDisplay.innerHTML = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()} : 
${date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1} : 
${date.getFullYear()-2000}`;

let digitalClock = setInterval(() =>{
    let date = new Date();
    timeDisplay.innerHTML = `${date.getHours() > 12 ? date.getHours()-12 : date.getHours()} : 
    ${date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()} : 
    ${date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()}`;
},1000);