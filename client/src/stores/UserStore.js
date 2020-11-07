import {extendObservable} from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this, {
            isLoggedIn: false,
            email:''
        })
    }
}

export default new UserStore();