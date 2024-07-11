function validation() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    var usercheck = /^[A-Za-z]{3,30}$/;
    var emailcheck = /^[A-Za-z_0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;

    if(usercheck.test(username)){
        document.getElementById('errorname').innerHTML = " ";
    }else{
        document.getElementById('errorname').innerHTML = "**Invalid name";
    }

    if(emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML = " ";
    }else{
        document.getElementById('erroremail').innerHTML = "**Invalid Email";
    }

    if(numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML = " ";
    }else{
        document.getElementById('errornumber').innerHTML = "**Invalid Number";
        return false;
    }
}