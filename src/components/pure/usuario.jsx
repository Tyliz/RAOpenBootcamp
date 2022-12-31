import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const UsuarioComponent = () => {

    const [puntos, setPuntos] = useState(0);

    useEffect(() => {
        obtenerUsuario();
    }, [puntos]);


    const obtenerUsuario = () => {
        return axios.get('https://randomuser.me/api').then((response) => {
            if (response.status === 200) {
                console.table(response.data);
                alert(JSON.stringify(response.data));
            } else {
                throw new Error('No se pudo obtener el usuario')
            }
        }).catch((error) => {
            console.error(`[Error]: ${error}`);
        });
    }

    const sumarPuntos = () => {
        setPuntos(puntos + 1);
    }

    return (
        <div>
            <h1>Usuario: Tyliz</h1>
            <h2>Puntos: { puntos } </h2>
            <button onClick={ sumarPuntos }>
                Sumar Puntos
            </button>
        </div>
    );
}
