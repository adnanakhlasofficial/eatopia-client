import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedInfo) => {
        return updateProfile(auth.currentUser, updatedInfo);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logoutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    console.log(user);

    const authInfo = { createUser, updateUser, loginUser, logoutUser, user };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
