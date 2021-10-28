import React from 'react';
import { useState } from 'react/cjs/react.development';
import AllVolunteers from '../AllVolunteers/AllVolunteers';
import AddEvent from '../Events/AddEvent/AddEvent';
import Events from '../Events/Events/Events';

const Admin = () => {
    const [control, setControl] = useState();
    return (
        <div className="md:container mx-auto">
            <div className="md:grid grid-cols-12 gap-10">
                <div className=" bg-gray-200 col-span-3 h-screen text-gray-600 font-bold text-center pt-8 mt-10">
                    <h3 onClick={() => setControl("volunteers")} className="mb-6 cursor-pointer">All Volunteers</h3>
                    <h3 onClick={() => setControl("addEvent")} className="mb-6 cursor-pointer">Add Event</h3>
                    <h3 onClick={() => setControl("events")} className="mb-6 cursor-pointer">Manage Events</h3>
                </div>
                <div className="  col-span-9">
                    {control === "volunteers" && <AllVolunteers></AllVolunteers>}
                    {control === "addEvent" && <AddEvent></AddEvent>}
                    {control === "events" && <Events></Events>}
                </div>
            </div>
        </div>
    );
};

export default Admin;