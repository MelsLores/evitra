/*
import './styleApp.css';
import Footer from './components/FooterForm';
import Header from './components/HeaderForm';
import Inicio from './components/Inicio';

function App() {
  return(
    <div>
      <Header/>
      <Inicio/>
      <Footer/>
    </div>
    );
}

export default App;
*/

import React, { useState } from 'react';
import './styleApp.css';
import Footer from './components/FooterForm';
import Header from './components/HeaderForm';
import Inicio from './components/Inicio';
import Login from './components/LoginForm'; // Importa el componente de Login
import Menu from './components/Menu';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); // Estado para controlar el componente actual

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  const handleLoginSuccess = (screen) => {
    setCurrentScreen(screen); // Cambia a la pantalla indicada al iniciar sesión correctamente
  };

  let screenToShow;
  if (currentScreen === 'login') {
    screenToShow = <Login onLoginSuccess={handleLoginSuccess} />;
  } else if (currentScreen === 'menu') {
    screenToShow = <Menu />;
  }

  return (
    <div>
      <Header/> {/* Pasa la función de cambio de pantalla al Header */}
      {screenToShow}
      <Footer />
    </div>
  );
}

export default App;
