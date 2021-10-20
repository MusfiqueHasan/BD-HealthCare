import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { formState: { errors } } = useForm();

    const { signInUsingGoogle, setIsLoading, createNewAccount, setUser, error, setError, setUserName, setUserDisplayName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'

    // get name
    const handleNameField = event => {
        console.log(event.target.value)
        setName(event.target.value);
    }
    // get email
    const handleEmailField = event => {
        setEmail(event.target.value);
    }
    // get password
    const handlePasswordField = event => {
        setPassword(event.target.value);
    }
    // submit registration form
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
                console.log(name)
                setError('');
                setUser(user);
                if (user.email) {
                    history.push(redirect_uri)
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // handling google sign in authentication
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user);
            }).finally(() => setIsLoading(false))
    }
    return (
        <div>
            {/* registration header */}
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 ">
                <p className="text-green-400 text-2xl font-bold uppercase">Register</p>
                <p className="font-bold text-xl md:text-4xl">Join us to get all Access</p>
                <p className="md:w-2/5 md:text-center text-justify text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </section>

            {/* registration form */}
            <form className="my-8 md:mx-72 flex flex-col justify-center items-center" onSubmit={handleRegistration}>
                <input
                    type="text"
                    onBlur={handleNameField}
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5  rounded-full border-2"
                    placeholder="name"
                    id="inputName"

                />

                <input
                    onBlur={handleEmailField}
                    type="email"
                    id="inputEmail3"
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5  rounded-full border-2"
                    placeholder="email"
                    required
                />

                <input
                    onBlur={handlePasswordField}
                    type="password"
                    className="py-2 px-3 mt-1 w-10/12 md:w-2/5 rounded-full border-2"
                    placeholder="password"
                    required
                />
                <p className='text-danger'>{error}</p>



                {errors.email && <span className=" text-red-600">This field is required</span>}
                <p className="mt-2">Already have an account? <Link to="/login">Login</Link> </p>
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    type="submit" >Register</button>
                <button
                    className="py-2 px-10 mt-3 bg-green-400 text-white font-semibold rounded-full"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google "> google Sign In</i></button>
            </form>
        </div >
    );
};

export default Register;