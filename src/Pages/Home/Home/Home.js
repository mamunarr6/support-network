import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import useFirebase from '../../../hooks/useFirebase';


const Home = () => {
    const [search, setSearch] = useState();
    const [events, setEvents] = useState();
    const { supports } = useFirebase();
    const getSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        fetch(`http://localhost:5000/searchEvents?search=${search}`)
            .then(res => res.json())
            .then(data => setEvents(data));
    }
    console.log(events)

    return (
        <div className="md:container md:mx-auto">
            <div className="">
                <h1 className="text-center my-5 text-2xl text-gray-700 font-semibold">We are for supporting people in needs.</h1>
                <div className="flex md:justify-center ">
                    <div className="border border-gray-500 w-1/5 flex rounded">
                        <input onChange={getSearchInput} className="focus:outline-none bg-white flex-1 px-3 rounded-l" type="text" placeholder=" Search" />
                        <input onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition-all" type="button" value="Search" />
                    </div>
                </div>
            </div>

            <div className="md:grid grid-cols-4 gap-6 my-6">
                {/* {
                    events?.map((event) => <div className="relative support">
                        <img className="support-img" src={event.img} alt="" />
                        <h3 className="text-center absolute bottom-0 z-50 text-white bg-opacity-80 w-full bg-gray-700 h-10">{event.title}</h3>
                    </div>)
                } */}
            </div>
        </div>
    );
};

export default Home;