document.querySelector("#signin").onclick=signin;

function signin(){
    var email=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(myInput.value.match(lowerCaseLetters)){

    }
    else{
        alert("Email invalid");
    }
}