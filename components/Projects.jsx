import Image from "next/image";
import Link from "next/link";
import project from "@/public/assets/project.png";
import project1 from "@/public/assets/project1.png";
import project2 from "@/public/assets/project2.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    company: "Stuneckt",
    year: "2024",
    title: "iPhone 15 Pro",
    results: [
      {
        title:
          "Created seamless and captivating animations using GSAP to enhance user engagement and experience.",
      },
      {
        title:
          "Developed dynamic 3D model rendering for the iPhone 15 Pro, showcasing customizable colors and sizes for an interactive product display.",
      },
      {
        title:
          "Built a custom video carousel powered by GSAP, delivering an engaging and interactive media browsing experience.",
      },
    ],
    link: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=5739s",
    image: project1,
  },
  {
    company: "Stuneckt",
    year: "2024",
    title: "E-Result",
    results: [
      {
        title:
          "Designed an intuitive and engaging interface with React and ES6, ensuring smooth and delightful user interactions",
      },
      {
        title:
          "Integrated MongoDB for efficient real-time data storage and retrieval, enhancing user flow and performance.",
      },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "Ensured a fully responsive design, providing consistent accessibility and optimal viewing across all devices.",
    image: project,
  },
  {
    company: "Stuneckt",
    year: "2024",
    title: "Portfolio",
    results: [
      {
        title:
          "Designed and developed a modern, animated portfolio leveraging Framer Motion to create smooth and engaging transitions.",
      },
      {
        title:
          "Implemented a responsive design, ensuring seamless user experiences across various devices and screen sizes.",
      },
    ],
    link: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=5739s",
    image: project2,
  },
];

function Projects(props) {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="">
        <p className="uppercase font-semibold text-center tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          Real-world Results
        </p>
        <h2 className="h2 text-center ">Featured Project</h2>
        <p className="text-center xl:text-lg text-white/60 max-w-md mx-auto mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className=" mt-10 md:mt-20 flex flex-col gap-20 w-11/12  mx-auto">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 border-white/60 border-2  sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="lg:pb-16">
                  <div className="inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-sm tracking-widest uppercase gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5  mt-4" />
                  <div className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <div
                        key={result.title}
                        className="flex text-sm gap-2 p-0 items-center"
                      >
                        <div>
                          <FaRegCircleCheck className="size-4 md:size-5" />
                        </div>
                        <div>{result.title}</div>
                      </div>
                    ))}
                  </div>
                  <Link href={project.link} target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 rounded-full bg-white text-gray-950 hover:transition-all hover:scale-105 duration-500  uppercase w-full md:w-auto px-6 mt-8"
                    >
                      <span>visit live site</span>
                      <FaArrowRightLong className="-rotate-45 hover:rotate-0 duration-500" />
                    </Button>
                  </Link>
                </div>
                <div className="w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 "
                    width={600}
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
