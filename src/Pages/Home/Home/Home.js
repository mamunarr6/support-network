import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Support from '../Support/Support';

const Home = () => {
    const { supports } = useFirebase();
    return (
        <div className="md:container md:mx-auto">
            <div className="">
                <h1 className="text-center my-5 text-2xl text-gray-700 font-semibold">We are for supporting people in needs.</h1>
                <div className="flex md:justify-center ">
                    <div className="border border-gray-500 w-1/5 flex rounded">
                        <input className="focus:outline-none bg-white flex-1 px-3 rounded-l" type="text" placeholder=" Search" />
                        <input className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 transition-all" type="button" value="Search" />
                    </div>
                </div>
            </div>

            <div className="md:grid grid-cols-4 gap-6 my-6">
                {
                    supports?.map(support => <Support
                        key={support.name}
                        support={support}
                    ></Support>)
                }
            </div>
        </div>
    );
};

export default Home;