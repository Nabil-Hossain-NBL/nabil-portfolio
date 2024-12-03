import { FaArrowRightLong } from "react-icons/fa6";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nabil-dev24/",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100013441904309",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/nabil.ent/",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@nabilhossain1084",
  },
];

export const FooterSection = () => {
  return (
    <footer className="relative">
      <div className="container mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((item) => (
              <a
                target="_blank"
                href={item?.href}
                key={item}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{item?.title}</span>
                <FaArrowRightLong className="size-4 -rotate-45" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
