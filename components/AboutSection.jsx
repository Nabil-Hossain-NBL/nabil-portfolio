import Image from "next/image";
import { MdLibraryBooks } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import bookImage from "@/public/assets/bookCover.jpg";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TechIcon } from "./TechIcon";
import { ToolboxItems } from "./ToolboxItems";

const toolboxItems = [
  {
    title: "HTML",
    iconType: FaHtml5,
  },
  {
    title: "CSS",
    iconType: FaCss3Alt,
  },
  {
    title: "Tailwind",
    iconType: RiTailwindCssFill,
  },
  ,
  {
    title: "Bootstrap",
    iconType: FaBootstrap,
  },
  {
    title: "Javascript",
    iconType: IoLogoJavascript,
  },
  {
    title: "React",
    iconType: FaReact,
  },
  {
    title: "NextJs",
    iconType: RiNextjsFill,
  },
  ,
  {
    title: "NodeJs",
    iconType: FaNodeJs,
  },
];
export const AboutSection = () => {
  return (
    <div className="py-16 " id="about-section">
      <div>
        <p className="uppercase font-semibold text-center tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          about me
        </p>
        <h2 className="h2 text-center ">A Glimpse to My World</h2>
        <p className="text-center xl:text-lg text-white/60 max-w-md mx-auto mt-4">
          Learn more about who im, what i do, what inspires me.
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-6">
        <div className="md:grid md:grid-cols-5 gap-8">
          <div className="h-[320px] md:col-span-2 bg-gray-800 rounded-3xl overflow-hidden px-8 py-8 md:px-10 lg:px-20 border-white/60 border-2">
            <div>
              <div className="inline-flex items-center gap-4">
                <MdLibraryBooks className="text-sky-400  size-9" />
                <h3 className=" text-3xl">My Reads</h3>
              </div>
              <p className="text-white/60 text-sm">
                Explore the books shaping my perspective.
              </p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </div>
          <div className="h-[320px] md:col-span-3  bg-gray-800 rounded-3xl overflow-hidden border-white/60 border-2 mt-8 md:mt-0">
            <div className="px-8 py-8 md:px-10 lg:px-20">
              <div className="inline-flex items-center gap-4 ">
                <FaTools className="text-sky-400  size-9 " />
                <h3 className=" text-3xl">My Toolbox</h3>
              </div>
              <p>
                Explore the technologies and tools I use to craft my exceptional
                digital experiences.
              </p>
            </div>

            <ToolboxItems
              items={toolboxItems}
              className={""}
              itemWrapperClassName={
                "animate-move-left [animation-duration:25s]"
              }
            />
            <ToolboxItems
              items={toolboxItems}
              className={"mt-6"}
              itemWrapperClassName={
                "-translate-x-1/2 animate-move-right [animation-duration:15s]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
