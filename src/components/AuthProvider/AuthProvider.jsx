import React, { createContext, useState } from 'react';

export const NewsContext = createContext('');

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)




    return (
        <NewsContext.Provider value={''}>
            {children}
        </NewsContext.Provider>
    );
};

export default AuthProvider;