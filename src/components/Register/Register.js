import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, formState: { errors } } = useForm();

    const { user, handleGoogleLogin } = useAuth();

    
    return (
        <div>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 ">
                <p className="text-green-400 text-2xl font-bold uppercase">Register</p>
                <p className="font-bold text-xl md:text-4xl">Join us to get all Access</p>
                <p className="md:w-2/5 md:text-center text-justify text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </section>
            <form className="my-8 md:mx-72 flex flex-col justify-center items-center" >
                <input
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5  rounded-full border-2" placeholder="name" defaultValue={user.displayName} {...register("name")} />

                <input
                    
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5  rounded-full border-2" placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
                
                <input
                    type="password"
                   
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5 rounded-full border-2" placeholder="password" defaultValue="" {...register("password")} />                

                
                
                {errors.email && <span className=" text-red-600">This field is required</span>}
                <p className="mt-2">Already have an account? <Link to="/login">Login</Link> </p>
                <input className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full" type="submit" />
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google "> google Sign In</i></button>
            </form>
        </div >
    );
};

export default Register;