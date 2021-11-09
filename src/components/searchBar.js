import React, { useState, useEffect } from 'react'
//import CONTACTDATA from '../db.json'
import '../App.css'
import { listarContatos } from './axios'

const SearchBar = ({ placeholder }) => {

const [data, setData] = useState([]);
const [ input, setInput ] = useState("");
const [ output, setOutput ] = useState([]);



useEffect (() => {

    const asyncDados = async() => {

        const result = await listarContatos()
    setData(result)
    }
    asyncDados()
    
}, [])



useEffect (() => {

setOutput([])
data.data?.filter(val => {
    if(val.name.toLowerCase().includes(input.toLowerCase()))
     {    setOutput( output => [...output,val]) 
    }
})

}, [input])


    return (
        <div>
        <div className="searchBox">
            <input type="text"
             placeholder={placeholder} 
             className="search-txt" 
             onChange={e => setInput(e.target.value) }/>

            <button className="search-btn"><i className="fas fa-search"></i></button> 
        </div>
        
         <div className="dataResult">
         {output.map((val, key) => {
             return ( 
             <div className="user" key={key}>
             <p>{val.name} </p>
             </div>
           )

         })}

     </div>
     </div>
    )
}

export default SearchBar
