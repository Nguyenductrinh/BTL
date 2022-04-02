
// Check User name

let userID = document.getElementById("txtUserID");
let statusOfUserID = document.getElementById("statusOfUserID");

userID.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

userID.addEventListener("focusout", leaveUserId);

function leaveUserId() {
  // Cách 02: dùng BTCQ: [1, +duongvocung]
  var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
  if (userIDRegex.test(userID.value)) {
    statusOfUserID.textContent = "UserID hợp lệ";
    statusOfUserID.style.color = "blue";
  } else {
    statusOfUserID.textContent = "UserID không hợp lệ. Độ dài từ 5 - 12";
    statusOfUserID.style.color = "red";
  }
}

// Check Password

let Password = document.getElementById("txtPassword");
let statusOfPassword = document.getElementById("statusOfPassword");

Password.addEventListener("focus", function () {
  this.style.border = "1px solid red";
});

// Password.addEventListener("focusout", leavePassword);

 let leavePassword = ()=> {
  var PasswordRegex = /^[a-zA-Z0-9]{5,12}$/;
  if (PasswordRegex.test(Password.value)) {
    statusOfPassword.textContent = "Password hợp lệ";
    statusOfPassword.style.color = "blue";
  } else {
    statusOfPassword.textContent = "Password không hợp lệ. Độ dài từ 7 - 12";
    statusOfPassword.style.color = "red";
  }
}
Password.addEventListener("focusout", leavePassword);

// check nhập lại mật khẩu
let Password2 = document.getElementById("txtPassword2");
let statusOfPassword2 = document.getElementById("statusOfPassword2");

// Password2.addEventListener("focusout", leavePassword2);
let leavePassword2 = ()=> {

  if (Password.value === Password2.value ) {
    statusOfPassword2.textContent = " hợp lệ";
    statusOfPassword2.style.color = "blue";
  } else {
    statusOfPassword2.textContent = " không hợp lệ";
    statusOfPassword2.style.color = "red";
  }
}
Password2.addEventListener("focusout", leavePassword2);