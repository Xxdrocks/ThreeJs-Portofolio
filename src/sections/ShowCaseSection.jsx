import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { expCards } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/Bukoo.png" alt="project" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Books App for Kids and User Friendly App called Bukoo
              </h2>
              <p className="text-white-50 md:text-xl">
                an Built App with Laravel and css Native for a fast
                user-Friendly experience.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#648DB3]">
                <img src="/images/Parfumiere.PNG" alt="project" />
              </div>
              <h2>
                Discover the art of fragrance with our exclusive perfume collection.
              </h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FEC5F6]">
                <img src="/images/Birthday.png" alt="project" />
              </div>
              <h2>
                Celebrate this special chapter with us! RSVP now for unforgettable events.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
