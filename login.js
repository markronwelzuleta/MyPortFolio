// Detect if on login/register page
const isAuthPage = document.getElementById("flipCard") !== null;

if (isAuthPage) {

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const flipCard = document.getElementById("flipCard");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");
  const toast = document.getElementById("toast");

  function showToast(msg) {
    toast.textContent = msg;
    toast.hidden = false;
    setTimeout(() => (toast.hidden = true), 2000);
  }

  // Switch cards
  showRegister.addEventListener("click", () =>
    flipCard.classList.add("is-flipped")
  );
  showLogin.addEventListener("click", () =>
    flipCard.classList.remove("is-flipped")
  );

  /* ========================= LOGIN ========================= */
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    fetch("login.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        data = data.trim(); // remove spaces & new lines

        if (data === "invalid") {
          showToast("Incorrect email or password");
        } else {
          // SUCCESS → data contains username
          localStorage.setItem("loggedInUser", data);
          window.location.href = "home.php";
        }
      });
  });

  /* ========================= REGISTER ========================= */
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    fetch("register.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ name, email, password }),
    })
      .then((res) => res.text())
      .then((data) => {
        data = data.trim();

        if (data === "exists") showToast("Email already exists");
        else if (data === "success") {
          showToast("Account created! You can now login.");
          flipCard.classList.remove("is-flipped");
        } else showToast("Registration failed.");
      });
  });
}
