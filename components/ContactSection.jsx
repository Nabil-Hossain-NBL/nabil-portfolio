import Link from "next/link";
import { Button } from "./ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export const ContactSection = () => {
  return (
    <div className="py-16 w-11/12 mx-auto container" id="contact-section">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl text-center md:text-left  px-10 py-8 flex flex-col md:flex-row gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold ">
            Let's create something amazing together
          </h2>
          <p className="">
            Ready to bring your next project to life? Let's connet and discuss
            how I can help you achieve your goals.
          </p>
        </div>
        <div>
          <Link
            href={"https://www.linkedin.com/in/nabil-dev24/"}
            target="_blank"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-full bg-white text-gray-950 hover:transition-all hover:scale-105 uppercase w-auto px-6 "
            >
              <span>Contact me</span>
              <FaArrowRightLong className="" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
