import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta = () => {

    //State para iniciar sesion
    const [ user, setUser ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //Distruction de user
    const { nombre, email, password, confirmar } = user;


    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        });
        
    };

    const onSubmit = e => {
        e.preventDefault();

        //Validar los campos vacios



        //Pasar al action
    }


    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registro nueva cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="usuario">Nombre</label>
                        <input 
                            type="text"
                            id="usuario"
                            name="usuario"    
                            placeholder="Ingrese su nombre de usuario"
                            value={nombre}
                            onChange={onChange}
                        />                        
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"    
                            placeholder="Ingrese su dirección de correo"
                            value={email}
                            onChange={onChange}
                        />                        
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                            <input 
                                type="password"
                                id="password"
                                name="password"    
                                placeholder="Ingrese su contraseña"
                                value={password}
                                onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                            <input 
                                type="password"
                                id="confirmar"
                                name="confirmar"    
                                placeholder="Confirmar su contraseña"
                                value={confirmar}
                                onChange={onChange}
                            />
                    </div>

                    <div className="campo-form">
                        <button 
                            type="submit"
                            className="btn btn-block btn-primario"
                        >Aceptar</button>
                    </div>
                </form>

                <Link to="/" className="enlace-cuenta">
                    Iniciar sesión        
                </Link> 
            </div>
        </div>
        
     );
}
 
export default NuevaCuenta;