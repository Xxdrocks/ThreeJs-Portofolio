import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProfileSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const imageRef = useRef(null);
    const maskRef = useRef(null);

    const [hovering, setHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Scroll-triggered animation
    useGSAP(() => {
        const slide = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });

        const click = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });

        click.from(imageRef.current, {
            scale: 1.05,
            y: -10,
            duration: 0.4,
            ease: "power2.out",
        });

        slide.from(imageRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        slide.from(
            titleRef.current,
            {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.7"
        );
    }, []);

    // Handle mouse move only on text
    const handleMouseMove = (e) => {
        const bounds = titleRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        });
    };

    useEffect(() => {
        if (hovering && maskRef.current) {
            gsap.to(maskRef.current, {
                x: mousePos.x,
                y: mousePos.y,
                duration: 0.1,
                ease: "power2.out",
            });
        }
    }, [mousePos]);

    return (
        <section
            ref={sectionRef}
            className="relative py-10 md:px-25 px-6 overflow-hidden"
            id="profile"
        >
            <div className="flex md:flex-row flex-col-reverse items-center gap-10 shadow-lg relative z-10">
                <div className=" flex justify-center md:justify-start">
                    <img
                        ref={imageRef}
                        src="/images/profile/fachri.png"
                        alt="fachri surya winata fatahe"
                        className="w-3/5 md:w-[500px] object-contain"
                    />
                </div>

                <div className="w-full text-white-50 p-6 relative">
                    {hovering && (
                        <span
                            ref={maskRef}
                            className="absolute w-32 h-32 bg-white rounded-full mix-blend-difference pointer-events-none z-20"
                            style={{ top: 0, left: 0 }}
                        />
                    )}
                    <h1
                        ref={titleRef}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        onMouseMove={handleMouseMove}
                        className="xl:text-5xl md:text-4xl font-extrabold leading-tight relative text-transparent bg-clip-text bg-gradient-to-r from-[#D9EAFD] to-[#ffffff] overflow-hidden"
                    >
                        Fachri Surya Winata Fatahe
                    </h1>
                    <p className="text-md md:text-lg text-gray-300 max-w-xl">
                        From XII SIJA 2 , Absent 11 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
