import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user, } = useAuth();
    const onChange = date => {
        setDate(date)
    }
    return (
        <>
            <section className="flex flex-col justify-center items-center pt-24 ">
                <p className="text-green-400 text-2xl font-bold uppercase">Appointment</p>
                <p className="font-semibold text-4xl">To get an Appointment </p>
                <p className="w-2/5 text-center text-gray-500">Medical services means medical, surgical, dental, x-ray, ambulance, hospital, professional nursing, and funeral services.</p>
            </section>
            <section className=" grid grid-cols-2 px-32">
                <div className=" px-16 py-10 border-2 m-14 shadow-xl">
                    <p className=" text-center font-bold text-3xl mb-4 ">Calender</p>
                    <Calendar
                        onChange={onChange}
                        value={date}
                    />
                </div>
                <form className="my-8 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <input className="py-3 px-4 mt-1 w-5/6  border-2" placeholder="name" defaultValue={user.displayName} {...register("name")} />
                    <input className="py-3 px-4 mt-3 w-5/6  border-2" placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
                    <div>
                        <input className="py-3 px-4 mt-3 w-2/5 border-2" placeholder="Phone" defaultValue="" {...register("phone")} />
                        <input className="py-3 px-4 mt-3 ml-6 w-2/5 border-2" placeholder="Date" Value={date.toLocaleString()} />
                    </div>


                    <div >
                        <select className="p-3 mt-3 w-2/5 border-2" {...register("category")}>
                            <option value=""> Select Services </option>
                            <option value="">Eye Care</option>
                            <option value="">Medical Checkup</option>
                            <option value="">Dental CareB</option>
                            <option value="">Cardiology</option>
                            <option value="">Laboratory Service</option>
                            <option value="B">Vaccination</option>
                        </select>
                        <select className="p-3 mt-3 ml-6 w-2/5 border-2" {...register("category")}>
                            <option value=""> Select Doctors </option>
                            <option value="A">Dr. Ryley Mueller</option>
                            <option value="B">Dr. Elisa Hodges</option>
                            <option value="B">Dr. Carlo Hilton</option>
                            <option value="B">Dr. Tyler Wilkins</option>
                            <option value="B">Dr. Denny Barker</option>
                            <option value="B">Dr. Carys Morgan</option>
                        </select>
                    </div>
                    <input className=" w-2/5 py-2 px-10 mt-5 bg-green-400 text-white font-semibold rounded-full" type="submit" />
                    {errors.email && <span className=" text-red-600">This field is required</span>}

                </form>
            </section>
        </>
    );
};

export default Appointment;