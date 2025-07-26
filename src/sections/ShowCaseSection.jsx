import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
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
          {/* First row */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="image-wrapper">
                <img src={projects[0].image} alt="project" />
              </div>
              <div className="text-content">
                <h2>{projects[0].title}</h2>
                <p className="text-white-50 md:text-xl">
                  {projects[0].description}
                </p>
                <div className="flex gap-3">
                  {projects[0].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="block" ref={project2Ref}>
              <div className="project">
                <div className="image-wrapper bg-[#648DB3]">
                  <img src={projects[1].image} alt="project" />
                </div>
                <h2>{projects[1].title}</h2>
                <div className="flex gap-3">
                  {projects[1].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>

            <a href={projects[2].link} target="_blank" rel="noopener noreferrer" className="block" ref={project3Ref}>
              <div className="project">
                <div className="image-wrapper bg-[#FEC5F6]">
                  <img src={projects[2].image} alt="project" />
                </div>
                <h2>{projects[2].title}</h2>
                <div className="flex gap-3">
                  {projects[2].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="showcaselayout mt-10">
          {/* Second row */}
          <div className="project-list-wrapper overflow-hidden md:mt-[-90px]">
            <a href={projects[3].link} target="_blank" rel="noopener noreferrer" className="block" ref={project2Ref}>
              <div className="project">
                <div className="image-wrapper bg-white">
                  <img src={projects[3].image} alt="project" />
                </div>
                <h2>{projects[3].title}</h2>
                <div className="flex gap-3">
                  {projects[3].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>

            <a href={projects[4].link} target="_blank" rel="noopener noreferrer" className="block" ref={project3Ref}>
              <div className="project">
                <div className="image-wrapper bg-white">
                  <img src={projects[4].image} alt="project" />
                </div>
                <h2>{projects[4].title}</h2>
                <div className="flex gap-3">
                  {projects[4].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>

          <div className="first-project-wrapper mt-10" ref={project1Ref}>
            <a href={projects[5].link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="image-wrapper">
                <img src={projects[5].image} alt="project" />
              </div>
              <div className="text-content">
                <h2>{projects[5].title}</h2>
                <p className="text-white-50 md:text-xl">
                  {projects[5].description}
                </p>
                <div className="flex gap-3">
                  {projects[5].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="showcaselayout">
          {/* Third row */}
          <div className="first-project-wrapper mt-10" ref={project1Ref}>
            <a href={projects[6].link} target="_blank" rel="noopener noreferrer" className="block">
              <div className="image-wrapper">
                <img src={projects[6].image} alt="project" />
              </div>
              <div className="text-content">
                <h2>{projects[6].title}</h2>
                <p className="text-white-50 md:text-xl">
                  {projects[6].description}
                </p>
                <div className="flex gap-3">
                  {projects[6].tags.map((tag, index) => (
                    <span key={index} className="bg-white text-black rounded-full px-2">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;