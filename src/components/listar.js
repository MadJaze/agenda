import React, { useState, useEffect } from 'react'
import { listarContatos } from './axios'

function Listar() {
   const [lista, setLista] = useState("")
   
   
/*const fazerLista = async() => {
    const result = await listarContatos()
    setLista(result)
}*/

useEffect (() => {

    const asyncDados = async() => {

        const result = await listarContatos()
    setLista(result)
    }
    asyncDados()
    
}, [])
   

    return (
        <div>
             {/*   <button onClick={() => fazerLista()} className="btn-listar">Contatos cadastrados</button> */}

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
