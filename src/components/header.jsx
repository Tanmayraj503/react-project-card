import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AnimatedContent from './AnimatedContent'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);

    const handlecombinedproperty = () => {
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

    const navigate = useNavigate();

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 bg-[#080e21c1] text-white shadow-md transition-all duration-300 
                    ${isScrolled ? "pt-2 pb-3" : "pt-4 pb-4"} px-8`}
            >
                <AnimatedContent
                    distance={50}
                    direction="vertical"
                    reverse
                    duration={0.7}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity={false}
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex justify-between items-center max-w-[1360px] mx-auto">
                        <div className="text-3xl font-bold text-purple-400 cursor-pointer" onClick={() => navigate('/')}>TR.</div>

                        <nav className="gap-7 flex">
                            {links.map((item) => (
                                <div key={item} className="relative group">
                                    <NavLink
                                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span className={isActive ? "text-purple-400" : "hover:text-purple-400 transition-colors"}>
                                                    {item}
                                                </span>
                                                <span className={`absolute rounded-full -bottom-2 -left-2.5 -right-2.5 h-0.5 bg-purple-700 origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                                            </>
                                        )}
                                    </NavLink>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Header */}
                    <div className="flex justify-between items-center lg:hidden">
                        <div className="text-3xl font-bold text-purple-400 cursor-pointer">TR.</div>
                        <button 
                            onClick={handlecombinedproperty}
                            className="cursor-pointer text-2xl z-50"
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={clicked ? faXmark : faBars} />
                        </button>
                    </div>
                </AnimatedContent>
            </header>

            {/* Mobile Menu - Outside header */}
            <div className={`lg:hidden fixed top-14 right-0 h-screen w-64 bg-[#080e21] shadow-md transition-transform duration-300 ease-in-out z-40 ${clicked ? "translate-x-0" : "translate-x-full"}`}>
                <nav className="flex flex-col gap-10 py-20 px-8 text-xl">
                    {links.map((item) => (
                        <div key={item} className="relative group w-fit">
                            <NavLink
                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                onClick={() => setClicked(false)}
                                className={({ isActive }) =>
                                    isActive ? "text-purple-400" : "hover:text-purple-400 transition-colors text-white"
                                }
                            >
                                {item}
                            </NavLink>
                            <span className="absolute rounded-full -bottom-2 -left-2.5 -right-2.5 h-0.5 bg-purple-700 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Overlay */}
            {clicked && (
                <div 
                    className="lg:hidden fixed inset-0 z-30"
                    onClick={() => setClicked(false)}
                />
            )}
        </>
    );
}