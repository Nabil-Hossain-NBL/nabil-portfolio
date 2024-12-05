import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Nabil-Hossain-NBL",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/nabil-dev24/",
  },
];

export const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
