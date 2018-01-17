import { extendObservable } from 'mobx';

class AppState {

    constructor() {
        extendObservable(this, {
            softKeyBoardShown: false
        })
    }

}

export default AppState;