import React from 'react'

const Login = () => {
return (
    // onSubmit={handleSubmit}
    <form className='formlg'>
    <div className="grid-item item1">1
        <input type="email" id="email" name="email" placeholder="Correo Electrónico" required/>
    </div>
    <div className="grid-item item2">2
        <input type="password" id="password" name="password" placeholder="Contraseña" required/>
        </div>
        <div className="grid-item item3"> 3 
    <span>Usuario</span>
    </div>  
    <div className="grid-item item4">4
        <span>Contraseña</span>
        </div>
    
    <div className="grid-item item5">5
        <button type="submit" class="btn">Ingresar</button>
    </div>
    </form>
)}

export default Login