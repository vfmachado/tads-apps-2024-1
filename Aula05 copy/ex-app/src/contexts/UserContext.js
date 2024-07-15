
import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {
        email: 'blank',
    },
    isLoggedIn: false,
});

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        email: 'blank',
    });
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (user, token) => {
        // salva no storage o token
        setUser(user);
        setIsLoggedIn(true);
    }

    const logout = () => {
        // remove o token do storage
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}