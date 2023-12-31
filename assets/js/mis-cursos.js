class MiNavegacion extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Agregar estilos de Bootstrap al sombreado
        const bootstrapStyles = document.createElement('link');
        bootstrapStyles.rel = 'stylesheet';
        bootstrapStyles.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css';
        shadow.appendChild(bootstrapStyles);

        shadow.innerHTML += `
          <style>
            .navbar-brand {
              letter-spacing: 3px;
              color: #000000;
            }

            .navbar-brand:hover {
              color: #c24244;
            }

            .navbar-scroll .nav-link,
            .navbar-scroll .fa-bars {
              color: #000000;
            }

            .navbar-scrolled .nav-link,
            .navbar-scrolled .fa-bars {
              color: #7f4722;
            }

            .navbar-scrolled {
              background-color: #ffffff;
            }
          </style>

          <nav class="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0" style="background-color: #ffffff;">
            <div class="container">
              <img src="assets/idiomas.png" alt="" width="6%" height="50px">
              <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="d-flex justify-content-start align-items-center">
                  <i class="fas fa-bars"></i>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item active">
                    <a class="nav-link px-3" href="#!">Pagina Principal</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-3" href="#!">Area Personal</a>
                  </li>
                  <li class="nav-item">
                    <strong class="nav-link px-3 active" href="#!">Mis cursos</strong>
                  </li>
                </ul>

                <ul class="navbar-nav flex-row">
                  <li class="nav-item">
                    <a class="nav-link pe-3" href="#!">
                      <i class="fas fa-bell"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-3" href="#!">
                      <i class="fas fa-comment"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <div
                      style="width: 30px; height: 30px; margin-top: 05px; background-color: #666869; border-radius: 50%; color: white; font-weight: bold; font-size: 20px;">
                      AP
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section class="">
    <div class="mt-5" style="background-color: #b3b3b3;">
      <div class="container">
        <div class="row">
          <div class="col-12 mt-5">
            <h3 class="">Mis cursos</h3>
          </div>
        </div>
      </div>

      <div class="container bg-white" style="border-radius: 5px;">
        <br>
        <h3>Vista General</h3>
        <div class="row mb-3">
            <div class="col-1">
                <input type="text" placeholder="Todos"
                    class="form-control">
            </div>
            <div class="col-3">
                <input type="text" placeholder="Buscar"
                    class="form-control">
            </div>
            <div class="col-3">
                <input type="text" placeholder="Ordenar por nombre del curso"
                    class="form-control">
            </div>
                <div class="col-2">
                    <input type="text" placeholder="Tarjeta"
                        class="form-control">
                </div>
        </div>
        <div class="row">
          <!-- Tarjeta 1 -->
          <div class="col-md-4">
            <div class="card">
              <img src="assets/ruby.jpg" class="card-img-top" alt="Imagen 1">
              <div class="card-body">
                <h5 class="card-title">GENERAL INTERMEDIATE 4 19H00</h5>

                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
                10% completado
              </div>
            </div>
          </div>
          <!-- Tarjeta 2 -->
          <div class="col-md-4">
            <div class="card">
              <img src="assets/celeste 2.webp" class="card-img-top" alt="Imagen 2">
              <div class="card-body">
                <h5 class="card-title">GENERAL ADVANCED 1 19H00</h5>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 04%;" aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                4% completado

              </div>
            </div>
          </div>
          <!-- Tarjeta 3 -->
          <div class="col-md-4 mb-5">
            <div class="card">
              <img src="assets/celeste.jpg" class="card-img-top" alt="Imagen 3">
              <div class="card-body">
                <h5 class="card-title">GENERAL ADVANCED 2 19H00</h5>
                <div class="progress">
                  <div class="progress-bar" role="progressbar" style="width: 14%;" aria-valuenow="30" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                4% completado

              </div>
            </div>
          </div>

        </div>
        <div class="row align-items-center">
          <center>
            <div class="col-2">
              <button type="button" class="btn btn-secondary">Todos los cursos</button>
            </div>
            <br>

          </center>
        </div>
      </div>
      <br>
      <br>

    </div>
  </section>

  <footer class="bg-dark">
    <div class="container p-4">
      <!--Grid row-->
      <div class="row mt-4">
        <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <p class=" mb-4 text-white">Contactanos</p>
          <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fas fa-globe"></i></a>
          <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fas fa-mobile-alt"></i></a>
          <p class=" mb-4 text-white">Siganos</p>
          <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-facebook"></i></a>
          <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-twitter"></i>
          </a>
          <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-whatsapp"></i>
          </a>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-white">
          <center>
            <button type="button" class="btn btn-outline-secondary">
              <i class="fas fa-globe"></i>
              Contactar con el soporte del sitio</button>
            <p class="mt-2">Usted se ha identificado como ANGEL PAUL PATIÑO DIAZ (Cerrar Session)</p>
            <p>
              Politicas de Proteccion de Datos
            </p>
            <p>Reiniciar tour para usuario en esta pagina</p>
          </center>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0 text-white justify-content-end">
          <p class="mb-4 text-white">Descargar la app para dispositivos móviles</p>
          <center>
            <img src="assets/image (1).png" alt="" width="50%">

          </center>
        </div>
        <!--Grid column-->
      </div>
      </div>
      <!--Grid row-->
  </footer>
        `;
    }
}

customElements.define('mi-navegacion', MiNavegacion);
