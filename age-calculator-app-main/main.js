/* Selecting our inputs */
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

/* Selecting elements that are effected by validity conditions */
let dayValidity = document.querySelector(".day");
let monthValidity = document.querySelector(".month");
let yearValidity = document.querySelector(".year");
let allInputs = document.querySelectorAll("input");
let allLables = document.querySelectorAll("lable");
let input

/* Select button */
let button = document.querySelector(".circle");

/* Select placeholder for displaying our values */
let dayPh = document.querySelector(".days");
let monthPh = document.querySelector(".months");
let yearPh = document.querySelector(".years");

/* set a max for years input field */
year.setAttribute("max", new Date().getUTCFullYear());

/* Seting up event listner */
button.addEventListener("click", getValues);
month.addEventListener("focusout", validationCheckMonth);
year.addEventListener("focusout", validationCheckYear);
day.addEventListener("focusout", validationCheckDay);

/* Getting inputs values */
function getValues() {
    if (validationCheckMonth() * validationCheckDay() * validationCheckYear() === 1) {
        ageCalculator(day.value, month.value, year.value); // calling function to start calculate age with the data that we retrived from user
    } 
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

/* function for set a max to days inpute field depende on month chosen  & validation */
function CheckMonth() {
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
function validationCheckDay() {
    CheckMonth()
    const dayState = day.validity;
    if (dayState.valueMissing) {
        dayValidity.innerHTML = "This field is required";
        allInputs[0].classList.add("error");
        allLables[0].classList.add("error");
        return false
    } else if (dayState.rangeOverflow || dayState.rangeUnderflow) {
        dayValidity.innerHTML = "Must be a valid day";
        allInputs[0].classList.add("error");
        allLables[0].classList.add("error");
        return false;
    } else {
        dayValidity.innerHTML = "";
        allInputs[0].classList.remove("error");
        allLables[0].classList.remove("error");
        return true;
    }
}
function validationCheckYear() {
    CheckMonth()
    const yearState = year.validity;
    if (yearState.valueMissing) {
        yearValidity.innerHTML = "This field is required";
        allInputs[2].classList.add("error");
        allLables[2].classList.add("error");
        return false;
    } else if (yearState.rangeOverflow) {
        yearValidity.innerHTML = "Must be in the past";
        allInputs[2].classList.add("error");
        allLables[2].classList.add("error");
        return false;
    } else {
        yearValidity.innerHTML = "";
        allInputs[2].classList.remove("error");
        allLables[2].classList.remove("error");
        return true;
    }
}
function validationCheckMonth() {
    CheckMonth()
    const monthState = month.validity;
    if (monthState.valueMissing) {
        monthValidity.innerHTML = "This field is required";
        allInputs[1].classList.add("error");
        allLables[1].classList.add("error");
        return false;
    } else if (monthState.rangeOverflow || monthState.rangeUnderflow) {
        monthValidity.innerHTML = "Must be a valid month";
        allInputs[1].classList.add("error");
        allLables[1].classList.add("error");
        return false;
    } else {
        monthValidity.innerHTML = "";
        allInputs[1].classList.remove("error");
        allLables[1].classList.remove("error");
        return true;
    }
}
