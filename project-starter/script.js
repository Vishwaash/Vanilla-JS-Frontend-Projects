const form = document.getElementById('my_form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //conditionals 
    if(name === ''){
        console.log("EMAIL ISSUE");
        alert("Please Enter your name");
        return;
    }
    if(email === ''){
        alert("Please Enter your mail");
        return;
    }
    if(!validateEmail(email)){
        alert("Please enter a valid email address");
        return;
    }
    if(password === ''){
        alert("Please enter a password");
        return;
    }
    //If all the fields are valid,you can submit the form or perform the other function here
    alert('Form submitted successfully');
});


function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}