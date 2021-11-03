import React, { useState } from 'react'
import { criarContato } from './axios'
import './criar.css'

function Criar() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit = (event) => {

        event.preventDefault()
        const data = {name: name, email: email}
        criarContato(data)
    } 

    return (
        
        <form className="criar-container" onSubmit={handleSubmit}>
            
            <h1 className="titulo">Insira seu novo contato</h1>

            <label>Nome:</label>
            <input type="text" onChange={(event) => setName(event.target.value)}/>

            <label> Email:</label>
            <input type="text" onChange={(event) => setEmail(event.target.value)}/>

            <button type="submit">Criar Contato</button>

        </form>
    )



}

export default Criar
