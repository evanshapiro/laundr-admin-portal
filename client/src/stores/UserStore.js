import {extendObservable} from 'mobx';

class UserStore{
    constructor(){
        extendObservable(this, {
            isLoggedIn: Boolean(process.env.REACT_APP_SKIP_LOGIN),
            jwt:''
        })
    }
}

export default new UserStore();