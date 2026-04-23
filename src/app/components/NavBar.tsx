import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Explore", id: "explore" },
    { name: "Prizes", id: "prizes" },
    { name: "Rules", id: "rules" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex justify-center items-center py-2 px-2 md:py-4 md:px-6 ${
        isScrolled
          ? "bg-[#060a12]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-row items-center md:gap-y-0 space-x-0 md:space-x-10 text-[10px] md:text-base font-medium tracking-wide font-['Cinzel_Decorative']">
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-10 text-[9px] sm:text-[10px] md:text-sm lg:text-base">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-normal md:tracking-wider transition-transform hover:scale-105"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("community")}
          className="hidden md:block mt-1 md:mt-0 md:ml-4 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-emerald-500 md:border-2 md:border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all uppercase tracking-widest md:tracking-wider font-bold shadow-none text-sm lg:text-base"
        >
          Join CodeClub Community
        </button>
      </div>
    </nav>
  );
}
