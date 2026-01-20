import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);

    const handlemenuclick = () => {
        setClicked(!clicked);
    }



    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = ["Home", "About", "Academics", "Projects", "Resume", "Contact"];

    return (
        <header
            className={`fixed top-0 w-full z-50 bg-[#080e21c1] text-white shadow-md transition-all duration-300 
      ${isScrolled ? "pt-2 pb-3" : "pt-4 pb-4"}  px-8`}
        >
            <div className="flex justify-between items-center max-w-[1360px] mx-auto">
                <div className="text-3xl font-bold text-purple-400 cursor-pointer hidden lg:flex">TR.</div>

                <nav className=" gap-7 hidden lg:flex">
                    {links.map((item) => (
                        <div key={item} className="relative group">
                            <NavLink
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-400"
                                        : "hover:text-purple-400 transition-colors"
                                }
                            >
                                {item}
                            </NavLink>

                            <span className="absolute rounded-full -bottom-2 -left-2.5 -right-2.5 h-0.5 bg-purple-700 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </div>
                    ))}
                </nav>
            </div>



            <div className="flex justify-between items-center lg:hidden">
                <div className="text-3xl font-bold text-purple-400 cursor-pointer">
                    TR.
                </div>

                <FontAwesomeIcon
                    icon={faBars}
                    onClick={handlemenuclick}
                    className="cursor-pointer text-2xl"
                />
            </div>
            <div className={`lg:hidden h-screen  absolute w-[30%] bg-[#080e21]
  transition-all duration-300 ease-in-out
  ${clicked ? "right-0" : "-right-full"} `}
            >
                <nav className="flex flex-col gap-10 py-6 px-8 text-xl">
                    {links.map((item) => (
                        <div key={item} className="relative group w-fit">
                            <NavLink
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                onClick={() => setClicked(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-purple-400"
                                        : "hover:text-purple-400 transition-colors"
                                }
                            >
                                {item}
                            </NavLink>

                            <span className="absolute rounded-full -bottom-2 -left-2.5 -right-2.5 h-0.5 bg-purple-700
          origin-center scale-x-0 transition-transform duration-300 ease-out
          group-hover:scale-x-100">
                            </span>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}
