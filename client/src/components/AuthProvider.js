import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ pending, setPending ] = useState(true);

    useEffect(() => {
        config.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, [])

    if(pending) {
        return <>Loading data</>
    }

    return (
        <AuthoContext.AuthProvider value={{ currentUser }}>
            { children }
        </AuthoContext.AuthProvider>
    )
}