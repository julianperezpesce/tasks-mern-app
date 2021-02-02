import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    //State para iniciar sesion
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });

    //Distruction de user
    const { email, password } = user;


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
                <h1>Iniciar sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <button 
                            type="submit"
                            className="btn btn-block btn-primario"
                        >Ingresar</button>
                    </div>
                </form>

                <Link to="/nueva-cuenta" className="enlace-cuenta">
                    Registrarse        
                </Link> 
            </div>
        </div>
        
     );
}
 
export default Login;