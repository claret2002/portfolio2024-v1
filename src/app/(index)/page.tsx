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
                        FUELED BY THE PASSION FOR STORYTELLING, I&apos;M DRIVEN TO DISCOVER AND NARRATE THE DIVERSE STORIES 
                        WAITING TO BE TOLD THROUGH DESIGN. I AIM TO UNIQUELY POSITION COMPANIES BY CRAFTING ENGAGING 
                        EXPERIENCES THAT RESONATES WITH THEIR AUDIENCE LEAVING A LASTING IMPACT. 
                    </p>
                </div>

                <div className="col-start-8 col-span-2">
                    <ul className="flex flex-col text-customGray font-testFounders font-medium text-4xl">
                        <li><a href="/about" className="">
                            <button
                                className="hover:underline ease-in-out duration-300">ABOUT ME
                            </button>
                        </a></li>
                        <div className="pt-3">
                            <li><a href="https://drive.google.com/file/d/19NE7qO0XsqYjk0lw8R-J6mMSJQe7Eio_/view?usp=sharing" className="">
                                <button
                                    className="hover:underline ease-in-out duration-300">RESUME
                                </button>
                            </a></li>
                            <li><a href="https://www.linkedin.com/in/claret-egwim-nwagbara-2412881b8/" className="">
                                <button
                                    className="hover:underline ease-in-out duration-300">LINKEDIN
                                </button>
                            </a></li>
                            <li><a href="mailto:Egwimclaret2002@gmail.com" className="">
                                <button
                                    className="hover:underline ease-in-out duration-300">EMAIL
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
                    <Image src="/img/88rising/thumbnail.png"
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
                   href="/projects/soulo">
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
                        UI DESIGN, UX RESEARCH, EXPERIENCE DESIGN
                    </h2>
                </div>

                <div className="col-start-4 col-span-2 mt-1 ">

                    <h2 className="ml-2 font-testFounders font-medium text-3xl text-customGray ">
                        CONNECTING SOLO TRAVELERS TO NEARBY ACTIVITIES AND FELLOW ADVENTURERS FOR SHARED EXPERIENCES.

                    </h2>

                </div>

                <a className="col-start-6 col-span-5 row-start-1"
                   href="/projects/posters">
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
                        ACADEMIC WORK
                    </h2>
                </div>

                <div className="col-start-9 col-span-2 mt-1 row-start-3">

                    <h2 className="ml-2 font-testFounders font-medium text-3xl text-customGray ">
                        SOME EXPERIMENT POSTERS I MADE FOR CLASSES THAT I LOVED
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
                        MANAGED A DESIGN CONFERENCE FOR TWO YEARS, HOSTING 500+ ATTENDEES AND 17 SPEAKERS. OVERSAW
                        EVENT LOGISTICS, SCHEDULING, AND VENUE MANAGEMENT. CURATED STUDENT SHORTLIST FOR INTERVIEWS 
                        WITH 9 COMPANIES FACILITATING INTERNSHIPS. COLLABORATED WITH A TEAM OF 3 TO SHAPE THE 
                        CONFERENCE&apos;S VISUAL IDENTITY EACH YEAR THROUGH CONSTRUCTIVE FEEDBACK.

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
                        CONTRIBUTED TO CONTENT STRATEGY AND VISUAL DESIGN FOR THE 88RISING WEBSITE REDESIGN, 
                        REFINING FONT PAIRINGS AND LAYOUTS TO ENHANCE ARTIST DISCOVERABILTY. CONDUCTED INTERVIEWS TO
                        INFORM CONTENT DECISIONS, IMPROVING USER ENGAGEMENT AND SHOWCASING EMERGING TALENT.

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
                        DEVELOPED A MICROSITE FOR A FICTIONAL DUTCH DESIGN AWARD PRE-EVENT, FRAMED TO INVITE DESIGNER 
                        SUBMISSIONS AND CHALLENGE THE STATUS QUO. ADDRESSING CONTROVERSIAL TOPICS SUCH AS ZWARTE PETE
                         - A RACIST CHARACTER - DEMONSTRATING THE ABILITY TO PROVOKE CRITICAL DISCOURSE THROUGH DESIGN.
                        

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
                            STORYTELLING
                        </h4>
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            VISUAL DESIGN
                        </h4>
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            EXPERIENCE DESIGN
                        </h4>
                    </div>

                </div>

                <div className="col-start-6 col-span-2 ml-16 row-start-1">
                    <div className="flex flex-col mt-16 gap-1">
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            CONTENT STRATEGY </h4>
                        <h4 className="font-testFounders font-medium text-3xl text-customGray">
                            USER RESEARCH </h4>

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

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
                <div className="bg-white py-40 col-start-1 col-span-full">

                </div>
            </div>
        </main>
    );
}
