import React from "react";

const Events = () => {
    const events = [
        {title: "...", desc: "...."},
        {title: "...", desc: "...."},
        {title: "...", desc: "...."},
    ];

    return (
        <section id="events" className="py-12 bg-white">
            <h1 className="text-3xl font-extrabold text-center mb-10">Our Events</h1>
            <div className="flex justify-center flex-wrap gap-8">
                {events.map((e, index) => (
                    <div key={index} className="border border-gray-200 shadow-md rounded-lg p-6 w-72 text-center bg-gray-50">
                        <h2 className="text-xl font-semibold text-violet-700">{e.title}</h2>
                        <p className="mt-3 text-gray-600">{e.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;