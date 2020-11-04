function fetchFromBackend(path, method = "GET"){
    return fetch(process.env.REACT_APP_BACKEND_ENDPOINT + "/v1/" + path, {
        method: method,
        headers: {
            Accept: 'application/json'
        }
    }).then(res => res.json());
}

export function getUserData(){
    return fetchFromBackend('users')
}