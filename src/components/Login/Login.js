import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
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
            <form className="my-10 mx-72 flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <input className="p-2 mt-1 w-2/5 rounded-full border-2" defaultValue={user.displayName} {...register("name")} />
                <input className="p-2 mt-1 w-2/5 rounded-full border-2" defaultValue={user.email} {...register("email", { required: true })} />
                <input className="p-2 mt-1 w-2/5 rounded-full border-2" placeholder="Address" defaultValue="" {...register("address")} />
                <input className="p-2 mt-1 w-2/5 rounded-full border-2" placeholder="Phone" defaultValue="" {...register("phone")} />
                <input className="p-2 mt-1 w-2/5 rounded-full border-2" placeholder="City" defaultValue="" {...register("city")} />
                {errors.email && <span className=" text-red-600">This field is required</span>}
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