import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cadastrar } from '../../api/consultarApi.js';

export default function Index() {
    const [ nome, setNome ] = useState('')

    function clear(){
        setNome('')
    }

    async function enviarCadastro(){
        const resp = await cadastrar(nome);
        return resp;
    }

    return(     
        <div>
            <ul>
                <li><Link to='/consulta'>Consulta</Link></li>
                <li><Link to='/'>Home</Link></li>
            </ul>
            <h1>Casastrar</h1>
            <form action="">
                <label htmlFor="">Informe o nome do pet</label>
                <input value={nome} onChange={e => {
                        setNome(e.target.value);
                    }
                }/>
            </form>
            <button onClick={async _ => {
                await enviarCadastro();
                clear();
            }}>Enviar</button>
        </div>
    )
}