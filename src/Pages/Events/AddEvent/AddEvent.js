import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddEvent = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user?.email || "";
        fetch('http://localhost:5000/addEvent', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (
        <div className="md:flex justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className=" p-10 w-6/12">
                <h1 className="text-center text-2xl font-bold text-green-500">ADD EVENT</h1>

                <input
                    className="w-full py-2 px-2 my-5 rounded-md bg-gray-200 outline-none"
                    type="text" {...register("title", { required: true })}
                    placeholder=" Event title" />
                {errors.required && <h5
                    className="text-red-600">Please input a title</h5>}
                <br />

                <input
                    className="w-full py-2 px-2 my-5 rounded-md bg-gray-200 outline-none"
                    type="date" {...register("eventDate", { required: true })}
                    placeholder="Event date" />
                <br />

                <textarea
                    className="w-full py-2 px-2 my-5 rounded-md bg-gray-200 outline-none"
                    type="text" {...register("description")}
                    placeholder="Description" />
                <br />

                <input
                    className="w-full py-2 px-2 my-5 rounded-md bg-gray-200 outline-none"
                    type="text" {...register("image")}
                    placeholder="Image link" />
                <br />

                <input
                    className="w-full py-2 px-2 my-5 rounded-md bg-green-400 outline-none text-white font-semibold uppercase border border-green-500 hover:text-green-500 hover:bg-white transition"
                    type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddEvent;