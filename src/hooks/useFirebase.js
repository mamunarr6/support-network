import { useEffect, useState } from "react"
import initailizeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

initailizeAuthentication();

const useFirebase = () => {
    const [supports, setSupports] = useState();
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const auth = getAuth();
    const googlProvider = new GoogleAuthProvider();

    const loginUsingGoogle = () => {
        signInWithPopup(auth, googlProvider)
            .then(result => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            })
    }

    //Log out from website
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        });
    }

    //load data
    useEffect(() => {
        fetch('http://localhost:5000/supports')
            .then(res => res.json())
            .then(data => setSupports(data));
    }, [])
    return {
        supports,
        user,
        error,
        loginUsingGoogle,
        logOut
    }
}

export default useFirebase;