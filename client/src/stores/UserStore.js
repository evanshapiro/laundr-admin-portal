import {extendObservable} from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this, {
            isLoggedIn: false,
            jwt:''
        })
    }
}

export default new UserStore();