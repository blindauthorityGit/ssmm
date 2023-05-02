import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

//ASSETS
import HeroImg from "../assets/hero.png";
import Logo from "../assets/logoNeu2.png";
import Dashboard from "../assets/dashboard.png";
import Dashboard2 from "../assets/dashboard2.png";
import People from "../assets/people.png";
import Vision from "../assets/vision.jpg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    const [clients, setClients] = useState(0);
    const [adspend, setAdSpend] = useState(0);
    const [roi, setRoi] = useState(0);
    const clientRef = useRef(null);
    const adspendRef = useRef(null);
    const roiRef = useRef(null);
    const allRef = useRef(null);

    function animateClientsNumber() {
        const finalValue = 6;
        let currentValue = 0;
        const duration = 1500; // 1.5 seconds
        const increment = finalValue / (duration / 16); // 16ms per frame

        const intervalId = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                clearInterval(intervalId);
                currentValue = finalValue;
            }
            clientRef.current.innerText = Math.round(currentValue);
        }, 16);
    }

    function animateAdspendNumber() {
        const finalValue = 9100;
        let currentValue = 0;
        const duration = 1500; // 1.5 seconds
        const increment = finalValue / (duration / 16); // 16ms per frame

        const intervalId = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                clearInterval(intervalId);
                currentValue = finalValue;
            }
            adspendRef.current.innerText = Math.round(currentValue) + " €";
        }, 16);
    }
    function animateRoiNumber() {
        const finalValue = 10.1;
        let currentValue = 0;
        const duration = 1500; // 1.5 seconds
        const increment = finalValue / (duration / 16); // 16ms per frame

        const intervalId = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                clearInterval(intervalId);
                currentValue = finalValue;
            }
            roiRef.current.innerText = currentValue.toFixed(1) + "x";
        }, 16);
    }

    useEffect(() => {
        // const animateClientsNumber = () => {
        //     // Your animation code here
        //     console.log("BUBU");
        // };

        // const animateAdspendNumber = () => {
        // };

        // const animateRoiNumber = () => {
        //     // Your animation code here
        // };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === clientRef.current) {
                            animateClientsNumber();
                        } else if (entry.target === adspendRef.current) {
                            animateAdspendNumber();
                        } else if (entry.target === roiRef.current) {
                            animateRoiNumber();
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "0px",
                threshold: 0.2, // Detect when element is 20% visible
            }
        );

        if (clientRef.current) {
            observer.observe(clientRef.current);
        }
        if (adspendRef.current) {
            observer.observe(adspendRef.current);
        }
        if (roiRef.current) {
            observer.observe(roiRef.current);
        }

        AOS.init({
            duration: 1200,
        });
    }, []);

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1200,
    //     });
    //     animateClientsNumber();
    //     animateAdspendNumber();
    //     animateRoiNumber();
    // }, []);

    return (
        <MainContainer width="max-w-[80%]">
            <Head>
                <title>Site title</title>
            </Head>
            <Hero fullHeight={true} colspan="col-span-12"></Hero>
            <div className="col-span-12">
                <img className="w-48" src={Logo.src} alt="" />
            </div>
            <div className="top grid grid-cols-12 col-span-12 items-center">
                <div className="col-span-12 lg:col-span-6" data-aos="fade-right">
                    <h1 className="font-sans text-5xl font-bold text-[#fff] tracking-wider">
                        Advanced Social Media Marketing For Meta, Instagram, TikTok And YouTube
                    </h1>
                    <h2 className="text-2xl text-[#fff] mt-4">with a breathtaking ROI</h2>
                    <a
                        href="./#call"
                        className="bg-primaryColor inline-block font-sans text-xl text-[#fff] py-5 px-8 mt-8 font-bold rounded-full "
                    >
                        Book a free Strategy Call
                    </a>
                </div>
                <div className="col-span-12 lg:col-span-6 order-first lg:order-last" data-aos="fade-left">
                    <img src={HeroImg.src} alt="" />
                </div>
            </div>
            <div className="top grid grid-cols-12 col-span-12 " ref={allRef}>
                <hr className="col-span-12 mb-12 border-primaryColor-100 opacity-30" />
                <div className="col-span-12 lg:flex justify-evenly">
                    <div data-aos="fade-up" className="one flex flex-col items-center mb-6 lg:mb-0">
                        <h2 ref={clientRef} className="text-[#fff] text-7xl font-bold">
                            {clients}
                        </h2>
                        <p className="text-primaryColor-50 text-xl font-sans">Active Clients</p>
                    </div>
                    <div data-aos="fade-down" className="two flex flex-col items-center mb-6 lg:mb-0">
                        <h2 ref={adspendRef} className="text-[#fff] text-7xl font-bold">
                            {adspend}
                        </h2>
                        <p className="text-primaryColor-50 text-xl font-sans">Monthly Adspend</p>
                    </div>
                    <div data-aos="fade-up" className="three flex flex-col items-center mb-6 lg:mb-0">
                        <h2 ref={roiRef} className="text-[#fff] text-7xl font-bold">
                            {roi}
                        </h2>
                        <p className="text-primaryColor-50 text-xl font-sans">Average ROI</p>
                    </div>
                </div>
                <hr className="col-span-12 mt-12 border-primaryColor-100 opacity-30" />
            </div>
            <div className="top grid grid-cols-12 col-span-12 mt-16">
                <h2 className="text-primaryColor-500 mb-24 tracking-wider text-6xl font-bold col-span-12 text-center">
                    The SSMM Approach
                </h2>
                <div className="col-span-12 lg:col-span-4">
                    <img src={Dashboard.src} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 pl-8 pr-12">
                    <h3 className="text-[#fff] text-5xl font-bold text-center mb-12">What We Do</h3>
                    <ul className="text-xl text-[#fff] space-y-4">
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We analyse your brand history
                        </li>
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We design a strategy that is aligned with your brand vision
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We create and run campaigns that sell your product efficiently
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We collect and utilise data to continuously optimise and scale your campaigns
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We aim to achieve a ROI of 3+ for our clients
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-0  pr-12">
                    <h3 className="text-[#fff] text-5xl font-bold text-center mb-12">What We Don't Do</h3>
                    <ul className="text-xl text-[#fff] space-y-4">
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaTimesCircle />
                            </span>
                            We don't charge any money for on boarding
                        </li>
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaTimesCircle />
                            </span>
                            We don't create the content for campaigns{" "}
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaTimesCircle />
                            </span>
                            We don't offer free trials
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaTimesCircle />
                            </span>
                            We don't offer Google Ads, Email Marketing or SEO Optimisation
                        </li>{" "}
                    </ul>
                </div>
            </div>
            <div className="top grid grid-cols-12 col-span-12 mt-16">
                <div className="col-span-12 lg:col-span-8 lg:pr-24">
                    <h2 className="text-primaryColor-500 mb-8 tracking-wider text-6xl font-bold">
                        {" "}
                        SABOCON SOCIAL MEDIA MARKETING
                    </h2>
                    {/* <img src={Dashboard.src} alt="" /> */}
                    <p className="font-sans text-[#fff] text-lg tracking-wider mb-4">
                        SSMM is a next Generation Agency that implements new technologies and seamless systems that
                        allow for a higher efficiency, frequent and detailed performance reports, a rapid workflow, and
                        breathtaking results.
                    </p>
                    <p className="font-sans text-[#fff] text-lg tracking-wider mb-4">
                        Moving away from outdated agency structures, which included month-long onboarding processes,
                        high start-up fees as well as sporadic and impersonal communication. And more importantly, a
                        lack of pace, which does not reflect the times we are in today. As a lean business, we reduced
                        our services to its core goal and strength: to achieve results.
                    </p>
                    <p className="font-sans text-[#fff] text-lg tracking-wider mb-4">
                        We will spend less than an hour on-boarding you, and are able to directly move to strategising
                        and delivering results in an efficient manner. Above all, we are determined to provide price
                        calculations that are based on logic instead of guesswork, to allow for a transparent and
                        seamless cooperation.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <img src={Dashboard2.src} alt="" />
                </div>
            </div>
            <div className="top grid grid-cols-12 col-span-12 mt-16">
                <h2 className="text-primaryColor mb-24 tracking-wider text-6xl font-bold col-span-12 text-center">
                    What We Do
                </h2>
                <div className="col-span-12 lg:col-span-4">
                    <img src={Dashboard.src} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 pl-8 pr-12">
                    <h3 className="text-[#fff] text-5xl font-bold text-center mb-12">Done For You</h3>
                    <ul className="text-xl text-[#fff] space-y-4">
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We create the strategy
                        </li>
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We create the campaigns
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We collect data & optimise
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We scale to unseen heights
                        </li>{" "}
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We deliver a breathtaking ROI
                        </li>
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            We take care of everything. A-Z
                        </li>
                        <li className="flex items-center">
                            {" "}
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            You sit back and enjoy bi-weekly sales reports.
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-16 lg:mt-0  pr-12">
                    <h3 className="text-[#fff] text-5xl font-bold text-center mb-12">Done With You</h3>
                    <ul className="text-xl text-[#fff] space-y-4">
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            For businesses that need consulting.
                        </li>
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            In conjunction with your team, Lena will construct a premium advertising campaign, and
                            instruct you on how to scale and maintain it in the future.
                        </li>
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            Gives your team great insight into the mechanics of profitable social media advertising,
                            from someone who does it successfully on a daily basis.
                        </li>
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            In-person workshops last from 2 to 3 days, depending on the individual needs of your
                            company.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-12 text-center lg:px-56">
                <h3 className="text-4xl font-sans text-[#fff] font-bold mt-20">
                    You Are Welcome To Book A Free Call Anytime
                </h3>
                <p className="text-2xl font-sans text-[#fff]  mt-4">
                    During this Call We will discuss everything from Strategy to Custom Solutions, and elaborate how
                    exactly We can help grow Your Business
                </p>
                <a
                    href="./#call"
                    className="bg-primaryColor inline-block font-sans text-xl text-[#fff] py-5 px-8 mt-8 font-bold rounded-full "
                >
                    Book a free Strategy Call
                </a>
            </div>
            <div className="top grid grid-cols-12 col-span-12 mt-24">
                <div className="col-span-12 lg:col-span-6 lg:pl-24" data-aos="fade-left">
                    <h2 className="text-[#fff] mb-8 tracking-wider text-6xl font-bold">Our Vision</h2>
                    {/* <img src={Dashboard.src} alt="" /> */}
                    <p className="font-sans text-[#fff] text-lg tracking-wider mb-4">
                        Social Media is a driving force in our connected world today, which requires to adapt marketing
                        strategies and B2C communication accordingly. We aim to provide calculated and effective
                        solutions in strategic and advanced social media marketing. Always available, no matter what
                        line of communication, we deeply care about our clients and prioritise existing partnerships
                        before closing new ones. SSMM was founded by Marc Werner, and is operated together with many
                        young talentsa, to create a contemporary Marketing Agency and Consultancy, in line with the
                        times we live in today. When the industry changes, we change along with it. We believe in
                        cooperation and in defining strong marketing and business solutions, based on research and data
                        optimisation.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-6 order-first">
                    <img data-aos="fade-up" src={Vision.src} alt="" />
                </div>
            </div>
            <div id="call" className="top grid grid-cols-12 col-span-12 mt-24">
                <div className="col-span-12 lg:col-span-6 lg:pl-8 lg:pr-48">
                    <h3 className="text-[#fff] text-5xl font-bold  mb-12">Book A Free Strategy Call</h3>

                    <p className="font-sans text-[#fff] text-lg tracking-wider mb-4">
                        Our Strategy Calls and Client On-Boarding are completely free, and non-binding of course. During
                        this call we will go in depth on social media marketing strategies we could customise and
                        implement for your particular business, in order to heavily boost the growth of your business
                        and drive online sales. Simply choose a time-slot that would suit your calendar, and lock it in.
                    </p>
                    <p className="font-sans text-[#fff] text-lg tracking-wider mb-4">
                        We are looking forward to talking to you!
                    </p>
                    <h3 className="text-[#fff] text-3xl font-bold  mb-12 mt-16">What Are Strategy Calls For</h3>

                    <ul className="text-xl text-[#fff] space-y-4">
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            Businesses looking to increase their online sales with a breathtaking return on investment
                        </li>
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            Businesses looking to optimise their social media marketing efforts in conjunction with a
                            next Generation lean agency
                        </li>
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            Businesses looking for an agency that can take them from mediocre to superior within the
                            field of eCommerce and Online Sales
                        </li>
                        <li className="flex items-center">
                            <span className="mr-4 text-2xl">
                                <FaCheckCircle />
                            </span>
                            Businesses looking for an agency that has no higher priority than the clients it serves
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 lg:col-span-6 mt-16 lg:mt-0 lg:order-first">
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/saboconsocialmediamarketing/strategy-meeting"
                        style={{ minWidth: "320px", height: "1130px" }}
                    ></div>
                </div>
            </div>
        </MainContainer>
    );
}
