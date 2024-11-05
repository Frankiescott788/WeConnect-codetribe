import axios from "axios";
import { useState } from "react";

interface Product {
    name: string;
    description: string;
    price: string;
    quantity: string;
    category: any; // add dropdown menu for the category with check inputs
    images: any;
}

export default function usecrud() {

    const [productname, setproductname] = useState<string>('');
    const [productprice, setproductprice] = useState<string>('');
    const [productquantity, setproductquantity] = useState<string>('');
    const [productdescription, setproductdescription] = useState<string>('');
    const [productcategory, setproductcategory] = useState<string>('');
    const [productimage, setproductimage] = useState<any>(null);
    
    const create_product = async () : Promise<void> => {
        try {
            const new_product : Product = {
                name: productname,
                description: productdescription,
                price: productprice,
                quantity: productquantity,
                category: productcategory,
                images: productimage,
            }

            const { data, status } = await axios.post('http://localhost:8080/api/newproduct', new_product, { withCredentials : true, headers: { 'Content-Type': 'multipart/form-data' }});

            if(status === 201) {
                console.log('product created', data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        setproductcategory,
        setproductdescription,
        setproductimage,
        setproductname,
        setproductprice,
        setproductquantity,
        create_product
    }

}