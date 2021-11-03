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
      
        <div className="main-content">
            
            {array.data?.map((data) => {
                return (
                
                    <Link to={`/modificar2/${data.id}`} 
                    onClick={() => setData(data.id, data.name, data.email)} >
                    <div className="container-update">
                        <i class="far fa-user-circle"></i>
                    <div className="card-content">
                        <ul className="header">
                        <li><span>{data.name} </span> </li>
                        <li>{data.email} </li>
                        </ul>
                        
                    </div>
                    
                    </div>
                    </Link>
                )
            }) }
            <div>
            <div className="another-thing">
                This is another component inside this page...
            </div>
            </div>
        </div>
    )

 }
    
    
    
   


export default Modificar