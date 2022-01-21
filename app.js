// const fs = require('fs/promise')

// fs.readFile('files/file.txt')
//     .then(data =>console.log(data))
//     .cathc(error=>console.log(error.message))

// const fileOperation = async (filePath,action,data)=>{
//     switch(action){
//         case 'read':
//             const result = await fs.readFile(filePath)
//             const text = result.toString()
//             // считывавет
//             console.log(text)
//             break;
//         case 'add':
//             await fs.appendFile(filePath,data) 
//             // Добавляет 
//             break;
//         case 'replace':
//             await fs.writeFile(filePath,data)
//             // перезаписывает
//             break;
//         case 'remove':
//             await fs.unlink(filePath)
//             // удаляет
//         default:
//             console.log('Unknow command')
//     }
// }

// fileOperation('files/file.txt','add','/n Не плюйся')
// fileOperation('files/file.txt','replace')
// fileOperation('files/file3.txt','remove')

// 1.получить все контакты
// 2.получить один товар по id
// 3.Добваить товар 


const productsOperations = require('./products')

const invokeAction = async({actions,id,name,price})=>{
    switch(actions){
        case 'getAll':
            const products = await productsOperations.getAll()
            console.log(products)
            // взять все товары
            break;
        case 'getById':
            const contacts = await productsOperations.getById(id)
            break
        case 'add':
            const newContact = await productsOperations.add(enail,phone,name)
            break;
        case 'updateById':
            const updateContacts = await productsOperations()
        case 'remove':
            const deleteContacts = await productsOperations.remove(id)
            break
        default:
            console.log('unknow command')
            break;
    }
}
// invokeAction({actions:'getAll'})
// invokeAction({actions:'getById',id:1})
// invokeAction({actions:'add',name:'',price:33000,email,phone})
// invokeAction({actions:'updateById',id:'1',name:'',email:'',phone:''})
// invokeAction({actions:'remove',id:'1'})

console.log(process.argv)