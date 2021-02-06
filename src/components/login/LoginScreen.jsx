import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({history}) => {

    const { dispatch } = useContext(AuthContext);

    const handleClick = ()=> {
        dispatch({
            type : types.login,
            payload : {
                name: 'Javier Soto'
            }
        });

        //Con el push nos dirigimos hacia la ruta que le pasamos al metodo
        //con la opcion de poder dar en la flecha atras del navegador y que
        //nos regrese a la pantalla anterior
        
        //history.push('/');
        
        //Con el replace, la diferencia es que al darle en la flecha hacia
        //atras del navegador no podremos regresar a la pantalla desde donde 
        //hicimos la redireccion
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>

            <hr/>

            <button className="btn btn-primary"
                    onClick={handleClick}>
                Login
            </button>
        </div>
    )
}
