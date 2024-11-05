import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";

export const Authcontext = createContext<any | null>(null);

export default function Authprovider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchCurrentUser = async () => {
        try {
            const { data, status } = await axios.get('http://localhost:8080/api/seller/current', {
                withCredentials: true
            });

            if (status === 200) {
                setCurrentUser(data?.data);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCurrentUser(); // Fetch current user on mount
    }, []);

    return (
        <Authcontext.Provider value={{ currentUser, isAuthenticated, isLoading, setIsAuthenticated, setCurrentUser }}>
            {children}
        </Authcontext.Provider>
    );
}
