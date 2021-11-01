import React, { useState } from 'react'
import axios from 'axios'
import {  useHistory, useParams } from 'react-router-dom'

function Modificar2() {

    const {id} = useParams()    
    let history = useHistory() 

const [ name, setName ] = useState('');
const [ email, setEmail ] = useState('');
 

console.log(name, email, id)


const sendDataToApi = () => {
    axios.put(`http://localhost:3000/contacts/${id}`, {
        name, email
    }).then(() => {
        history.push('/listar')
    })
}

    return (
        <div>
            <form>
                <label>Nome:</label>
                <input  type="text" placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}/>
                <label>Email:</label>
                <input  type="text" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
        <button onClick={sendDataToApi}>Modificar Contato</button>
            </form>
        </div>
    )


}

export default Modificar2