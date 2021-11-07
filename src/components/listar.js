import React, { useState, useEffect } from 'react'
import { listarContatos } from './axios'
import './modificar.css'

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
        <div  className="supremeContainer">
        
        
                <div className="main-content">
            
             {/*   <button onClick={() => fazerLista()} className="btn-listar">Contatos cadastrados</button> */}

                {lista && lista.data?.map(element => {
                    return (
                        <div className="container-update" key = {element.id}>
                          
                     <div><i class="far fa-user-circle"></i>  </div> 
                          
                             <div className="card-content">    
                             <span>{element.name} </span>
                            <p className="emailElement">{element.email}</p>
                            </div>

                            
                            <div className="icons-action">
                            <i className="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                            </div>
                        </div>
                    )
                })}
</div>
        </div>
    )
}

export default Listar
