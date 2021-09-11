import axios from 'axios'

export async function apiRequest(method, url, body = {}) {

    let promise, headers = {
        'Content-Type': "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        // "JsonStub-User-Key": "a11dea59-1923-4e45-83a8-6676bc896d75",
        // "JsonStub-Project-Key": "fd7f1136-86f3-4c0e-b3c4-627c73493a4e"
    };
    switch (method) {
        case "GET":
            promise = new Promise((resolve,reject) => {
                axios.get(url, {headers: headers})
                .then((res) => {
                    let result = {
                        data: res.data,
                        isError: false,
                        status: res.status
                    }
                    resolve(result)
                })
                .catch((err) => {
                    let result = {
                        isError: true,
                        error: err
                    }
                    resolve(result)
                })
            })
            return promise;            
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default: 
            break;
    }
}