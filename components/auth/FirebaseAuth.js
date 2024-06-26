import initFirebase from '../../firebase/initFirebase'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import 'firebase/firestore'

initFirebase()

const FirebaseAuth = () => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
    return null;
}

export default FirebaseAuth