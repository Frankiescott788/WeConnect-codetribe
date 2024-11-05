import { createContext, useState } from "react";

export const SignupsessionContext = createContext<any>([]);
export default function SignupGlobalsession({children} : any) {
    const [signupDetails, setSignupDetails] = useState<any>('');

    return (
        <SignupsessionContext.Provider value={{ signupDetails, setSignupDetails }}>
            { children }
        </SignupsessionContext.Provider>
    )
};