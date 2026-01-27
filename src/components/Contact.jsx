import React from "react";
import SplitText from "./SplitText";
import Header from "./header";
import AnimatedContent from "./AnimatedContent";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Contact() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <>
            <Header />
            <section className="contact">
                <div className="contact-container bg-[#080E21] min-w-full min-h-screen pt-28 lg:pt-30 pb-24">
                    <div className="text-center px-4">
                        <SplitText
                            text="Let's Get In Touch"
                            className="mb-4 pb-2 font-bold text-purple-500 text-4xl md:text-5xl "
                            delay={30}
                            duration={1}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                            showCallback={false}
                        />
                        <AnimatedContent
                            distance={30}
                            direction="vertical"
                            reverse={false}
                            duration={1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <p className="text-gray-400  text-lg md:text-xl max-w-3xl mx-auto">
                                Feel free to reach out to me for collaborations, inquiries, or just to say hello! You can contact me via email or connect with me on social media platforms.
                            </p>
                        </AnimatedContent>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto mt-12 px-4">
                        <div className="contact_left w-full bg-[#a093aa27]  rounded-xl p-8 mx-auto mt-8">
                            <div className="text-purple-400 text-xl font-semibold "> Contact Information </div>
                            <div className="mt-4 space-y-4 mb-6">
                                <div className="flex items-center bg-[#0b122967] gap-4 p-2 rounded-xl border border-gray-800">
                                    <span className="text-purple-400 bg-[#804c9836] rounded-lg h-10 items-center flex justify-center w-10"><CiMail className="text-2xl" /></span>
                                    <div className="flex flex-col  ">
                                        <h2 className="font-semibold text-gray-300">Email</h2>
                                        <p className="text-gray-400 mb-2">tanmayraj707@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-[#0b122966] gap-4 p-2 rounded-xl border border-gray-800">
                                    <span className="text-purple-400 bg-[#804c9836] rounded-lg h-10 items-center flex justify-center w-10"><CiLocationOn className="text-2xl" /></span>
                                    <div className="flex flex-col">
                                        <h2 className="font-semibold text-gray-300">Location</h2>
                                        <p className="text-gray-400 mb-2">New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-purple-400 text-xl font-semibold ">
                                Social Media
                            </div>
                            <div className="flex gap-4 mt-5">
                                <a href="https://github.com/Tanmayraj503"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 bg-[#071441] w-10 rounded-xl flex items-center justify-center text-gray-300 hover:text-purple-900">
                                    <FontAwesomeIcon icon={faGithub} className="text-xl" />

                                </a>
                                <a href="https://www.instagram.com/tanmay.raj53"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 bg-[#071441] w-10 rounded-xl flex items-center justify-center text-gray-300 hover:text-pink-600">
                                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=DQS6mU8Uhn8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 bg-[#071441] w-10 rounded-xl flex items-center justify-center text-gray-300 hover:text-blue-400">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                                </a>
                                <a href="mailto:tanmayraj707@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 bg-[#071441] w-10 rounded-xl flex items-center justify-center text-gray-300 hover:text-yellow-500">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />

                                </a>
                            </div>
                        </div>
                        <div className="contact_right w-full bg-[#a093aa27]  rounded-xl p-8 mt-8">
                            <div>
                                <label htmlFor="name"
                                    className="block text-gray-300 font-semibold mb-2">
                                        <input type="text" 
                                        className="bg-[#0b122966] border border-gray-800 rounded-lg p-2 w-full text-gray-300 focus:outline-none focus:border-purple-500" 
                                        required
                                        placeholder="John Doe"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}