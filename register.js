function validateForm(){
    const name=document.getElementById("name").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;
    const phone=document.getElementById("phone").value;
    if(!name||!password||!confirmPassword){
        alert("All fields are required!!")
        return false;
    }
    if(password!=confirmPassword){
        alert("Passwords do not match!!")
        return false;
    }
    if(phone.length!=10){
        alert("Phone number should be 10 digits!!")
        return false;
    }
}