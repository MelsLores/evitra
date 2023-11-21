import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validar el campo de correo electrónico
    if (!email || !isEmailValid(email)) {
      setEmailError('Por favor, introduzca un correo electrónico válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

     // Validar el campo de contraseña
     if (!password || !isPasswordValid(password)) {
        setPasswordError('La contraseña debe tener al menos 8 caracteres, una letra, un número y un carácter especial.');

        if (!password) {
          setPasswordError('Por favor, introduzca una contraseña.');
        } 

        isValid = false;

      } else {
        setPasswordError('');
      }

     
    if (isValid) {
      onLoginSuccess('menu');
    }
  };
/*
  return (
    <body class="bg-login">
    <div class="container">
      <form>
        <div class="formlg">
          <div>
            <label class="item1" htmlFor="email">
              Usuario
            </label>
          </div>
          <div>
            <input
              class="item2"
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p class="error-form">{emailError}</p>}
          </div>
        </div>

        <div class="formlg">
          <div>
            <label class="item1" htmlFor="password">
              Contraseña
            </label>
          </div>
          <div>
            <input
              class="item2"
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p class="error-form">{passwordError}</p>}
          </div>
        </div>

        <div class="btn-ingresar">
          <button type="button" class="btn" onClick={handleSubmit}>
            Ingresar
          </button>
        </div>

        <div class="btn-ingresar">
          <button type="button" class="btn">
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
    </body>

  );*/

  return(
    <body class="bg-login">
    <div class="container">
    <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label htmlFor="email">Usuario:</label>
        <input type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
        </div>
        {emailError && <p class="error-form">{emailError}</p>}

        <div class="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password"
              id="password"
              name="password"
              placeholder="********"
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

        </div>
        {passwordError && <p class="error-form">{passwordError}</p>}

        
        <a href='#' class="txt-form">Olvidé mi contraseña</a>
        
        <div class="button-group">
        <button type="submit">Ingresar</button>
        </div>
        <div class="button-group">
        <button type="button">Crear cuenta</button>
        </div>

    </form>
    </div>
</body>


  );
};

export default Login;
