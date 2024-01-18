let submit_button = document.getElementById("submit_button");
let dismiss = document.getElementById("dismiss");
let dismiss_container = document.getElementById("dismiss_container");
let main_container = document.getElementById("main_container");
let email_box = document.getElementById("email_box")
let error = document.getElementById("error"); 

submit_button.addEventListener("click", function() {  
    
    if (email_box.value == "" || email_box == null) {
        error.innerHTML = "Provide valid email";
        email_box.style.background = "pink";
        email_box.style.border = "1px solid red";
    } else {
        document.getElementById("response").innerHTML = email_box.value;
        dismiss_container.style.display = "block";
        main_container.style.display = "none";
    }
})

dismiss.addEventListener("click", function() {
    dismiss_container.style.display = "none";
    main_container.style.display = "flex"
    error.innerHTML = " ";
    email_box.value = " ";
    email_box.style.background = "none";
})

email_box.addEventListener("focus", function(){
    submit_button.style.backgroundImage = "linear-gradient(to bottom right, purple, rgb(235, 67, 7) )"; 
    submit_button.style.boxShadow = "0 4px 8px 0 rgba(235, 67, 7), 0 6px 20px 0 rgba(235, 67, 7)";
    email_box.style.background = "none";
})

email_box.addEventListener("blur", function(){
    submit_button.style.backgroundImage = "none"
    submit_button.style.boxShadow = "none";
    email_box.style.border = "1px solid gray";
})