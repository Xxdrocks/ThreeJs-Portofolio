import React from "react";

const ShowCaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
            {/* left */}
            <div className="first-project-wrapper">
                <div className="image-wrapper">
                    <img src="/images/project1.png" alt="project" />
                </div>
                <div className="text-content">
                    <h2>On-Demand Books App for Kids and User Friendly App called Bukoo</h2>
                    <p className="text-white-50 md:text-xl">
                        an Built App with Laravel and css Native for a fast user-Friendly experience.
                    </p>
                </div>
            </div>
            {/* right */}
            <div className="project-list-wrapper overflow-hidden">
                <div className="project">
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img src="/images/project2.png" alt="project"/>
                    </div>
                    <h2>On-Demand Books App for Kids and User Friendly App called Bukoo</h2>
                </div>
                <div className="project">
                    <div className="image-wrapper bg-[#ffe7eb]">
                        <img src="/images/project3.png" alt="project"/>
                    </div>
                    <h2>On-Demand Books App for Kids and User Friendly App called Bukoo</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
