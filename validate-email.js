function ValidateEmail(your-email)  
    {  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(your-email.value.match(mailformat))  
     {  
    return true;  
      }  
else  
     {  
    alert("You have entered an invalid email address!");  
    your-email.focus();  
    return false;  
     }  
    }  