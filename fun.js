const  lengthslider= document.querySelector(".pass-length input"),
options =document.querySelectorAll(".option input"),
copyIcon =document.querySelector(".input-box i"),
passwordInput=document.querySelector(".input-box input"),
passwordIndicator=document.querySelector(".pass-indicator"),
generateBtn= document.querySelector(".generate-btn");

const characters={
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"!@#$%^&*():;.,<>`~_+-{}[]*"
}
const generatepassword=() =>{
    let staticpassword= "",
    randomPassword="",
    excludeDuplicates = false,
    passLength= lengthslider.value;

    options.forEach(option => {
       if(option.checked){
          if(option.id !== "duplicates" && option.id !== "space"){
             staticpassword +=characters[option.id];
          } else {
                excludeDuplicates=true;
          }
       }
    });
    for (let i = 0; i < passLength; i++) { 
        let randomChar= staticpassword[Math.floor(Math.random()* staticpassword.length)];
        if(excludeDuplicates){
            !randomPassword.includes(randomChar) || randomChar==" "? randomPassword +=randomChar :i--;
        }else{
            randomPassword +=randomChar; 
        }
    }
    passwordInput.value= randomPassword
}
const updatepassindicator=()=>{
    passwordIndicator.id =lengthslider.value <=8 || lengthslider.value==0 ? "weak" : lengthslider.value <=16 ? "medium" : "strong";
}
const   updateslider= () =>{
    document.querySelector(".pass-length span").innerText= lengthslider.value;
    generatepassword();
    updatepassindicator();
}
const copyPassword=() =>{
    navigator.clipboard.writeText(passwordInput.value);
    alert("Copied");
    
}
copyIcon.addEventListener("click",copyPassword);
lengthslider.addEventListener("input",updateslider);
generateBtn.addEventListener("click",generatepassword);
