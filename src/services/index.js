
import axios from "axios";

const RootApi='https://jsonplaceholder.typicode.com'




const Get =(path)=>{
    const promise= new Promise((resolve,reject)=>{
        axios.get(`${RootApi}/${path}`)
        .then((res)=>{

            resolve(res.data)
        })
        
        .catch((err)=>{
            reject(err)
        })
            
    })

    return promise;

}

const getBlog=()=>Get('posts')

const API ={
    getBlog
}

export default API