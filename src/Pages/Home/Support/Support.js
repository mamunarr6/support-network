import React from 'react';
import './Support.css';

const Support = ({ support }) => {
    const { name, img } = support;
    return (
        <div className="">
            <div className="relative support">
                <img className="support-img" src={img} alt="" />
                <h3 className="text-center absolute bottom-0 z-50 text-white bg-opacity-80 w-full bg-gray-700 h-10">{name}</h3>
            </div>

        </div>
    );
};

export default Support;