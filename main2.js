let id =(id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
 email = id("email"),
 password = id("password"),
 form = id("form"),
 DOB = id("Date"),
 PHONE = id("PHONE"),
 errorMsg = classes("error"),
 successIcon =classes("success-icon"),
 failureIcon = classes("failure-icon");
 
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.calssList.add('success');
    inputControl.classList.remove('error');
};
    const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const DOBValue = DOB.value.trim();
    const PhoneValue = PHONE.value.trim();
    }
    
    
    engine(username,0, "UserName cannot be blank");
    engine(email,1, "Email cannot be blank");
    engine(password,2, "Password cannot be blank");
    engine(Date,3, " Age cannot be less than 18");
    engine(PHONE,4,"has to be 10 digit");
});

let engine = (id, serial,message) =>{
    if (id.value.trim() === ''){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = " ";
        id.style.border = "2px solid green";

        successIcon[serial].style.opacity = "0";
        failureIcon[serial].style.opacity = "1";
    }
}

    if(usernameValue === '') {
        setError(username, 'username is required');
    } else{
         setSuccess(username);
     }

     if(email === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide valid email address');
     } else {
        setSuccess(email);
     }
     
     if(password === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
     } else {
       setSuccess(password);

      
     if(DOB === '') {
        setError('Input your DOB');
    } 
     if (age < 18){
        setError('Date has to be before 2005.');
     } else {
        setSuccess('DOB');

     }
       if(PHONE.length < 10) {
        setError(PHONE, 'Enter a Valid 10 digit Phone Number');
         } else 
       setSuccess(PHONE);
    } 
}



      