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
          <header>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html">GESTION DE RECLAMOS</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
-                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="./PAGES/garantia.html">Nueva Garantia</a></li>
                      <li><a class="dropdown-item" href="./PAGES/registrogarantia.html">Ver todas las garantías</a></li>
                      <li><a class="dropdown-item" href="./PAGES/cambio.html">Nuevo Cambio </a></li>
                      <li><a class="dropdown-item" href="./PAGES/registrocambio.html">Ver todos los cambios</a></li>
                      <li><a class="dropdown-item" href="./PAGES/devolucion.html ">Nueva Devolución</a></li>
                      <li><a class="dropdown-item" href="./PAGES/registrodevolucion.html">Ver todas las devoluciones</a></li>
                      <li><a class="dropdown-item" href="./PAGES/maps.html">Buscar dirección en Google Maps</a></li>

                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="https://www.buttman.com.ar/politica-de-cambios" target="_blank">Política de Cambios, Devoluciones y Garantías
                      </a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled"></a>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>

    </header>
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

//s" API KEY >AIzaSyDlx3ue0Xk2VwR9Bo8xM13dbrqFzSdkVXg
