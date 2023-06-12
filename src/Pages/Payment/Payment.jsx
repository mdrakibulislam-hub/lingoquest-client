import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { id } = useParams();
    console.log(id);
    const [price, setPrice] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/cart/price/${id}`).then(data => {
            setPrice(data.data.price);
        })
    }, [id])
    // const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1 className='text-3xl font-playfair font-semibold mt-3 mb-6 mx-2'>Please pay ৳{price} to confirm the enroll</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;