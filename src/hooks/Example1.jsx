/**
 * Ejemplo de uso del useState
 *
 * Crear un componente de tipo función y accceder a su estado
 * privado a través de un hook y además poder modificarlo
*/

import React, { useState } from 'react';

const Example1 = () => {

    // Valor Inicial para un contador
    const valorInicial = 0;

    // Valor Inicial para una persona

    const personaInicial = {
        name: 'Tyliz',
        email: 'caosavenger@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste sea reflejado en la vista del componente
    */

    const [contador, setContador] = useState(valorInicial);

    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el stado del contador privado
     */
    function incrementarContador() {
        setContador(contador + 1);
    }

    /**
     *
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@correo.com'
        });
    }

    return (
        <div>
            <h1>*** Ejemplo de hook useState() ***</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>

            <button onClick={ incrementarContador }>
                Incrementar Contador
            </button>
            <button onClick={ actualizarPersona }>
                Actualizar Persona
            </button>
        </div>
    );
}

export default Example1;
