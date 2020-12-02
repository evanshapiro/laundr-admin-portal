import UserStore from './stores/UserStore';

function fetchFromBackend(path, method = "GET"){
    if(!UserStore.isLoggedIn){
        throw new Error("not logged in")
    }
    return fetch(process.env.REACT_APP_BACKEND_ENDPOINT + "/v1/" + path, {
        method: method,
        headers: {
            Accept: 'application/json',
            "x-auth-token": UserStore.jwt
        }
    }).then(res => res.json()); // TODO catch unauthorized and update user store
}

function postToBackend(path, body){
    return fetch(process.env.REACT_APP_BACKEND_ENDPOINT + "/" + path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => {
        if(res.status !== 200) throw new Error(JSON.stringify(res.json()))
        return res.json()
    });
}

export function getUserData(){
    return fetchFromBackend('users')
}
export function getSubscriptionData(){
    return fetchFromBackend('subscriptions')
}
export function getOrderData(){
    return fetchFromBackend('orders')
}
export function getJWT(password){
    return postToBackend('auth', {
        "email": "admin.portal@laundr.io",
        "password": password
    })
}