setTimeout(loader,2000);

function loader(){
    var logo = document.getElementById("loader");
    logo.style.display="none";
}


window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  "sign-in-button",
  {
    //use size normal to show the captcha :)
    size: "invisible",
    callback: function(response) {
      submitPhoneNumberAuth();
     }
  }
);

//This Sends the Otp to the Mobile
function submitPhoneNumberAuth() {
    
    var phoneNumber = document.getElementById("phoneNumber").value;
    //Country Code appending
    phoneNumber = "+91"+phoneNumber;
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function(confirmationResult) {
        window.confirmationResult = confirmationResult;
        document.getElementById('step1').style.display="none";
        document.getElementById('step2').style.display="block";
    })
    .catch(function(error) {
        console.log(error);
    });
}

//This Verifies The otp
function submitPhoneNumberAuthCode() {
    var code = document.getElementById("code").value;
    confirmationResult.confirm(code).then(function(result) {
        alert("Phone Number Verified");
        window.location.reload();
    })
    .catch(function(error) {
        alert(error);
    });
}





var input = document.querySelector("#phoneNumber");
window.intlTelInput(input, {
    initialCountry: "IN",
    formatOnDisplay: true,
    separateDialCode: true,
    utilsScript: "external/js/utils.js"
});