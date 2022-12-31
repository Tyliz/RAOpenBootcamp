/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintata por defecto
            aquello que se encuentre */}
            { props.children }
        </div>
    );
}

export default Example4;
