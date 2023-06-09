import React, { useContext, useEffect, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {

    useEffect(() => {
        document.title = "Sign up | Vault of marvel"
    }, [])

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const [photoURL, setPhotoURL] = useState('')

    // regurler expressions
    const emailREGX = /\S+@\S+\.\S+/
    const passwordREGX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    // form errors
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passError, setPassError] = useState("")
    const [passMatchError, setPassMatchError] = useState("")
    const [imageURLError, setImageURLError] = useState("")
    const [alreadyInUse, setAlreadyInUse] = useState("")


    const { createUserHandler, setUser, user } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const isPasswordSame = password === confirmPassword;
        if (!name) { setNameError("Please provide a valid name"); return }
        else if (!emailREGX.test(email)) { setEmailError("Please provide a valid email address"); return }
        else if (!passwordREGX.test(password)) { setPassError("Password must contain Minimum eight characters, at least one letter and one number"); return }
        else if (!passwordREGX.test(confirmPassword)) { setPassMatchError("Password must contain Minimum eight characters, at least one letter and one number"); return }
        else if (!isPasswordSame) { setPassMatchError("Please provide same password for both field"); return }
        else if (!photoURL) { setImageURLError("Please provide valid photo url"); return }

        createUserHandler(email, password).then(result => {
            setUser(result.user)
            navigate("/")
            setAlreadyInUse("")

        })
            .catch(error => setAlreadyInUse(error.message))

        setNameError("")
        setEmailError("")
        setPassError("")
        setPassMatchError("")
        setImageURLError("")

    }

    console.log(password, confirmPassword);

    if (user) {
        return <Navigate to="/" ></Navigate>;
    }

    return (
        <div>
            <div className="relative flex flex-col justify-center my-16 overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md border lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black dark:text-white">
                        Sign up
                    </h1>
                    <form onSubmit={handleSignUp} className="mt-6">



                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                onChange={e => setName(e.target.value)}
                                type="text"
                                id='name'
                                name='name'
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <p className='text-red-700'><small>
                                {nameError ? nameError : ""}
                            </small></p>
                        </div>


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
                                name='email'
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            <p className='text-red-700'><small>
                                {emailError ? emailError : ""}
                            </small></p>
                        </div>


                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                id='password'
                                name='password'
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />

                            <p className='text-red-700'><small>
                                {passError ? passError : ""}
                            </small></p>

                        </div>




                        <div className="mb-2">
                            <label
                                htmlFor="confirm-password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Confirm Password
                            </label>
                            <input
                                onChange={e => setConfirmPassword(e.target.value)}
                                type="password"
                                id='confirm-password'
                                name='confirmPassword'
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />

                            <p className='text-red-700'><small>
                                {passMatchError ? passMatchError : ""}
                            </small></p>

                        </div>




                        <div className="mb-2">
                            <label
                                htmlFor="photourl"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Photo URL
                            </label>
                            <input
                                onChange={e => setPhotoURL(e.target.value)}
                                type="text"
                                id='photourl'
                                name='photourl'
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />

                            <p className='text-red-700'><small>
                                {imageURLError ? imageURLError : ""}
                            </small></p>

                        </div>


                        <div className="mt-6">
                            <button type='submit' className="btn border-none bg-primary text-white hover:bg-warning hover:text-neutral w-full">
                                Sign up
                            </button>
                            <p className='text-red-700'><small>
                                {alreadyInUse ? alreadyInUse : ""}
                            </small></p>
                        </div>
                    </form>



                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;