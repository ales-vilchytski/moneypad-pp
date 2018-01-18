import SoftKeyboardShownDetectorAndroid from './android/SoftKeyboardShownDetectorAndroid'
import SoftKeyboardShownDetectorPC from './pc/SoftKeyboardShownDetectorPC'
import getPlatform from '../utils/platformDetect'

let SoftKeyboardShownDetector;
let platform = getPlatform();
if (platform === 'Android') {
    SoftKeyboardShownDetector = SoftKeyboardShownDetectorAndroid;
} else {
    SoftKeyboardShownDetector = SoftKeyboardShownDetectorPC;
} // TODO: consider to load iOS specific ones

export {
    SoftKeyboardShownDetector
};
