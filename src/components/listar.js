import React, { useState } from 'react'
import { listarContatos } from './axios'

function Listar() {
   const [lista, setLista] = useState("")
   
   
const fazerLista = async() => {
    const result = await listarContatos()
    setLista(result)
}


   
    return (
        <div>
                <button onClick={() => fazerLista()} className="btn-listar">Contatos cadastrados</button>

                {lista && lista.data?.map(element => {
                    return (
                        <div className="contact-container" key = {element.id}>
                            <ul className="cards">
                                
                        <li>{element.name}</li>
                        <li>{element.email}</li>
                            </ul>
                        </div>
                    )
                })}

        </div>
    )
}

export default Listar
