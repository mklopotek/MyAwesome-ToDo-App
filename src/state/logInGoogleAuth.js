import { auth as firebaseAuth, googleProvider } from '../firebaseConfig'

export const onLogInByGoogleClickHandler = () => () => {
    firebaseAuth.signInWithPopup(googleProvider)
        .catch((error) => alert('Błąd logowania'))
}