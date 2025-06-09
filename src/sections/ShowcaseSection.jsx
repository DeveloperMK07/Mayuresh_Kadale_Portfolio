import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const moreProjectsRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, moreProjectsRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/PR-1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Your Interview Coach in Your Pocket — Powered by AI, Driven by You
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with React Native, Vapi & TailwindCSS — for smooth, smart, and powerful mock interviews.
              </p>
              <a 
                href={projects[0].demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/PR-2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>Zentry Clone Website</h2>
              <a 
                href={projects[1].demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-3 inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
              >
                Live Demo
              </a>
            </div>

            <div className="project" ref={moreProjectsRef}>
              <a 
                href="https://github.com/DeveloperMK07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-border h-full w-full  hover:bg-gray-800 transition-all duration-300 cursor-pointer rounded-lg p-6 flex flex-col justify-center items-center relative"
              >
                <h2 className="text-center font-bold text-xl mb-4">MORE PROJECTS</h2>
                <div className="absolute bottom-4 left-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="7" x2="17" y2="17"></line>
                    <polyline points="17 7 17 17 7 17"></polyline>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
