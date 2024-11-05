import axios from "axios";
import {  createContext, useEffect, useState, ReactNode} from "react";

export const Authcontext = createContext<any | null>(null)

export default function Authprovider ({ children } : {children : ReactNode} ) {

    const [currentUser, setCurrentUser] = useState<any[] | null>([]);
    
    useEffect(() => {
        const current_user = async () : Promise<void>=> {
            try {
                const { data, status } = await axios.get('http://localhost:8080/api/seller/current', {
                    withCredentials : true
                });

                if(status === 200) {
                    setCurrentUser(data?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        current_user();
    }, []);

    return (
        <Authcontext.Provider value={{ currentUser }}>
            {children}
        </Authcontext.Provider>
    )

}