class MiCampusLogin extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Define the structure of the shadow DOM
        this.shadowRoot.innerHTML = `
            <style>
            body {
                background-color: #f4f4f4;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            
            .card {
                width: 600px;
                height: 500px;
                padding: 30px;
                box-sizing: border-box;
                background-color: #ffffff;
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
                border-radius: 5px;
            }
            
            .logo img {
                width: 40%;
                height: auto;
                text-align: center;
            }
            
            .input input {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                border-radius: 5px;
                outline: none;
            }
            
            .input input[type="submit"] {
                background-color: #224b9d;
                color: #ffffff;
                cursor: pointer;
            }
            
            .link a {
                text-decoration: none;
                color: #3366cc;
            }
            
            .idioma select {
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                border: 1px solid #cccccc;
                border-radius: 5px;
                outline: none;
            }
            
            /* Eliminar bordes predeterminados del select */
            .idioma select {
                width: 100%;
                margin-right: 0px;
                border: none;
                outline: none;
                padding: 5px;
                color: #224b9d;
            }
            
            /* Estilo para el enlace de "Aviso de cookies" */
            .idioma span {
                margin-left: 295px;
                color: #224b9d;
                /* Puedes ajustar este margen según tu preferencia */
            }
            
            /* Alinear el enlace al final de la fila */
            .idioma {
                display: flex;
                align-items: center;
            }            </style>
            <div class="card">
                <div class="logo">
                    <center>
                        <img src="assets/idiomas.png" alt="">
                    </center>
                </div>
                <div class="input">
                    <input type="text" placeholder="${this.getAttribute('usernamePlaceholder') || 'Ingrese su usuario o correo'}">
                    <input type="password" name="" id="" placeholder="${this.getAttribute('passwordPlaceholder') || 'Ingrese su contraseña'}">
                    <input type="submit" value="${this.getAttribute('submitButtonText') || 'Acceder'}" class="btn btn-primary">
                </div>
                <div class="link">
                    <center>
                        <a href="${this.getAttribute('forgotPasswordLink') || ''}">${this.getAttribute('forgotPasswordText') || '¿Ha extraviado la contraseña?'}</a>
                    </center>
                </div>
                <div class="idioma">
                    <select name="dssd" id="">
                        <option value="${this.getAttribute('languageOptionValue') || 'Español - internacional (es)'}">${this.getAttribute('languageOptionText') || 'Español - internacional (es)'}</option>
                    </select>
                    <a href="${this.getAttribute('cookiesLink') || ''}">${this.getAttribute('cookiesText') || 'Aviso de cookies'}</a>
                </div>
            </div>
        `;
    }
}

// Define the custom element
customElements.define('mi-campus-login', MiCampusLogin);
