import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { consultar } from '../../api/consultarApi.js';
import '../../common/common.scss'

export default function Index() {
    const [ consulta, setConsulta ] = useState([]);

    async function reunirConsultas() {
        const resp = await consultar()
        setConsulta(resp);
    }

    useEffect(() => {
        reunirConsultas();
    }, [])

    return(
        <div>
            <h1>Consultar</h1>
            <ul>
                {consulta.map(item => 
                    <div>
                        <li className='container space-second'>
                            <div>{item.id}</div>
                            <div>{item.nome}</div>
                        </li>
                    </div>
                )}
            </ul>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cadastro'>Cadastro</Link></li>
            </ul>
        </div>
    )
}