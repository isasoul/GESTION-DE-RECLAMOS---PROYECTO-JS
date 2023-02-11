// Función para iniciar sesión
function login() {
    // Obtener valores de nombre de usuario y contraseña del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Supongamos que aquí tenemos una lista de usuarios y contraseñas válidos
    let validCredentials = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" },
      { username: "user3", password: "pass3" }
    ];
  
    // Verificar si el nombre de usuario y la contraseña son válidos
    let isValid = false;
    for (let i = 0; i < validCredentials.length; i++) {
      if (username === validCredentials[i].username && password === validCredentials[i].password) {
        isValid = true;
        break;
      }
    }
  
    // Si el inicio de sesión es exitoso
    if (isValid) {
      Toastify({
        text: "Inicio de sesión exitoso!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: 'right',
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
      }).showToast();
    } else {
      // Si el inicio de sesión falla, mostrar un mensaje de error
      Toastify({
        text: "Usuario o contraseña incorrectos",
        duration: 3000,
        close: true,
        gravity: "top",
        position: 'right',
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
      }).showToast();
    }
  }
  