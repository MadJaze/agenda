import React, { useEffect, useState  } from 'react'
import './modificar.css'
import { Link } from 'react-router-dom';
import { listarContatos } from './axios'



 function Modificar() {

  const [array, setArray] = useState([]);

    useEffect (() => {

        const asyncDados = async() => {
            const result = await listarContatos()
            setArray(result)
        }

        asyncDados()

    }, [])


    const setData = (id, name, email) => {
        
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('id', id);
    }

    return (
      
        <div>
            
            {array.data?.map((data) => {
                return (
                
                    <Link to={`/modificar2/${data.id}`} 
                    onClick={() => setData(data.id, data.name, data.email)} >
                    <div className="container-update">
                    <div className="name-update">{data.name}</div>
                    <div>{data.email}</div>
                    </div>
                    </Link>
                )
            }) }


        </div>
    )

 }
    
    
    
   


export default Modificar