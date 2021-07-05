const inputEmail = document.getElementById("mail").value;
const inputPassword = document.getElementById("password").value;
const form = document.getElementById("form");

// inputEmail.value

form.onsubmit = () => {
    if (inputEmail == "123@gmail.com" && inputPassword == "12345") {
        return"/Back-end/Products/add-product.html";

    }else{
        return "/Front-end/My-account/my-account.html";
    }
}