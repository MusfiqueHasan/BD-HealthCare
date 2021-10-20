import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { formState: { errors } } = useForm();
    const { signInUsingGoogle, user, setIsLoading, processLogin, setUser, error, setError } = useAuth();
    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }
    const handleRegistration = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('type a 6 char long password');
            return;
        }
        processLogin(email, password);
    }
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user);
            }).finally(() => setIsLoading(false))
    }
    return (
        <div>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4  ">
                <p className="text-green-400 text-2xl font-bold uppercase">Login</p>
                <p className="font-bold text-xl md:text-4xl">Join us to get all Access</p>
                <p className="md:w-2/5 md:text-center text-justify text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </section>
            <form className="my-8 md:mx-72 flex flex-col justify-center items-center" onSubmit={handleRegistration}>
                <input
                    onBlur={handleEmailField}
                    id="inputEmail3"
                    type="email"
                    className="py-2 px-3 mt-1 md:w-2/5 w-10/12 rounded-full border-2"
                    placeholder="email"
                    defaultValue={user.email}
                    
                />
                <input
                    onBlur={handlePasswordField}
                    type="password"
                    className="py-2 px-3 mt-1 md:w-2/5 w-10/12 rounded-full border-2"
                    placeholder="password"
                    
                />
                <p className=" text-red-600">{error}</p>
                <p className="mt-2">If you have not any account? <Link to="/register">Register</Link> </p>
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    type="submit">Sign in</button>
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google "> google Sign In</i></button>
            </form>
        </div >
    );
};

export default Login;