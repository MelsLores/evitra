import React from 'react'
import logo from '../images/logo_evitra.png'

const Header = () => {

return(
<header class="navbar">
    <nav>
        <ul class="menu">
            <li class="iniciar"><a href='#'></a></li>
            <li class="iniciar"><a href='#'></a></li>
        </ul>
    </nav>
    <img src={logo} alt="logo" class="img-logo"/>
</header>


);
}

export default Header