import { useContext, useEffect } from "react"
import { SignupsessionContext } from "../context/signupGlobal";

export default function Lol() {
    const { signupDetails } = useContext(SignupsessionContext)
    useEffect(() => {
        console.log(signupDetails);
    }, []);

    return (
        <h1>LOL</h1>
    )
}