import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen antialiased">
            {/*<div className="bg-white fixed top-0 left-0 right-0 z-50 py-5">*/}
            <nav className="mx-custom-margin grid grid-cols-10 gap-x-5 bg-white fixed top-0 left-0 right-0 z-50 py-5 ">
                <div className="col-start-1 col-span-2">
                    <a href="/">
                        <div className="flex flex-row gap-2">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.4309" cy="11.2388" r="10.4315" fill="black"/>
                                <path
                                    d="M11.39 7.16187H9.46814V10.1185H6.58533V12.0895H9.46814V17.0172H11.39V12.0895H14.2728V10.1185H11.39V7.16187Z"
                                    fill="white"/>
                            </svg>
                            <h4 className="text-4xl font-foundersGrotesk font-medium text-customGray pt-1">
                                CLARET EGWIM
                            </h4>
                        </div>
                    </a>
                </div>

                <div className="col-start-3 col-span-3">
                    <p className="text-customGray font-testFounders font-medium text-4xl">
                        A DESIGNER WHO PURPOSEFULLY INTEGRATES REASON, STRATEGY, EMPATHY AND PROCESS TO CRAFT PRODUCTS
                        THAT NOT ONLY MEETS THE NEEDS OF PEOPLE BUT ALSO PLAYS A LARGER ROLE IN REAL CONTEXT.
                    </p>
                </div>

                <div className="col-start-8 col-span-2">
                    <ul className="flex flex-col text-customGray font-testFounders font-medium text-4xl">
                        <li><a href="/" className="">
                            <button
                                className="">ABOUT ME
                            </button>
                        </a></li>
                        <div className="pt-3">
                            <li><a href="/" className="">
                                <button
                                    className="">RESUME
                                </button>
                            </a></li>
                            <li><a href="/" className="">
                                <button
                                    className="">LINKEDIN
                                </button>
                            </a></li>
                            <li><a href="/" className="">
                                <button
                                    className="">EMAIL
                                </button>
                            </a></li>
                        </div>
                    </ul>
                </div>


            </nav>
            {/*</div>*/}

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
                <div className="bg-white py-28 col-start-1 col-span-full">

                </div>
            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mb-10">
                <a className="col-start-1 col-span-5"
                   href="/triggerwarningfolder/triggerwarning">
                    <Image src="/img/dutchDesignAwards/thumbnail_dutchDesignAward.png"
                           alt="a laptop"
                           width={3632}
                           height={2667}
                    >
                    </Image>
                </a>

                <div className="col-start-1 col-span-4 mt-4">
                    <h2 className="font-foundersGrotesk font-medium text-3xl">
                        DUTCH DESIGN AWARD
                    </h2>
                </div>
                <div className="col-start-1 col-span-2 mt-1">
                    <h2 className="font-testFounders font-medium text-3xl text-customGray">
                        ART DIRECTION, INTERACTION DESIGN, RESEARCH
                    </h2>
                </div>

                <div className="col-start-4 col-span-2 mt-1 ">

                    <h2 className="ml-2 font-testFounders font-medium text-3xl text-customGray ">
                        SURFACING THE VERY EXPLICIT NATURE OF THE DUTCH CULTURE.
                    </h2>

                </div>

                <a className="col-start-6 col-span-5 row-start-1"
                   href="/projects/88rising">
                    <Image src="/img/dutchDesignAwards/thumbnail_dutchDesignAward.png"
                           alt="a laptop"
                           width={3632}
                           height={2667}
                    >
                    </Image>
                </a>

                <div className="col-start-6 col-span-4 mt-4 row-start-2">
                    <h2 className="font-foundersGrotesk font-medium text-3xl">
                        88RISING
                    </h2>
                </div>
                <div className="col-start-6 col-span-2 mt-1 row-start-3">
                    <h2 className="font-testFounders font-medium text-3xl text-customGray">
                        EXPERIENCE DESIGN, INTERACTION DESIGN, CONTENT STRATEGY, RESEARCH
                    </h2>
                </div>

                <div className="col-start-9 col-span-2 mt-1 row-start-3">

                    <h2 className="ml-2 font-testFounders font-medium text-3xl text-customGray ">
                        A REVAMP OF 88RISING WEBSITE WITH A FOCUS ON ENHANCED ARTISTS DISCOVERABILITY.
                    </h2>

                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mb-10">
                <a className="col-start-1 col-span-5"
                   href="/triggerwarningfolder/triggerwarning">
                    <Image src="/img/soulo/thumbnail_soulo.png"
                           alt="a laptop"
                           width={3632}
                           height={2667}
                    >
                    </Image>
                </a>

                <div className="col-start-1 col-span-4 mt-4">
                    <h2 className="font-foundersGrotesk font-medium text-3xl">
                        SOULO
                    </h2>
                </div>
                <div className="col-start-1 col-span-2 mt-1">
                    <h2 className="font-testFounders font-medium text-3xl text-customGray">
                        ART DIRECTION, INTERACTION DESIGN, RESEARCH
                    </h2>
                </div>

                <div className="col-start-4 col-span-2 mt-1 ">

                    <h2 className="ml-2 font-testFounders font-medium text-3xl text-customGray ">
                        SURFACING THE VERY EXPLICIT NATURE OF THE DUTCH CULTURE.
                    </h2>

                </div>

                <a className="col-start-6 col-span-5 row-start-1"
                   href="/projects/88rising">
                    <Image src="/img/posters/thumbnail_posters.png"
                           alt="a laptop"
                           width={3632}
                           height={2667}
                    >
                    </Image>
                </a>

                <div className="col-start-6 col-span-4 mt-4 row-start-2">
                    <h2 className="font-foundersGrotesk font-medium text-3xl">
                        POSTERS
                    </h2>
                </div>
                <div className="col-start-6 col-span-2 mt-1 row-start-3">
                    <h2 className="font-testFounders font-medium text-3xl text-customGray">
                        EXPERIENCE DESIGN, INTERACTION DESIGN, CONTENT STRATEGY, RESEARCH
                    </h2>
                </div>

                <div className="col-start-9 col-span-2 mt-1 row-start-3">

                    <h2 className="ml-2 font-testFounders font-medium text-3xl text-customGray ">
                        A REVAMP OF 88RISING WEBSITE WITH A FOCUS ON ENHANCED ARTISTS DISCOVERABILITY.
                    </h2>

                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mb-10 mt-96">
                <div className="col-start-1 col-span-3">
                    <h1 className="text-5xl font-foundersGrotesk font-medium ">
                        RESUME
                    </h1>
                </div>

                <div className="col-start-1 col-span-1">
                    <h4 className="font-testFounders font-medium text-3xl text-customGray mt-16 row-start-2">
                        EXPERIENCE
                    </h4>
                </div>
                <div className="col-start-3 col-span-2 row-start-2">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 ">
                        CONFERENCE ORGANIZER - TOUCHPOINT SFU
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl mt-2 text-customGray">
                        01.2023 - 04.2023
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl text-customGray">
                        01.2024 - 04.2024
                    </h4>
                </div>

                <div className="col-start-5 col-span-4 row-start-2 ml-16">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 text-customGray">
                        COORDINATED A DESIGN CONFERENCE HOSTING 200+ GUESTS AND 8 SPEAKERS, OVERSEEING STUDENT
                        INTERVIEWS WITH 9 COMPANIES WHICH RESULTED IN X PEOPLE GETTING AN INTERNSHIP. COLLABORATED WITH
                        A TEAM OF 3 TO DEVELOP THE VISUAL IDENTITY FOR THE CONFERENCE WEBSITE.

                    </h4>
                </div>

                <div className="col-start-3 col-span-2 row-start-3">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 ">
                        PRODUCT DESIGNER - 88RISING
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl mt-2 text-customGray">
                        ACADEMIC PROJECT
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl text-customGray mt-1">
                        11.2023 - 12.2023
                    </h4>
                </div>

                <div className="col-start-5 col-span-4 row-start-3 ml-16">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 text-customGray">
                        CONTRIBUTED TO A WEBSITE REDESIGN PROJECT FOR 88RISING AIMED AT ENHANCING THE DISCOVERABILITY OF
                        LESSER KNOWN ARTISTS, ALIGNING WITH THE COMPANY&apos;S MISSION OF BRIDGING EASTERN AND WESTERN
                        CULTURES.

                    </h4>
                </div>

                <div className="col-start-3 col-span-2 row-start-4">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 ">
                        VISUAL DESIGNER - DUTCH DESIGN AWARDS
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl mt-2 text-customGray">
                        ACADEMIC PROJECT
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl text-customGray mt-1">
                        09.2023 - 10.2023
                    </h4>
                </div>

                <div className="col-start-5 col-span-4 row-start-4 ml-16">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 text-customGray">
                        LED CREATION OF A BOLD VISUAL IDENTITY FOR A FICTIONAL DUTCH DESIGN AWARD SUBMISSION. ADDRESSED
                        CONTROVERSIAL CULTURAL TOPICS LIKE SWARTZ PETE. DEMONSTRATED ABILITY TO USE DESIGN TO PROVOKE
                        CRITICAL DISCOURSE.

                    </h4>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mb-10 mt-20">
                <div className="col-start-1 col-span-1">
                    <h4 className="font-testFounders font-medium text-3xl text-customGray mt-16 row-start-2">
                        EDUCATION
                    </h4>
                </div>

                <div className="col-start-3 col-span-2 ">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 ">
                        SIMON FRASER UNIVERSITY
                    </h4>
                    <h4 className="font-testFounders font-medium text-3xl text-customGray mt-1">
                        2020 - 2025
                    </h4>
                </div>
                <div className="col-start-5 col-span-4 ml-16">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 text-customGray">
                        BACHELORS OF ARTS IN INTERACTIVE ARTS AND TECHNOLOGY, WITH A CONCENTRATION IN DESIGN

                    </h4>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mb-10 mt-20">
                <div className="col-start-1 col-span-1">
                    <h4 className="font-testFounders font-medium text-3xl text-customGray mt-16 row-start-2">
                        SKILLS
                    </h4>
                </div>

                <div className="col-start-3 col-span-2 ">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 ">
                        DESIGN
                    </h4>
                </div>
                <div className="col-start-5 col-span-2 ml-16 row-start-1">
                    <div className="flex flex-col mt-16 gap-1">
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            GRAPHIC DESIGN
                        </h4>
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            USER RESEARCH
                        </h4>
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            STORYTELLING
                        </h4>
                    </div>

                </div>

                <div className="col-start-6 col-span-2 ml-16 row-start-1">
                    <div className="flex flex-col mt-16 gap-1">
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            CONTENT STRATEGY </h4>
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            EXPERIENCE DESIGN </h4>

                    </div>

                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mb-10 mt-20">
                <div className="col-start-3 col-span-2 ">
                    <h4 className="font-testFounders font-medium text-3xl mt-16 ">
                        TOOLS
                    </h4>
                </div>


                <div className="col-start-6 col-span-2 ml-16 row-start-1">
                    <div className="flex flex-col mt-16 gap-1">
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            FIGMA </h4>


                    </div>
                </div>

                <div className="col-start-5 col-span-2 ml-16 row-start-1">
                    <div className="flex flex-col mt-16 gap-1">
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            HTML/CSS </h4>


                    </div>
                </div>
            </div>
        </main>
    );
}
