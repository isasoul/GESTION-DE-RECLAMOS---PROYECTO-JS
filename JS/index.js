// Función para iniciar sesión
function login() {
    // Obtener valores de nombre de usuario y contraseña del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
 // lista de usuarios y contraseñas 
    let validCredentials = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" },
      { username: "user3", password: "pass3" }
    ];
  
// Verifica si el nombre de usuario y la contraseña son válidos
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
    
    function menu(){
      if (isValid){
          let mainMenu = document.createElement("div");
          mainMenu.innerHTML= ` 
           <main class="main__index">
          <section class="main__section">
                <div class="card text-bg-dark p-3 border border-danger text-center " >
                  <div class="card-body">
                    <h5 class="card-title text-center tittle__size">GARANTIAS</h5>
                    <a href="./PAGES/garantia.html" class="btn btn-danger text-bg-danger p-3 text-center ">INGRESAR SOLICITUD</a>
                  </div>
                </div>
                <div class="card text-bg-dark p-3 border border-danger text-center " >
                  <div class="card-body ">
                    <h5 class="card-title text-center">CAMBIOS</h5>
                    <a href="./PAGES/cambio.html" class="btn btn-danger text-bg-danger p-3 text-center  ">INGRESAR SOLICITUD</a>
                  </div>
                </div>
                <div class="card text-bg-dark p-3 border border-danger text-center " >
                  <div class="card-body ">
                    <h5 class="card-title text-center">DEVOLUCIONES</h5>
                    <a href="./PAGES/devolucion.html" class="btn btn-danger text-bg-danger p-3 text-center ">INGRESAR SOLICITUD</a>
                  </div>
                </div>
          </section>
       </main>
       

      <footer class="footer__section">
        <h2 class="footer__card--title">© Copyright Isabel Molina 2022</h2>
      </footer>
       ` 
        document.body.append(mainMenu);
      }
    }
    menu()

  }

  function menu(){
    if (isValid){
        let mainMenu = document.createElement("div");
        mainMenu.innerHTML= ` 
         <main class="main__index">
        <section class="main__section">
              <div class="card text-bg-dark p-3 border border-danger text-center " >
                <div class="card-body">
                  <h5 class="card-title text-center tittle__size">GARANTIAS</h5>
                  <a href="./PAGES/garantia.html" class="btn btn-danger text-bg-danger p-3 text-center ">INGRESAR SOLICITUD</a>
                </div>
              </div>
              <div class="card text-bg-dark p-3 border border-danger text-center " >
                <div class="card-body ">
                  <h5 class="card-title text-center">CAMBIOS</h5>
                  <a href="./PAGES/cambio.html" class="btn btn-danger text-bg-danger p-3 text-center  ">INGRESAR SOLICITUD</a>
                </div>
              </div>
              <div class="card text-bg-dark p-3 border border-danger text-center " >
                <div class="card-body ">
                  <h5 class="card-title text-center">DEVOLUCIONES</h5>
                  <a href="./PAGES/devolucion.html" class="btn btn-danger text-bg-danger p-3 text-center ">INGRESAR SOLICITUD</a>
                </div>
              </div>
        </section>
     </main>
     ` 
      document.body.append(mainMenu);
    }
  }
  menu()