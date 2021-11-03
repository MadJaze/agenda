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
      <div className="supremeContainer">
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
          
        </div>
        <div className="asideContent">
        <div className="another-thing">
               <h2> This is another component inside this page... </h2>
                <ul>
                    <li>That girl made me an interview, and she asked to me to know something about PHP.</li>
                    <li>It seems they are looking hardly for someone with Backend knowlegde.</li>
                    <li>So, I wanna practice a little bit about Auth. Login and Etc...</li>
                    <li>I gotta be updating here what I´m about to do in this project. </li>
                </ul>
            </div> 
            
            <div className="another-thing2"> This is another component of this page.</div> 
            </div>
        </div>
  
    )

 }
    
    
    
   


export default Modificar