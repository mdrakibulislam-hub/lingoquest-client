import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const ForgetPassword = () => {

    useEffect(() => {
        document.title = "Reset Password | Vault of marvel"
    }, [])


    const { handleForgetPasswordReset } = useContext(AuthContext);

    const [email, setEmail] = useState('')

    // Regurler expressions
    const emailREGX = /\S+@\S+\.\S+/

    // form validation errors
    const [emailError, setEmailError] = useState("")

    const handleResetPassword = event => {
        event.preventDefault();

        if (!emailREGX.test(email)) { setEmailError("Please provide a valid email address"); return }

        handleForgetPasswordReset(email)
            .then(() => {
                setEmailError("");
                toast.success("Reset password email has been sent")
            })
            .catch(error => setEmailError(error.message))
    }

    console.log(email);

    return (
        <div className='main-container'>
            <form onSubmit={handleResetPassword} className="mt-12 w-1/2 mx-auto">
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        id='email'
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />

                    <p className='text-red-700'><small>
                        {emailError ? emailError : ""}
                    </small></p>

                </div>

                <div className="my-6">
                    <button type='submit' className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-full">
                        Reset Password
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default ForgetPassword;