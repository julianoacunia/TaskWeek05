window.onload = function() {
// Validate name
    document.getElementById('input-name').addEventListener('blur', validateName)
    function validateName() {
        var name = document.getElementById('input-name').value;
        var formatName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
        if(name.length > 6 && name.match(formatName)) { 
            document.getElementById('spanName').textContent = "Approved"
            document.getElementById('spanName').className = 'approvedText'
        }
        else {
            alert("The name must have at least 6 characters and only one space in between")
            document.getElementById('spanName').textContent = "Not Approved"
            document.getElementById('spanName').className = 'errorText'
        }
    }
    document.getElementById('input-name').addEventListener('focus', cleanName);
    function cleanName(){
        document.getElementById('spanName').className = 'removedText';
    }

//Validate Email
    document.getElementById('input-email').addEventListener('blur',validateEmail)
    function validateEmail(){
        var email = document.getElementById('input-email').value;
        var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(mailFormat)){
            document.getElementById('spanEmail').textContent = "Approved";
            document.getElementById('spanEmail').className = 'approvedText';
        }
        else{
            alert("Please insert a valid email format");
            document.getElementById('spanEmail').textContent = "Not Approved";
            document.getElementById('spanEmail').className = 'errorText';
        }
    }
    document.getElementById('input-email').addEventListener('focus', cleanEmail);
    function cleanEmail(){
        document.getElementById('spanEmail').className = 'removedText';
    }

// Password Validate
    document.getElementById('input-password').addEventListener('blur',validatePassword)
    function validatePassword() {
        var password = document.getElementById('input-password').value
        var validPassword = /[A-Za-z0-9]+/
        var hasNumbers = /\d/
        if(password.length > 8 && password.match(validPassword) && password.match(hasNumbers)){
            document.getElementById('spanPass').textContent = "Approved"
            document.getElementById('spanPass').className = 'approvedText'
        } else {
            document.getElementById('spanPass').textContent = "Not Approved"
            document.getElementById('spanPass').className = 'errorText'
        }
    }
    document.getElementById('input-password').addEventListener('focus', cleanPass);
    function cleanPass(){
        document.getElementById('spanPass').className = 'removedText';
    }

// Confirm Password
    var password;
    document.getElementById('input-confirm').addEventListener('blur', confirmPassword);
    function confirmPassword(){
        password = document.getElementById('input-password').value;
        repeatPassword = document.getElementById('input-confirm').value;
        if(document.getElementById('input-password').value == document.getElementById('input-confirm').value){
            document.getElementById('spanRep').textContent = "Approved";
            document.getElementById('spanRep').className = 'approvedText';
        }
        else {
            document.getElementById('spanRep').textContent = "No coincide";
            document.getElementById('spanRep').className = 'approvedText';
        }
    }
    document.getElementById('input-confirm').addEventListener('focus', cleanRep);
    function cleanRep(){
        document.getElementById('spanRep').className = 'removedText';
    }

//PhoneNumber Validate
    document.getElementById('input-phone').addEventListener('blur', validatePhone);
    function validatePhone(){
        var phone = document.getElementById('input-phone').value;
        var validPhone = /^(0|[1-9]\d*)$/;
        console.log(phone);
        if (phone.length < 7 || isNaN(phone)){
            alert("Insert a valid phone number");
            document.getElementById('spanPhone').textContent = "Not Approved";
            document.getElementById('spanPhone').className = 'errorText';
        }
        else if(phone.match(validPhone)){
            document.getElementById('spanPhone').textContent = "Approved";
            document.getElementById('spanPhone').className = 'approvedText';
        }
    }

    document.getElementById('input-phone').addEventListener('focus', cleanPhone);
    function cleanPhone(){
        document.getElementById('spanPhone').className = 'removedText';
    }

//Address Validate
    document.getElementById('input-address').addEventListener('blur', validateAddress);
    function validateAddress(){
        var address = document.getElementById('input-address').value;
        var validAddress = /^[a-zA-Z]+(?:\s[0-9]+)+$/;
        console.log(address);
        if (address.length > 5 && address.match(validAddress)){
            document.getElementById('spanAdd').textContent = "Approved";
            document.getElementById('spanAdd').className = 'approvedText';
        }
        else {
            alert("Insert a valid address format");
            document.getElementById('spanAdd').textContent = "Not Approved";
            document.getElementById('spanAdd').className = 'errorText';
        }
    }
    document.getElementById('input-address').addEventListener('focus', cleanAdd);
    function cleanAdd(){
        document.getElementById('spanAdd').className = 'removedText';
    }

