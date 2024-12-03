import { Social } from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Photo } from "./Photo";

export const HeroSection = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between py-16 xl:pb-24 nav-height">
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">Software Developer</span>
        <h1 className="h1 mb-6">
          Hello I'm <br />{" "}
          <span className="bg-sky-400 text-transparent bg-clip-text">
            Nabil Hossain{" "}
          </span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
          ipsam dolores? Numquam, consequatur nulla autem placeat ratione
          debitis assumenda error eveniet quas totam ut
        </p>
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <a href="">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-full bg-white text-gray-950 hover:transition-all hover:scale-105 duration-1000 uppercase "
            >
              <span>Download CV</span>
              <FiDownload className="text-lg" />
            </Button>
          </a>
          <div className="mb-8 xl:mb-0">
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-sky-400 rounded-full flex justify-center items-center text-sky-400 text-base hover:bg-sky-400 hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  );
};
