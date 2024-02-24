const mySubmit = document.getElementById("submit");

function validateInputFirst() {
    let inputElement = document.getElementById('firstName');
    if (inputElement.value.trim() === '') { 
        inputElement.style.borderColor = 'red'; 
        inputElement.placeholder = 'This field is required'; 
    } else {
        inputElement.style.borderColor = 'green'; 
        inputElement.placeholder = ''; 
    }
}

function validateInputLast() {
    let inputElement = document.getElementById('lastName');
    if (inputElement.value.trim() === '') { 
        inputElement.style.borderColor = 'red'; 
        inputElement.placeholder = 'This field is required'; 
    } else {
        inputElement.style.borderColor = 'green'; 
        inputElement.placeholder = ''; 
    }
}

function validateInputEmail() {
    let inputElement = document.getElementById('email');
    if (inputElement.value.trim() === '') { 
        inputElement.style.borderColor = 'red'; 
        inputElement.placeholder = 'This field is required'; 
    } else if (!inputElement.value.includes("@")) {
        inputElement.style.borderColor = 'red';
        inputElement.value = 'Please enter a Valid email';
    }
    else {
        inputElement.style.borderColor = 'green'; 
        inputElement.placeholder = ''; 
    }
}

mySubmit.onclick = function() {
    fName = document.getElementById('firstName');
    lName = document.getElementById('lastName');
    eMail = document.getElementById('email');
    input = fName, lName, eMail

    if (input.value == ""){
        alert("Please enter the required information")
    } else{ 
        alert("JUST SO YOU KNOW! This form does not perform any real action, so if you would like to e-mail me, you can reach me at hen.baileyk@gmail.com")
    }
}
