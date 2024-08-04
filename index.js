function calculate() {
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let year = document.getElementsByClassName("year")[0].value;
let month = document.getElementsByClassName("month")[0].value;
let day = document.getElementsByClassName("date")[0].value;
let date = new Date(year, month, day);
let val = date.getTime();
    let currentDate = new Date(); 
    let birthDate = new Date(val);
    let ageY = currentDate.getFullYear() - birthDate.getFullYear();
    let ageM = currentDate.getMonth() - birthDate.getMonth() + 1;
    let ageD = currentDate.getDate() - birthDate.getDate();
    if (ageD < 0) {
        ageM--;
        ageD += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageM < 0) {
        ageY--;
        ageM += 12;
    }
    let screen = document.getElementsByClassName("screen")[0];
    screen.innerHTML = `<h2>Age: ${ageY} years, ${ageM} months, and ${ageD} days.</h2>`;
}

