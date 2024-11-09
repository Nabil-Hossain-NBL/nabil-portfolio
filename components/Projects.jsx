import Image from "next/image";
import Link from "next/link";
import StunecktBanner from "@/public/assets/StunecktBanner.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    company: "Stuneckt",
    year: "2024",
    title: "Social Networking Platforms",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=5739s",
    image: StunecktBanner,
  },
  {
    company: "Stuneckt",
    year: "2024",
    title: "Social Networking Platforms",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=5739s",
    image: StunecktBanner,
  },
  {
    company: "Stuneckt",
    year: "2024",
    title: "Social Networking Platforms",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=dImgZ_AH7uA&t=5739s",
    image: StunecktBanner,
  },
];

function Projects(props) {
  return (
    <section className="pb-16 lg:py-24">
      <div className="">
        <p className="uppercase font-semibold text-center tracking-widest text-accent">
          Real-world Results
        </p>
        <h2 className="h2 text-center ">Featured Project</h2>
        <p className="text-center xl:text-lg text-white/60 max-w-md mx-auto mt-4">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className=" mt-10 md:mt-20 flex flex-col gap-20 w-11/12  mx-auto">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 border-white/60 border-2 relative"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="lg:pb-16">
                  <div className="inline-flex text-accent text-sm tracking-widest uppercase gap-2">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5  mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex text-sm gap-2 p-0 items-center"
                      >
                        <FaRegCircleCheck className="size-4 md:size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 rounded-full text-accent border-2 border-accent bg-primary hover:bg-accent hover:text-primary hover:transition-all duration-500 uppercase w-full md:w-auto px-6 mt-8"
                    >
                      <span>visit live site</span>
                      <FaArrowRightLong className="-rotate-45 hover:rotate-0 duration-500" />
                    </Button>
                  </Link>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 "
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
