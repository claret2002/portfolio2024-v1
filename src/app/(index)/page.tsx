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
                            <li><a href="https://drive.google.com/file/d/1BJkzvA9EfP1GXl_hc3Y4DOyjJR9sAMz2/view?usp=sharing" className="">
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

        </main>
    );
}
