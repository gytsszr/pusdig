function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulasi validasi login (ganti ini dengan logika server-side)
  if (username === "user" && password === "pass") {
    alert("Login successful!");
    window.location.href = "/perpus/books";
  } else {
    alert("Invalid username or password");
  }
}
