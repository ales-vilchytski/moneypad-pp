import { extendObservable } from 'mobx';

class AppState {

    constructor() {
        extendObservable(this, {
            softKeyBoardShown: false,
            appMenuOpen: false
        })
    }

}

export default AppState;