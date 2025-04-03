import axios from "axios";


export function getTagById(id:string){
    return axios({
        method:'get',
        url:`/api/tag/${id}`,
    })
}