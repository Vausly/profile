import React from "react";
import PageWrapper from "../components/PageWrapper";

const Portfolio = () => {
    return (
        <PageWrapper
            title="Portfolio | Vausly Media"
            description="Portfolio of Vausly Media projects."
            keywords="portfolio, vausly media, projects, creative agency, minecraft project, minecraft mods, minecraft maps, minecraft addons"     >
                <div className="max-w-4xl mx-auto py-16 px-6 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-300">
                        Portfolio
                    </h1>
                    <p className="mb-4 text-lg text-gray-300">
                        Coming soon!
                    </p>
                </div>
            </PageWrapper>
    );
};

export default Portfolio;