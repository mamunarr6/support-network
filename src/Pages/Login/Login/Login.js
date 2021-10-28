import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container mx-auto">
            <div className="md:flex justify-center">
                <img className="w-60" src="https://i.ibb.co/ySRY6S5/support.png" alt="" />
            </div>
            <div className="flex justify-center my-10 font-mono">
                <div className="h-96 w-2/5 bg-white border border-gray-300 p-20 rounded">
                    <h2 className=" text-gray-800 font-bold text-center text-3xl">Login With</h2>
                    <div className="flex justify-center py-5">
                        <Link className="border border-gray-400 px-5 py-3 rounded rounded-full flex items-center hover:bg-gray-100 transition">
                            <img className="w-8 mr-2" src="https://img.icons8.com/color/48/000000/google-logo.png" />
                            Continue with Google
                        </Link>
                    </div>
                    <p className="flex justify-center items-center">
                        Don't have an account? <Link to="/register" className="ml-2 bg-green-500 hover:bg-green-600 transition text-white border border-gray-400 px-2 py-1 rounded-full">Create</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;