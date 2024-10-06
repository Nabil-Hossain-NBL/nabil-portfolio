import React from "react";
import {
  FaHtml5,
  FaCss3,
  Fajs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam,sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nabil Hossain",
    },
    {
      fieldName: "Phone/Whatsapp",
      fieldValue: "(+88) 01893819920",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladesi",
    },
    {
      fieldName: "Email",
      fieldValue: "nabilhossainprf@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languafe",
      fieldValue: "Bangla, English, Hindi",
    },
  ],
};

const experience = {
  title: "My experience",
  desccription: "",
  items: [
    {
      company: "Stuneckt",
      position: "Front End Developer",
      duration: "2023-Nov - 2024-June",
    },
  ],
};
const skill = {
  title: "My skills",
  desccription: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FiFigma />,
      name: "figma",
    },
  ],
};

function Resume(props) {
  return <div>Resume</div>;
}

export default Resume;
