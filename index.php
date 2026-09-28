<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Login / Register — Flip Card</title>
  <link rel="stylesheet" href="login.css" />
</head>
<body>

  <main class="page">
     <h1 class="page-title">Welcome to My Portfolio</h1>
    <div class="auth-wrap" aria-live="polite">

      <div class="flip-card" id="flipCard">
        <div class="flip-card-inner">

          <!-- LOGIN -->
          <section class="card face front">
            <h2 class="card-title">LogIn to view</h2>

            <form id="loginForm" >
              <div class="field">
                <label for="loginEmail">Email</label>
                <input id="loginEmail" name="email" type="email" required />
              </div>

              <div class="field">
                <label for="loginPassword">Password</label>
                <input id="loginPassword" name="password" type="password" required />
              </div>

              <button type="submit" class="btn primary">Sign In</button>

              <p class="muted">Don't have an account?
                <button type="button" class="link-btn" id="showRegister">Create one</button>
              </p>
            </form>
          </section>

          <!-- REGISTER -->
          <section class="card face back">
            <h2 class="card-title">Create Account</h2>

            <form id="registerForm" >
              <div class="field">
                <label for="regName">Full name</label>
                <input id="regName" name="name" type="text" required />
              </div>

              <div class="field">
                <label for="regEmail">Email</label>
                <input id="regEmail" name="email" type="email" required />
              </div>

              <div class="field">
                <label for="regPassword">Password</label>
                <input id="regPassword" name="password" type="password" required />
              </div>

              <button type="submit" class="btn primary">Register</button>

              <p class="muted">Already have an account?
                <button type="button" class="link-btn" id="showLogin">Sign in</button>
              </p>
            </form>
          </section>

        </div>
      </div>

      <div id="toast" class="toast" hidden></div>

    </div>
  </main>

  <script src="login.js"></script>
</body>
</html>
