import { auth as firebaseAuth, googleProvider } from '../firebaseConfig'

export const onLogInByGoogleClickHandler = () => () => {
    firebaseAuth.signInWithPopup(googleProvider)
        .catch((error) =>{
console.log(error)
alert('Błąd logowania')}) 
}