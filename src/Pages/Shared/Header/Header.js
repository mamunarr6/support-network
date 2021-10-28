import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="md:container mx-auto md:flex justify-between items-center">
            <div>
                <img className="w-44" src="https://i.ibb.co/ySRY6S5/support.png" alt="" />
            </div>
            <div className="md:flex items-center">

                <Link to="/home" className="ml-2">Home</Link>
                <Link to="/events" className="ml-2">Events</Link>
                <Link to="/admin" className="ml-2">Admin</Link>
                <Link to="/login" className="ml-2">Login</Link>

            </div>
        </div>
    );
};

export default Header;