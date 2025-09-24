import React from "react";

const HeroSection = () => (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-white">
        <img 
            src="https://swe.org/wp-content/uploads/2023/12/society-of-women-engineers-logo.svg" 
            alt="SWE Logo"
            className="h-32 md:h-40 mb-6 md:mb-0 md:mr-8" />
        <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-purple-800">
                Empowering Women Engineers
            </h1>
            <h3 className="text-lg text-purple-500 mt-2">
                Brains. Boldness. Blueprints. Welcome to women in engineering.
            </h3>
        </div>
    </section>
);

export default HeroSection;
