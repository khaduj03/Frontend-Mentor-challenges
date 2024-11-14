let year=document.querySelector(".year")
let month=document.querySelector(".month")
let day=document.querySelector(".day")

//we defined a previousValues for animation
let previousValues={year:null , month:null , day:null}



function validateYear() {
    const year = parseInt(document.getElementById("yearInput").value);
    const yearError = document.getElementById("yearError");

    if (!year) {
        
        yearError.textContent = "this Failed is required";
        console.log("fales")
        return false;
    }

     else if(year>2024){
        yearError.textContent = "Must be the past";
        return false
    }
    
    
    else if(year<1900){
        yearError.textContent = "Must be valied year";
        return false
    }


    else {
        yearError.textContent = "";
        return true;

    }
}



function validateMonth() {
    const month = parseInt(document.getElementById("monthInput").value);
    const monthError = document.getElementById("monthError");

    if (!month ) {
        monthError.textContent ="this Failed is required";
        return false;
    }  else if(month > 12){
        monthError.textContent = "Must be valied month";
        return false
    }
    else {
        monthError.textContent = "";
        return true;
    }
}


function validateDay() {
    const day = parseInt(document.getElementById("dayInput").value);
    const dayError = document.getElementById("dayError");

    if (!day ) {
        dayError.textContent ="this Failed is required";
        return false;
    } else if(day > 31){
        dayError.textContent = "Must be valied day";
        return false
    }
    else {
        dayError.textContent = "";
        return true;
    }
}


function calculateAge(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();


    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {years , months , days } 
}


function showAge() {
    const yearValid = validateYear();
    const monthValid = validateMonth();
    const dayValid = validateDay();

    if (yearValid && monthValid && dayValid) {
        const year = parseInt(document.getElementById("yearInput").value);
        const month = parseInt(document.getElementById("monthInput").value);
        const day = parseInt(document.getElementById("dayInput").value);

        const age = calculateAge(year, month, day);


        document.querySelector(".year").textContent = age.years;
        document.querySelector(".month").textContent =age.months;
        document.querySelector(".day").textContent = age.days;

       
       
        if (previousValues.year !==age.years) {
            document.querySelector(".year").textContent = age.years;
            document.querySelector(".year").classList.add("anim");
            setTimeout(() => document.querySelector(".year").classList.remove("anim"), 300);
            previousValues.year = age.years;}

        
       
        if (previousValues.month !==age.months) {
            document.querySelector(".month").textContent =age.months;
            document.querySelector(".month").classList.add("anim");
            setTimeout(() => document.querySelector(".month").classList.remove("anim"), 300);
            previousValues.month =age.months; 
        }

        
       
        if (previousValues.day !==age.days) {
            document.querySelector(".day").textContent =age.days;
            document.querySelector(".day").classList.add("anim");
            setTimeout(() => document.querySelector(".day").classList.remove("anim"), 300);
            previousValues.day =age.days;
        }
    } else {
        document.querySelector(".year").textContent = "- - ";
        document.querySelector(".month").textContent = "- - ";
        document.querySelector(".day").textContent = "- - ";
    }
    
}



