import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    useEffect(() => {
        document.title = "Payment | Lingoquest"
    }, [])
    const { id } = useParams();
    console.log(id);
    const [axiosSecure] = useAxiosSecure();
    const [price, setPrice] = useState(null);
    useEffect(() => {
        axiosSecure.get(`/cart/price/${id}`).then(data => {
            setPrice(data.data.price);
        })
    }, [id, axiosSecure])
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