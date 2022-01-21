const fs = require('fs/promises')
const path = require('path')
const {v4} = require('uuid')

const filePath = path.join(__dirname,'contacts.json')
// считывает путь и добавляет / и нормализирует путь

const getAll = async()=>{
    const data = await fs.readFile(filePath)
    const contacts = JSON.parse(data)
    console.log(contacts)
    return (contacts)
    // считывает все файлы
}

const getById = async(id)=>{
    const contacts = await getAll()
    const result = contacts.find(contact => contact.id === id)
    if(!result){
        return null
    }
    return result
    // возвращает по id
}

const add = async(name,email,phone)=>{
    const data ={name,phone,email,id:v4()}

    // добавляем id

    const contacts = await getAll()
    contacts.push(data)
    await fs.writeFile(filePath,JSON.stringify(contacts,null,2))
    // добавляеем новые данные в json
    return data
}

const updateById = async(id,name,email,phone)=>{
    const contacts = await getAll()
    const idx = contacts.findIndex(contact => contact.id ===id)
    contacts[idx]= {id,name,email,phone}
    await fs.writeFile(filePath,JSON.stringify(contacts,null,2))

    if(idx === -1)
    {
        return null
    }

    return contacts[idx]
}


const remove = async(id)=>{
    // const contacts = await getAll()
    // const idx = contacts.filter((_,index)=>idx !==index)
    // if(idx == -1){
    //     return null
    // }

    // const deleteContacts = contacts[idx]
    // return deleteContacts



    const contacts = await getAll()
    const idx = contacts.findIndex(contact => contact.id ===id)
    if(idx === -1)
    {
        return null
    }
    contacts.splice(idx,1)
    await fs.writeFile(filePath,JSON.stringify(contacts,null,2))
return contacts[idx]
}



module.exports = {
    getAll,
    getById,
    add,
    remove,
    updateById
}