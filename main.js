let submit_button = document.getElementById("submit_button");
let dismiss = document.getElementById("dismiss");
let dismiss_container = document.getElementById("dismiss_container");
let main_container = document.getElementById("main_container");

submit_button.addEventListener("click", function() {
    let email_box = document.getElementById("email_box").value;    document.getElementById("response").innerHTML = email_box;
    dismiss_container.style.display = "block"
    main_container.style.display = "none"
})

dismiss.addEventListener("click", function() {
    dismiss_container.style.display = "none";
    main_container.style.display = "block"
})