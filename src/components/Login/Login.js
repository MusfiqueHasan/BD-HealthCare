import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { signInUsingGoogle, user, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            }).finally(() => setIsLoading(false))
    }
    return (
        <div>
            <section className="flex flex-col justify-center items-center pt-24 ">
                <p className="text-green-400 text-2xl font-bold uppercase">Login</p>
                <p className="font-semibold text-4xl">Join us to get all Access</p>
                <p className="w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </section>
            <form className="my-8 mx-72 flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <input className="py-2 px-3 mt-1 w-2/5 rounded-full border-2" placeholder="name" defaultValue={user.displayName} {...register("name")} />
                <input className="py-2 px-3 mt-1 w-2/5 rounded-full border-2" placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
                <p className="mt-2">If you have not any account? <Link to="/register">Register</Link> </p>
                <input className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full" type="submit" />
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google "> google Sign In</i></button>
            </form>
        </div >
    );
};

export default Login;