/* Selecting our inputs */
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let dayValidity = document.querySelector(".day")
/* Select button */
let button = document.querySelector(".circle");

/* Select placeholder for displaying our values */
let dayPh = document.querySelector(".days");
let monthPh = document.querySelector(".months");
let yearPh = document.querySelector(".years");

/* set a max for years input field */
year.setAttribute("max", new Date().getUTCFullYear());

/* Getting inputs values */
button.addEventListener("click", getValues);
function getValues() {
    ageCalculator(day.value, month.value, year.value); // calling function to start calculate age with the data that we retrived from user
}

/* adding  values to  the placeholder */
function setValues(day, month, year) {
    dayPh.innerHTML = day;
    monthPh.innerHTML = month;
    yearPh.innerHTML = year;
}

/* Creat a function to calculat age in years and months and days */
function ageCalculator(dd, mm, yy) {
    let currentDate = new Date();
    let birt = new Date(yy, mm - 1, dd);
    let days = 0; //number of days passed from the date of birth until current date
    while (true) {
        if (
            currentDate.getUTCDate() === birt.getUTCDate() &&
            currentDate.getUTCFullYear() === birt.getUTCFullYear() &&
            currentDate.getUTCMonth() === birt.getUTCMonth()
        ) {
            break;
        } else {
            days += 1;
            birt.setDate(birt.getDate() + 1);
        }
    }
    setValues(
        (days % 365) % 30,
        Math.floor((days % 365) / 30),
        Math.floor(days / 365)
    ); // calling function to add our calculated age;
}

/* function for set a max to days inpute field depende on month chosen */
month.addEventListener("change", checkMonths);
function checkMonths() {
    if (
        month.value == 4 ||
        month.value == 6 ||
        month.value == 9 ||
        month.value == 11
    ) {
        day.setAttribute("max", 30);
    } else if (month.value == 2 && year.value % 4 != 0) {
        day.setAttribute("max", 28);
    } else if (month.value == 2 && year.value % 4 == 0) {
        day.setAttribute("max", 29);
    } else {
        day.setAttribute("max", 31);
        console.log(month.value);
    }
}

/* Creating  a validation check function */
function validationCheckDay(){
    const ValidityState = day.validity;
    if(ValidityState.valueMissing){
        dayValidity.innerHTML =  "this field is required";
    }else{
        day.setCustomValidity("")
    }
    // day.reportValidity();
}
function validationCheckMonth(){
    
}
function validationCheckYear(){
    
}

day.addEventListener("focusout", validationCheckDay);