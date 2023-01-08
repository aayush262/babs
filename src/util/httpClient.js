import axios from 'axios';

const headers = {
    "Content-Type": 'application/json',
    "Access-Control-Allow-Origin": "*"
}

const http = axios.create({
    baseURL: 'babsadmin-production.up.railway.app/' ,
    responseType: 'json'
})

function get(url,params={}){
    return http.get(url,{
        headers
    })
}

function post(url,data,params={}){
    return http.post(url,data,{
        headers,
        params
    })
}

export default {
    get,
    post
}