import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const AddClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    //useEffect
    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        document.title = "Add class | Lingoquest"
    }, [])

    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])


        fetch(imageHostingUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const updateData = { ...data, price: parseFloat(data.price).toFixed(2), image: imgURL, status: "pending", totalStudents: 0, adminsFeedback: null }

                    axiosSecure.post('https://lingoquest-server-api.vercel.app/allclasses', (updateData)).then(data => {
                        console.log(data.data);
                        if (data.data.insertedId) {
                            Swal.fire(
                                'Great!',
                                'You have successfully added a class, now wait for admin approval!',
                                'success'
                            )
                        }
                    })

                }
            })


    }

    if (loading) return (
        <LoadingSpinner></LoadingSpinner>
    )

    return (
        <div data-aos="fade-up" >
            <h1 className="text-3xl font-bold font-playfair text-neutral text-center mb-12">Publish your classes</h1>


            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* register your input into the hook by invoking the "register" function */}

                <input
                    {...register("title", { required: true })}
                    id='course-title'
                    placeholder="Enter course title here."
                    className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {/* errors will return when field validation fails  */}
                {errors.title && <span>This field is required</span>}


                <input
                    {...register("instructorName")}
                    type="text"
                    value={user.displayName}
                    className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />


                <input
                    {...register("instructorEmail")}
                    type="text"
                    value={user.email}
                    className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />


                <input
                    {...register("price")}
                    type="number"
                    placeholder="Please enter the course price here."
                    className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />


                <input
                    {...register("availableSeats")}
                    type="number"
                    placeholder="Please enter total class seats."
                    className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-primary focus:ring-primary focus:outline-none focus:ring focus:ring-opacity-40"
                />

                <span className="label-text text-xs">Upload course thumbnail image bellow</span>
                <input {...register("image")} type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs normal-case" />

                <input className="btn border-none bg-secondary text-primary normal-case hover:bg-neutral hover:text-white w-full" type="submit" />
            </form>


        </div>
    );
};

export default AddClasses;