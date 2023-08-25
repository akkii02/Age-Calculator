let btn = document.getElementById("btn");
btn.addEventListener("click", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    let todayDate = new Date();
    
    let birthDateInput = document.getElementById("todayDate");
    let birthDate = new Date(birthDateInput.value); // Convert input value to Date object
    
    let currentTime = todayDate.getTime();
    let birthTime = birthDate.getTime();

    if(birthTime > currentTime){
        alert("Not Born Yet");
        birthDateInput.value = ""; 
    }else{
    const diffTime = currentTime - birthTime;
    const year = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
    );
    const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    displayResult(month, days, year);
    birthDateInput.value = ""; // Clear the input field
    }
}

function displayResult(month, days, year) {
    document.querySelector(".inputMonth").textContent = month;
    document.querySelector(".inputDays").textContent = days; // Fix the typo here
    document.querySelector(".inputYear").textContent = year;
}
