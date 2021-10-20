import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, formState: { errors } } = useForm();

    const { user, handleGoogleLogin, createNewAccount, setUser, error, setError, setUserName, setUserDisplayName } = useAuth();
    const handleNameField = event => {
        setName(event.target.value);
    }
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
        createNewAccount(email, password)
            .then(result => {
                const user = result.user;
                setUserName(name);
                setUserDisplayName(name);
                setError('');
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 ">
                <p className="text-green-400 text-2xl font-bold uppercase">Register</p>
                <p className="font-bold text-xl md:text-4xl">Join us to get all Access</p>
                <p className="md:w-2/5 md:text-center text-justify text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </section>
            <form className="my-8 md:mx-72 flex flex-col justify-center items-center" onSubmit={handleRegistration}>
                <input

                    onBlur={handleNameField}
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5  rounded-full border-2"
                    placeholder="name"
                    id="inputName"
                    defaultValue={user.displayName}
                    {...register("name")}
                />

                <input
                    onBlur={handleEmailField}
                    type="email"
                    id="inputEmail3"
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5  rounded-full border-2"
                    placeholder="email"
                    defaultValue={user.email}
                    // {...register("email", { required: true })}
                />

                <input
                    onBlur={handlePasswordField}
                    type="password"                    
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5 rounded-full border-2"
                    placeholder="password" 
                />
                <p className='text-danger'>{error}</p>



                {errors.email && <span className=" text-red-600">This field is required</span>}
                <p className="mt-2">Already have an account? <Link to="/login">Login</Link> </p>
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    type="submit" ></button>
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google "> google Sign In</i></button>
            </form>
        </div >
    );
};

export default Register;