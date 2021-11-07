import React, { useEffect, useState  } from 'react'
import './modificar.css'
import { Link } from 'react-router-dom';
import { deletarContato, listarContatos } from './axios'



 function Modificar() {

  const [array, setArray] = useState([]);

    useEffect (() => {

        const asyncDados = async() => {
            const result = await listarContatos()
            setArray(result)
        }

        asyncDados()

    }, [])

    const deleteById = async(id) => {
        deletarContato(id)
        const result = await listarContatos()
        setArray(result) 
    }

    const setData = (id, name, email) => {
        
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('id', id);
    }

    return (
      <div className="supremeContainer">
                <div className="main-content">
            
            {array.data?.map((data) => {
                return (
                
                   
                    <div className="container-update">
                        <i class="far fa-user-circle"></i>
                    <div className="card-content">
                        <ul className="header">
                        <li><span>{data.name} </span> </li>
                        <li>{data.email} </li>
                        </ul>
                        
                    </div>
                    
                    <div className="icons-action">
                    <Link to={`/modificar2/${data.id}`} 
                    onClick={() => setData(data.id, data.name, data.email)} >     <i className="far fa-edit"></i>  </Link>
                            <i class="far fa-trash-alt" onClick={() => deleteById(data.id)}></i>
                            </div>
                    </div>
                   
                )
            }) }
          
        </div>
        <div className="asideContent">
        <div className="another-thing">
               <h2> This is another component inside this page... </h2>
                <ul>
                    <li>That girl made me an interview, and she asked to me to know something about PHP.</li>
                    <li>It seems they are looking hardly for someone with Backend knowlegde.</li>
                    <li>So, I wanna practice a little bit about Auth. Login and Etc...</li>
                    <li>Now, im placing some buttons, some functions... Let´s also make a beautifull search bar. </li>
                </ul>
            </div> 
            
            <div className="another-thing2"> This is another component of this page.</div> 
            </div>
        </div>
  
    )

 }
    
    
    
   


export default Modificar