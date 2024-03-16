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
                        PROJECT: DUTCH DESIGN AWARDS
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
                <div className="bg-white py-40 col-start-1 col-span-full">

                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
                <div className="col-start-1 col-span-1">
                    <h3 className="text-3xl font-testFounders text-customGray">
                        OVERVIEW
                    </h3>
                </div>
                <div className="col-start-3 col-span-4">
                    <p className="text-base font-foundersGrotesk ">
                        Over a 5-week project, our team delved into the works of designers like Muriel Cooper and Chris
                        Ashworth, drawing inspiration for graphical experiments that solidified our design principles.
                        These explorations culminated in the creation of dynamic posters, assets, and ultimately a
                        microsites for our simulated client, <span
                        className="font-bold"> the Dutch Design Awards. </span>
                    </p>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">
                <div className="col-start-1 col-span-1">
                    <h3 className="text-3xl font-testFounders text-customGray">
                        ROLE:
                    </h3>
                </div>
                <div className="col-start-3 col-span-4">
                    <h3 className="text-base font-foundersGrotesk ">
                        Visual Design, Research
                    </h3>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">
                <div className="col-start-1 col-span-1">
                    <h3 className="text-3xl font-testFounders text-customGray">
                        TEAM:
                    </h3>
                </div>
                <div className="col-start-3 col-span-4">
                    <h3 className="text-base font-foundersGrotesk ">
                        Luke Do, Justin Yu, Alex Luowan
                    </h3>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">
                <div className="col-start-1 col-span-1">
                    <h3 className="text-3xl font-testFounders text-customGray">
                        PROJECT TYPE:
                    </h3>
                </div>
                <div className="col-start-3 col-span-4">
                    <h3 className="text-base font-foundersGrotesk ">
                        Academic Project, 2023
                    </h3>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">
                <div className="col-start-1 col-span-full video-container"
                >
                    <video loop className="w-full" preload="auto" controls>
                        {/*<source src="/video/88rising/demo.webm" type="video/webm"></source>*/}
                        <source src="/video/dutchDesignAwards/headerVideo.mov" type="video/mp4"></source>
                    </video>

                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        THE DUTCH CULTURE
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The Dutch is known for their very explicit and direct nature. Never sugar - coating things nor
                        refraining from expressing their thoughts, beliefs, culture and opinions.
                    </p>

                    <p className="text-base font-foundersGrotesk mt-5 font-regular">
                        Their traditions, namely: <span className="font-medium"> Zwarte pete (Black Pete) and The Red light District known popularly
                        for sex work </span> are some of their controversial tradition. Despite the blatant racism of
                        Zwarte
                        Pete and calls for change, the Dutch has refused to move on from this tradition arguing that it
                        is an intrinsic part of their history. The world has largely pushed against it, some defend this
                        practice, claiming innocence or detachment from historical wrong stating:
                    </p>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-5">
                    <Image src="/img/dutchDesignAwards/whatTheDutchSaid.png"
                           alt="quotes of people saying indiscrimnate"
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-5">
                    <p className="text-base font-foundersGrotesk mt-5 font-regular">
                        These justifications only fuel racism, perpetuating its existence despite calls for change.
                    </p>
                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        SOLUTION - MICROSITE
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        In approaching this project, we chose to respond to the Dutch in the same way they speak to the
                        world: In a provocative manner. Showcasing the apparent racism of the tradition they so deny,
                        through a microsite
                    </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        Although this is not an existing work DDA currently possesses, we framed it as a fictional
                        submission into the Awards programs as DDA
                    </p>

                    <div className="col-start-3 col-span-5 mt-10">
                        <Image src="/img/dutchDesignAwards/ddaQuote.png"
                               alt="quotes of people saying indiscrimnate"
                               width={2752}
                               height={436}
                        >
                        </Image>
                    </div>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-44">
                <div className="col-start-3 col-span-7 video-container"
                >
                    <video loop className="w-full" preload="auto" controls>
                        {/*<source src="/video/88rising/demo.webm" type="video/webm"></source>*/}
                        <source src="/video/dutchDesignAwards/headerVideo.mov" type="video/mp4"></source>
                    </video>
                </div>
                <div className="col-start-3 col-span-4 mt-10">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        LANDING SCREEN
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The landing page serves to give context about what DDA stands for. Inviting Designers to embrace
                        new and unconventional means to address societal issues through their work.
                    </p>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-44">
                <div className="col-start-3 col-span-7 video-container"
                >
                    <video loop className="w-full" preload="auto" controls>
                        {/*<source src="/video/88rising/demo.webm" type="video/webm"></source>*/}
                        <source src="/video/dutchDesignAwards/headerVideo.mov" type="video/mp4"></source>
                    </video>
                </div>
                <div className="col-start-3 col-span-4 mt-10">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        ENGAGEMENT THROUGH OBSTRUCTION
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        By obscuring some parts of the content, we invite the audience to fill out the pieces in their
                        mind encouraging their imaginations and interpretations. Purposely keeping the full video
                        concealed encourage engagement and immerses them into the context.
                    </p>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-44">
                <div className="col-start-3 col-span-7 video-container"
                >
                    <video loop className="w-full" preload="auto" controls>
                        {/*<source src="/video/88rising/demo.webm" type="video/webm"></source>*/}
                        <source src="/video/dutchDesignAwards/headerVideo.mov" type="video/mp4"></source>
                    </video>
                </div>
                <div className="col-start-3 col-span-4 mt-10">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        EVOKING BRUTALITY THROUGH TYPE
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        To intensify the emotional impact of the visuals, typography was strategically placed and
                        layered, creating an effect akin to an &lsquo;emergent thorn.&rsquo; This deliberate choice
                        aimed to vividly
                        portray the brutality and stark reality linked to the subject at hand.
                    </p>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-80">
                <div className="col-start-3 col-span-4 mt-10">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        PROCESS - 3 LINES OF INVESTIGATION
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        We explored 3 forms of graphical experimentation taking inspiration from the work of Chris
                        Ashworth and Muriel Cooper. Each line containing provocative wording and imagery keeping in mind
                        of our aim of <span className="font-bold"> provoking. </span>
                    </p>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
                <div className="bg-white py-40 col-start-1 col-span-full">

                </div>
            </div>

        </main>
    );
}
