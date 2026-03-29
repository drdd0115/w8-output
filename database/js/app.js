const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// 自動入力処理
addEventListener("DOMContentLoaded", function() {
  const savedEmail = localStorage.getItem("savedEmail");
  const savedPassword = localStorage.getItem("savedPassword");

  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  if (savedPassword) {
    passwordInput.value = savedPassword;
  }
});

// ボタン押下処理
loginForm.addEventListener("submit", function(e) {
  // ほかのページがないので、送信を一旦止める
  e.preventDefault();

  localStorage.setItem("savedEmail", emailInput.value);
  localStorage.setItem("savedPassword", passwordInput.value);

});