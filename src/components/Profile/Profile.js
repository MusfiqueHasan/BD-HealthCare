import React from 'react';
import { FaUserCircle } from 'react-icons/all';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth()

    return (
        <div>
            {/* My profile section */}
            <div className="flex flex-col justify-center items-center pt-32 mb-5">
                <p className="text-green-400 md:text-5xl text-3xl font-extrabold uppercase border-b-4">My Profile</p>
            </div>
            <div className=" md:px-40">
                <div className=" border-2  grid md:grid-cols-2 shadow-xl md:p-20 p-10 ">
                    <div className=" flex justify-center ">

                        {
                            user.photoURL ?
                                <img src={user.photoURL} alt="" className="md:w-80 md:h-80 h-48 rounded-full" />
                                : <FaUserCircle className="md:w-96 md:h-96 h-48 rounded-full" />

                        }
                    </div>
                    <div className=" flex flex-col items-start pt-5 ">
                        <p className=" mb-3" ><span className="font-bold ">Userid: </span><span> {user.uid}</span></p>
                        <p className=" mb-3" ><span className="font-bold ">Username: </span><span> {user.displayName}</span></p>
                        <p className=" mb-3" ><span className="font-bold ">Email: </span><span> {user.email}</span></p>
                        <p className=" mb-3" ><span className="font-bold ">Email Verification: </span>
                            {
                                user.emailVerified ?
                                    <span className="text-green-600 font-extrabold"> verified</span> :
                                    <span className="text-red-600 font-extrabold"> not verified</span>
                            }
                        </p>
                        <p ><span className="font-bold ">Password-Hash: </span>

                            {
                                user.reloadUserInfo.passwordHash ?
                                    <span> {user.reloadUserInfo.passwordHash}</span>
                                    :
                                    <span className=" text-gray-400"> you entered using firebase</span>
                            }

                        </p>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;