import fetch from 'isomorphic-fetch';
import config from '../config/index';
const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

const status = (response) => {  
    if (response.status >= 200 && response.status < 300) {  
      return Promise.resolve(response)  
    } else {  
      return Promise.reject(new Error(response.statusText))  
    }  
  }
  
const json = (response) => {  
    return response.json()  
  }
  

class Base {

    constructor(){
        this.root = config.coreUrl;
    }

     load(params, model) {
        let endpoint = `${this.root}/${model}`;
        return fetch(endpoint).then(status).then(json).then(data => data.data)
    }
    show(params, model) {
        let endpoint = `${this.root}/${model}/${params.id}`;
        return fetch(endpoint).then(status).then(json).then(data => data)
    }
     create(params, model) {
        let endpoint = `${this.root}/${model}`;
        let data = {
            method: "POST",
            headers,
            body: JSON.stringify(params)
        }
        return fetch(endpoint, data).then(status).then(json)
    }

     edit(params, model) {
        let endpoint = `${this.root}/${model}/${params._id}`;
        let data = {
            method: "PUT",
            headers,
            body: JSON.stringify(params)
        }
        return fetch(endpoint, data).then(status).then(json)
    }

     delete(id, model) {
        let endpoint = `${this.root}/${model}/${id}`;
        let data = {
            method: "DELETE",
            headers
        }
        return fetch(endpoint, data).then(status).then(json)
    }
}


export default new Base();

