// Show stored user on page load
window.onload = function () {
  const localUser = localStorage.getItem("username");
  const sessionUser = sessionStorage.getItem("username");

  if (localUser) {
    document.getElementById("message").innerText = "Welcome back (local): " + localUser;
  } else if (sessionUser) {
    document.getElementById("message").innerText = "Welcome back (session): " + sessionUser;
  }
};
;
function login() {
  const username = document.getElementById("username").value;
  const remember = document.getElementById("rememberMe").checked;

  if (!username.trim()) {
    alert("Please enter a username.");
    return;
  }

  localStorage.removeItem("username");
  sessionStorage.removeItem("username");

  if (remember) {
    localStorage.setItem("username", username);
    document.getElementById("message").innerText = "Welcome (stored in localStorage): " + username;
  } else {
    sessionStorage.setItem("username", username);
    document.getElementById("message").innerText = "Welcome (stored in sessionStorage): " + username;
  }
}

function logout() {
  localStorage.removeItem("username");
  sessionStorage.removeItem("username");
  document.getElementById("message").innerText = "You are logged out.";
}
