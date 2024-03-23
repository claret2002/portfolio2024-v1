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
                        PROJECT: SOULO
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
                            <li><a href="https://drive.google.com/file/d/19NE7qO0XsqYjk0lw8R-J6mMSJQe7Eio_/view"
                                   className="">
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
                        A 5 week project that delved into interface design where we were given the task to develop an
                        application of our choice, rooted in thorough research and addressing a need.
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
                        Research, Prototyping, Content strategist, Visual design
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
                        Kasey Le, Van Mai, Kiran Bharathi, Sorren Jao
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
                        <source src="/video/soulo/souloPitch.mov" type="video/mp4"></source>
                    </video>

                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        SOULO
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        Soulo is a mobile application designed to help solo travelers discover unique events around
                        them, but also meet and connect with fellow like-minded travelers like themselves, fostering new
                        relationships and creating memories for every trip.
                    </p>

                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">


                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        PHASES OF TRAVELING (SOLO)
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The experience of traveling, whether alone or in a group, shares many similarities. In our
                        project, we chose to empathize with solo travellers, viewing their journey from their
                        perspective. We started by exploring the intricacies of solo travel and delving into the
                        emotions and challenges these travellers encounter along their path by noting down some actives
                        and emotions travellers experience along the way.
                    </p>

                </div>


                <div className="col-start-3 col-span-7 mt-10">
                    <Image src="/img/soulo/userjourneysolo.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-3 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Figure 1: Emotion + action mapping of solo travelers </p>
                </div>

                <div className="col-start-3 col-span-4">
                    <p className="text-base font-foundersGrotesk mt-5">
                        Initially our aim was to tackle all 3 phases, but we realized that would be too big of a scope.
                        So, we narrowed downed and made the decision to focus in on the <span className="font-bold">“During phase”  </span> of
                        traveling.
                    </p>

                </div>


            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">


                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        RESEARCH AND FINDINGS (PRIMARY RESEARCH)
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        Needing to hear first-hand from our target audience, affirm or negate our thoughts (Figure 1),
                        we conducted interviews with over 10 number of participants. The ultimate goal was to immerse
                        ourselves into their own traveling experience to uncover any patterns among travelers and
                        existent pain-points.
                    </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        To ensure we got the best possible outcome from the interviews, we recruited 2 kinds of
                        travelers:
                    </p>

                    <p className="text-base font-foundersGrotesk mt-10">
                        TRAVELER 1: People who usually travel in groups than solo </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        TRAVELER 2: People who travel more often solo than in groups </p>

                </div>


                <div className="col-start-3 col-span-7 mt-10">
                    <Image src="/img/soulo/souloinsight.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>


                <div className="col-start-3 col-span-4">
                    <p className="text-base font-foundersGrotesk mt-10">
                        From Insight 2 and 3, we learned that solo travellers are more open to adventures and enjoy
                        connecting with others, particularly fellow travellers. Insight 1 showed us that group
                        travellers feel comfortable with their companions and don&apos;t seek additional connections as
                        much,
                        further reinforcing the need to target Solo travellers.
                    </p>

                </div>


            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">


                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        RESEARCH AND FINDINGS (SECONDARY RESEARCH)
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        Traveling solo can be a daunting experience. To further understand why people travel alone we
                        conducted more of secondary research which revealed:
                    </p>

                    <div className="col-start-3 col-span-4 mt-10 ml-5">

                        <ol className="text-base font-foundersGrotesk font-bold list-decimal">
                            <li>
                                Exploration of the unknown: <span className="font-normal">They travel with the purpose of
                                exploring new places and getting out of their comfort zone to challenge their fears of unknowns. </span>
                            </li>
                            <li>
                                Independent growth: <span className="font-normal">Giving themselves the space
                                and time to enjoy their cultural, or personal journey to independently grow.</span>
                            </li>
                            <li>
                                Making connections: <span className="font-normal">Meeting new people and
                                building their connections along the way.</span>
                            </li>
                        </ol>

                    </div>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">
                <div className="col-start-3 col-span-5 mt-10">
                    <Image src="/img/soulo/soulohmw.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>


            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">


                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        INITIAL WIREFRAMES
                    </h3>


                </div>

                <div className="col-start-3 col-span-7 mt-10">
                    <Image src="/img/soulo/soulowireframes.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-4">

                    <p className="text-base font-foundersGrotesk mt-10">
                        These mockups were the original ideas we had. While the main theme of building connections and
                        cultural explorations were present. There were somethings that needed more consideration such as
                        the need for “Travelers’ stories, “Popular destinations”, and overall Layout.
                    </p>

                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">


                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        FINAL SOLUTION BREAKDOWN
                    </h3>

                </div>

                <div className="col-start-3 col-span-3 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/soulo/onboarding.mov" type="video/mp4"></source>
                    </video>
                </div>


                <div className="col-start-6 col-span-4 ml-16 mt-72 md:mt-96 lg:mt-96 lg:pt-40">

                    <h3 className="text-xl font-foundersGrotesk font-medium text-customOrange">
                        Onboarding 
                    </h3>

                    <p className="text-base font-foundersGrotesk mt-5">
                        The onboarding process starts with visual graphics illustrating Soulo&apos;s core functions:
                        joining
                        events and connecting with others. After registration, users input their fluent languages and
                        favorite hobbies. This information aids in finding compatible connections.
                    </p>

                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-3 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/soulo/groupactivity.mov" type="video/mp4"></source>
                    </video>
                </div>


                <div className="col-start-6 col-span-4 ml-16 mt-60 md:mt-96 lg:mt-96 lg:pt-40 ml-16">

                    <h3 className="text-xl font-foundersGrotesk font-medium text-customOrange">
                        Group activity finder
                    </h3>

                    <p className="text-base font-foundersGrotesk mt-5">
                        The Home page predominantly features events occurring on the same day, fostering a sense of
                        spontaneity. Users can adjust these listings using filters as needed. Events are displayed based
                        on proximity to the user, with each card showing the event name, type, distance, time until
                        start, and host. The app offers two event types: Public and Private
                    </p>

                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-3 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/soulo/joiningevent.mov" type="video/mp4"></source>
                    </video>
                </div>


                <div className="col-start-6 col-span-4 ml-16 mt-60 md:mt-96 lg:mt-96 lg:pt-40 ml-16">

                    <h3 className="text-xl font-foundersGrotesk font-medium text-customOrange">
                        Joining an Event
                    </h3>

                    <p className="text-base font-foundersGrotesk mt-5">
                        For all events, private details like venue and group chat access are initially restricted. To
                        join a private event, users must request access, which the host can either accept or decline.
                        This privacy measure was implemented to safeguard other solo travelers. Public events, on the
                        other hand, are open to all users without the need for approval, allowing immediate access by
                        clicking the &lsquo;Join&rsquo; button.
                    </p>

                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-3 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/soulo/newconnection.mov" type="video/mp4"></source>
                    </video>
                </div>


                <div className="col-start-6 col-span-4 ml-16 mt-60 md:mt-96 lg:mt-96 lg:pt-40 ml-16">

                    <h3 className="text-xl font-foundersGrotesk font-medium text-customOrange">
                        Making a new connection
                    </h3>

                    <p className="text-base font-foundersGrotesk mt-5">
                        For the &lsquo;Connection&rsquo; tab, it&apos;s designed to enhance solo
                        travellers&apos; intimate adventures rather
                        than focusing on large-scale experiences. Users can connect based on languages and
                        interests,
                        with communication limited to notes until requests are accepted. This approach aims to
                        prevent
                        spam and maintain a focus on meaningful connections during trips, rather than
                        functioning as
                        a
                        typical social media platform.
                    </p>

                </div>

            </div>





    {/*<div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-96">*/
    }

    {/*    <div className="col-start-3 col-span-4">*/
    }
    {/*        <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">*/
    }
    {/*            REFLECTION*/
    }
    {/*        </h3>*/
    }
    {/*        <p className="text-base font-foundersGrotesk mt-5">*/
    }
    {/*            asdasd*/
    }
    {/*        </p>*/
    }

    {/*        <p className="text-base font-foundersGrotesk mt-5">*/
    }
    {/*            asdasd*/
    }
    {/*        </p>*/
    }


    {/*    </div>*/
    }

    {/*</div>*/
    }

    <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
        <div className="bg-white py-40 col-start-1 col-span-full">

        </div>
    </div>


</main>
)
    ;
}