// City Validate
    document.getElementById('input-city').addEventListener('blur', validateCity);
    function validateCity(){
        var city = document.getElementById('input-city').value;
        var validCity = /^[a-zA-Z]+$/;
        console.log(city);
        if (city.length > 3 && city.match(validCity)){
            document.getElementById('spanCity').textContent = "Approved";
            document.getElementById('spanCity').className = 'approvedText';
        }
        else {
            alert("The city must have at least 3 or more characters");
            document.getElementById('spanCity').textContent = "Not Approved";
            document.getElementById('spanCity').className = 'errorText';
        }
    }
    document.getElementById('input-city').addEventListener('focus', cleanCity);
    function cleanCity(){
        document.getElementById('spanCity').className = 'removedText';
    }

// Postal Code Validate
    document.getElementById('input-cp').addEventListener('blur', validateCP);
    function validateCP(){
        var cp = document.getElementById('input-cp').value;
        console.log(cp);
        if (cp.length < 3 || isNaN(cp)){
            alert("The Postal Code must have at least 3 or more numbers");
            document.getElementById('spanCP').textContent = "Not Approved";
            document.getElementById('spanCP').className = 'errorText';
        }
        else {
            document.getElementById('spanCP').textContent = "Approved";
            document.getElementById('spanCP').className = 'approvedText';
        }
    }
    document.getElementById('input-cp').addEventListener('focus', cleanCP);
    function cleanCP(){
        document.getElementById('spanCP').className = 'removedText';
    }


//Age Validation
    document.getElementById('input-age').addEventListener('blur', validateAge);
    function validateAge(){
        var age = document.getElementById('input-age').value;
        var validAge = /^(0|[1-9]\d*)$/;
        if (age < 18 || isNaN(age)){
            alert("The age must be higher than 18");
            document.getElementById('spanAge').textContent = "Not Approved";
            document.getElementById('spanAge').className = 'errorText';
        }
        else if(age.match(validAge)){
            document.getElementById('spanAge').textContent = "Approved";
            document.getElementById('spanAge').className = 'approvedText';
        }
    }

    document.getElementById('input-age').addEventListener('focus', cleanAge);
    function cleanAge(){
        document.getElementById('spanAge').className = 'removedText';
    }

    // dni Validation
    document.getElementById('input-dni').addEventListener('blur', validateDNI);
    function validateDNI(){
        var dni = document.getElementById('input-dni').value;
        var validDNI = /^(0|[1-9]\d*)$/;
        if (dni.length < 7 || isNaN(dni) || dni.length > 8 ){
            alert("The DNI must have 7 or 8 numbers");
            document.getElementById('spanDNI').textContent = "Not Approved";
            document.getElementById('spanDNI').className = 'errorText';
        }
        else if(dni.match(validDNI)){
            document.getElementById('spanDNI').textContent = "Approved";
            document.getElementById('spanDNI').className = 'approvedText';
            return dni;
        }
    }

    document.getElementById('input-dni').addEventListener('focus', cleanDNI);
    function cleanDNI(){
        document.getElementById('spanDNI').className = 'removedText';
    }

    //Alert
    document.getElementById('btn-submit').addEventListener('click', finalResults);
    function finalResults(){
        var FullName = document.getElementById('input-name').value;
        var Email = document.getElementById('input-email').value;
        var Password = document.getElementById('input-password').value;
        var RepeatPassword = document.getElementById('input-confirm').value;
        var PhoneNumber = document.getElementById('input-phone').value;
        var Address = document.getElementById('input-address').value;
        var City = document.getElementById('input-city').value;
        var PostalCode = document.getElementById('input-cp').value;
        var DNI = document.getElementById('input-dni').value;
        var Age = document.getElementById('input-age').value;
        alert(`${FullName}\r\n${Email}\r\n${Password}\r\n${RepeatPassword}\r\n${PhoneNumber}\r\n${Address}\r\n${City}\r\n${PostalCode}\r\n${DNI}\r\n${Age}`);
    }
}



