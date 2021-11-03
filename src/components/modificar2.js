import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  useHistory, useParams } from 'react-router-dom'

function Modificar2() {

    const { id } = useParams()    
    let history = useHistory() 

const [ name, setName ] = useState('');
const [ email, setEmail ] = useState('');
const [ID, setId] = useState(null)

console.log(name, email, ID)


const sendDataToApi = () => {
    axios.put(`http://localhost:3000/contacts/${id}`, {
        name, email
    }).then(() => {
        history.push('/listar')
    })
}

useEffect(() => {
setName(localStorage.getItem('name'));
setEmail(localStorage.getItem('email'));
setId(localStorage.getItem('id'))
}, [])

    return (
        <div>

            <form>
                <label> {id} Nome:</label>
                <input  type="text" 
                value={name}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input  type="text" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}/>
        <button type="button" onClick={sendDataToApi}>Modificar Contato</button>
            </form>
        </div>
    )


}

export default Modificar2