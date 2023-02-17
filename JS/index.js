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

  function getWeather() {
    const apiKey = '6589ef6605b33c5bcb13d27216591844';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherElement = document.getElementById('weather');
        const weatherHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherElement.innerHTML = weatherHTML;
      })
      .catch(error => console.error(error));
  }
  
  