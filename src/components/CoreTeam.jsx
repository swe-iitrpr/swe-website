import React from "react";
import { useState, useRef } from "react";

const CoreTeam = () => {
    const [presidents] = useState([
        {name: "Kamakshi Gupta", role: "Vice-President", img: "../public/assets/kamakshi-didi.jpg"},
        {name: "Somya Katoch", role: "President", img: "../public/assets/somya-didi.jpg"},
        {name: "Ekam Sadhu", role: "Vice-President", img: "../public/assets/ekam-didi.jpg"},
    ]);

    const [coordinators] = useState([
        {name: "Aashi Verma", role: "Tech Coordinator", img: "../public/assets/aa.jpg"},
        {name: "Amrutha", role: "Tech Coordinator", img: "../public/assets/amrutha.jpg"},
        {name: "Aneesh", role: "Planning & Outreach", img: "../public/assets/aneesh.jpg"},
        {name: "Hansika", role: "Planning & Outreach", img: "../public/assets/Hansika.jpg"},
        {name: "Tejaswi", role: "Planning & OUtreach", img: "../public/assets/tejaswi(1).jpg"},
        {name: "Lahari", role: "Content Coordinator", img: "../public/assets/lahari.jpg"},
        {name: "Ritesh", role: "Content Coordinator", img: "../public/assets/Ritesh.jpg"},
        {name: "Sunitha", role: "Content Coordinator", img: "../public/assets/sunitha.jpg"},
        {name: "Bhavya", role: "Social Media", img: "../public/assets/bhavya.jpg"},
        {name: "Nehal", role: "Social Media", img: "../public/assets/nehal.jpg"},
        {name: "Prapti", role: "Social Media", img: "../public/assets/prapti.jpg"},
    ]);


    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({left: -300, behavior: "smooth"});
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section className="py-12 bg-gray-50">
            <h1 className="text-3xl font-extrabold text-center mb-10">
                Meet our Core Team
            </h1>

            <div className="flex justify-center flex-wrap gap-10 mb-12">
                {presidents.map((p, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img 
                            src={p.img || "https://via.placeholder.com/150"} 
                            alt={p.name} 
                            className="w-36 h-36 rounded-full object-cover border-2 border-violet-400 transition-transform transform hover:scale-105 cursor-pointer"
                        />

                        <p className="mt-3 font-semibold">{p.name}, <br /> {p.role}</p>
                    </div>
                ))}
            </div>

            <div className="relative">
                <button onClick={scrollLeft} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-3 py-1 text-2xl">
                    ‹
                </button>
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto space-x-8 px-10 py-4 scrollbar-hide"
                >
                    {coordinators.map((c, i) => (
                        <div key={i} className="flex-shrink-0 w-40 text-center">
                            <img 
                                src={c.img || "https://via.placeholder.com/150"} 
                                alt={c.name} 
                                className="w-32 h-32 rounded-full object-cover border-2 border-violet-400 mx-auto transition-transform transform hover:scale-105 cursor-pointer"
                            />

                            <p className="mt-2 font-semibold">{c.name}, <br />{c.role}</p>
                        </div>
                    ))}
                </div>
                <button onClick={scrollRight}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-3 py-1 text-2xl">
                        ›
                </button>
            </div>
        </section>
    );
};

export default CoreTeam;