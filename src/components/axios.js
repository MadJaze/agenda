import axios from 'axios'

const baseUrl = "http://localhost:3000"

export const criarContato = async (contato) => {

    const url = `${baseUrl}/contacts`
    window.alert('contato criado com sucesso!')
    return await axios.post(url, contato)

}

export const listarContatos = async () => {

    const url = `${baseUrl}/contacts`
    
    return await axios.get(url)
   

}

export const deletarContato = async (id) => {
    const url = `${baseUrl}/contacts/${id}`
    return await axios.delete(url)
}


//tentando criar um "put request"


export const getContact = async id => {
    const result = await axios.get(`${baseUrl}/${id}`)
    return result.data
}
 
export const modificarContatoName = async (id, name) => {

    const url = `${baseUrl}/${id}`
    const task = await getContact(id)
    const object = {...task, name: name}
    const result = await axios.put(url,object)
    return result.data


}

export const modificarContatoEmail = async (id, email) => {

    const url = `${baseUrl}/${id}`
    const task = await getContact(id)
    const object = {... task, email : email}
    const result =  await axios.put(url, object)
    return result.data 
}



