import axios from "axios";
import { useContext, useState } from "react";
import { SignupsessionContext } from "../context/signupGlobal";

type User = {
    firstname : string,
    lastname : string,
    email : string,
    password : string,
    phone : string
}

export default function useAuth() {

    const { setSignupDetails } = useContext(SignupsessionContext);

    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [isLoading, setIsloading] = useState<boolean>(false);

     
    const sign_up = async () : Promise<void> => {
        setIsloading(true);
        try {
            const new_user : User = {
                firstname,
                lastname,
                email,
                password,
                phone
            }
            const { data, status } = await axios.post("http://localhost:8080/api/seller/signup", new_user, {
                withCredentials: true
            });

            if(status === 201) {
                console.log(data);
                setSignupDetails(data);
            }

            setSignupDetails(new_user);
        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false);
        }
    }

    return {
        firstname,
        lastname,
        email,
        password,
        phone,
        setFirstname,
        setLastname,
        setEmail,
        setPassword,
        setPhone,
        sign_up,
        isLoading
    }

}