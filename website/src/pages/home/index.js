import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to='/consulta'>Consulta</Link></li>
                <li><Link to='/cadastro'>Cadastro</Link></li>
            </ul>
        </div>
    )
}