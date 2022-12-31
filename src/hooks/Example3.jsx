/**
 * Ejemplo de uso de:
 * - useState()
 * - useContext()
 *
 * crear con rfc
 */

import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null);

/**
 *
 * @returns Componente1
 * Dispone de un contecto que va a tener un valor
 * que recive desde un componente padre
 */
const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse
    // con los datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: { state.token }
            </h1>
            {/* Pintamos el Componente2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: { state.sesion }
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: 'sadfsadfasdfasdfasdf',
        sesion: 1,
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JWT: 132231ASDFSADFSAFDDFSADFIADSFN',
                sesion: sessionData.sesion + 1,
            }
        );
    }
    return (
        <miContexto.Provider value={ sessionData }>
            {/* Todo lo que este dentro puede leer los datis de sessionData */}
            {/* Además, si se actualiza, llos componentes de quí tambien se actualizan */}
            <h1>**** Ejemplo de useState() y useContext() ****</h1>
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}

