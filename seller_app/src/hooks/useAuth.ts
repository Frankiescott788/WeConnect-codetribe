import axios from "axios";
import { useContext, useState } from "react";
import { SignupsessionContext } from "../context/signupGlobal";
import { Authcontext } from "../context/authentication";
import { set } from "react-hook-form";

type User = {
    firstname : string,
    lastname : string,
    email : string,
    password : string,
    phone : string,
    adresss : {
        street : string,
        city : string,
        country : string,
        province : string
    }
    businessName : string,

}

export default function useAuth() {

    const { setIsAuthenticated, setCurrentUser } = useContext(Authcontext);

    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [businessName, setBusinessName] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [province, setProvince] = useState<string>("");


    const [isLoading, setIsloading] = useState<boolean>(false);

    const [changeFields, setChangeFields] = useState<boolean>(false);

    function changeFieldsHandler() {
        setChangeFields(!changeFields);
    }
    
    const sign_up = async () : Promise<void> => {
        setIsloading(true);
        try {
            const new_user : User = {
                firstname,
                lastname,
                email,
                password,
                phone,
                adresss: {
                    street,
                    city,
                    country,
                    province
                },
                businessName
            }
           const { data, status } = await axios.post('http://localhost:8080/api/seller/signup', new_user, {
               withCredentials : true
           })
           if(status === 201) {
               console.log('signed up', data)
           }
        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false);
        }
    }

    const sign_in = async (): Promise<void> => {
        setIsloading(true); // Optionally set loading state
        try {
            const { data, status } = await axios.post('http://localhost:8080/api/seller/signin', {
                email,
                password
            }, {
                withCredentials: true
            });
    
            if (status === 200) {
                setIsAuthenticated(true);
                setCurrentUser(data?.data); // Update current user here
                // Optionally call current_user to refresh user data if needed
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false);
        }
    };
    

    return {
        
        setFirstname,
        setLastname,
        setEmail,
        setPassword,
        setPhone,
        setBusinessName,
        setStreet,
        setCity,
        setCountry,
        setProvince,
        sign_up,
        sign_in,
        isLoading,
        changeFields,
        setChangeFields,
        changeFieldsHandler
    }

}