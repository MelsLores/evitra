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
import Login from './components/LoginForm'; 
import Menu from './components/Menu';

function App() {
  const [currentScreen, setCurrentScreen] = useState('inicio'); // Estado para controlar el componente actual

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  const handleLoginSuccess = (screen) => {
    setCurrentScreen(screen); // Cambia a la pantalla indicada al iniciar sesión correctamente
  };

  let screenToShow;
  if (currentScreen === 'inicio') {
    screenToShow = <Inicio />;
  } else if (currentScreen === 'login') {
    screenToShow = <Login onLoginSuccess={handleLoginSuccess} />;
  } else if (currentScreen === 'menu') {
    screenToShow = <Menu />;
  }

  return (
    <div>
      <Header onScreenChange={handleScreenChange} /> {/* Pasa la función de cambio de pantalla al Header */}
      {screenToShow}
      <Footer />
    </div>
  );
}

export default App;
