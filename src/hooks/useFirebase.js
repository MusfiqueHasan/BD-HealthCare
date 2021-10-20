import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [userDisplayName, setUserDisplayName] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [auth])

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createNewAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            
    }
    const setUserName = (name) => {
        console.log(name)
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                // An error occurred
            });
    }
    
    return {
        user,
        setUser,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        userDisplayName,
        setUserDisplayName,
        setError,
        error,
        setUserName,
        processLogin,
        createNewAccount,

    }
};

export default useFirebase;