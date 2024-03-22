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
                        PROJECT: 88RISING
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
                            <li><a href="https://drive.google.com/file/d/19NE7qO0XsqYjk0lw8R-J6mMSJQe7Eio_/view" className="">
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
                        Over the span of 7 weeks, our focus centered on the exploration and implementation of Experience
                        Design principles. Our objective was to identify a client grappling with a specific challenge
                        and develop a tailored intervention to address their needs.
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
                        Content Strategy, User Research, Visual Design
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
                        Luke Do, Justin Yu, Alex Luowan, Terence Xu
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
                <div className="col-start-1 col-span-5">
                    <Image src="/img/88rising/artistscollab.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </div>
                <div className="col-start-6 col-span-5">
                    <Image src="/img/88rising/artistpersonality.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">
                <div className="col-start-1 col-span-5">
                    <Image src="/img/88rising/discography.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </div>
                <div className="col-start-6 col-span-5">
                    <Image src="/img/88rising/songrelease.png"
                           alt="a laptop"
                           width={3075}
                           height={1672}
                    >
                    </Image>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        WHO IS 88RISING
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        Just like me, before now you may have probably not heard of 88rising yet the uniqueness of their
                        goal drew me in. As a music and entertainment company, 88rising stands out with the aim of
                        representing Asian culture and bridging the East and the West. In an industry where Asians have
                        been stereotyped for a long time, 88rising boldy challenges these stereotypes by showing that
                        Asians deserve a presence and influence in music genres particularly Hip Hop and Rap

                    </p>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-4">
                    <Image src="/img/88rising/seanmiyashiroquote.png"
                           alt="quotes of people saying indiscrimnate"
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-5 col-span-2 ml-20 mt-5">
                    <p className="text-base font-foundersGrotesk">
                        Sean Miyashiro, Founder of 88rising
                    </p>
                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        PROBLEM SPACE
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        Within the past 4 years, 88rising has faced an issue with discoverability as they have struggled
                        with providing their newer artist with the same reach they previously had with older artist,
                        loosing over 2.6million in viewership (Figure 1). This loss has stagnated their goal of
                        introducing Asians into mainstream media and serves as a hindrance to the company and its goal.

                    </p>


                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-5">
                    <Image src="/img/88rising/problemspace_figure1.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-3 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Figure 1: Representation of viewership between 2016 - 2023
                    </p>
                </div>


            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">

                <div className="col-start-3 col-span-5">
                    <Image src="/img/88rising/problemspace_figure2.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-3 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Figure 2: 88rising viewership as of 2023 (Artist based)
                    </p>
                </div>

                <div className="col-start-3 col-span-4 mt-10">
                    <p className="text-base font-foundersGrotesk">
                        Comparatively, the older artists (Joji, Rich Brian and Niki) are doing better than the newer
                        artists who appear to be struggling in reach despite putting out music releases. At this point,
                        I realized a number of factors could be attributed to the poor viewership. Some assumption we
                        had were:
                    </p>

                </div>

                <div className="col-start-3 col-span-4 mt-10 ml-5">

                    <ol className="text-base font-foundersGrotesk list-decimal">
                        <li>
                            Their music weren’t just as good compared to the older artist.
                        </li>
                        <li>
                            The audience had not been able to make a connection with the newer artist, hence their reach
                            being low.
                        </li>
                    </ol>

                </div>

                <div className="col-start-3 col-span-4 mt-10">
                    <p className="text-base font-foundersGrotesk">
                        To test this assumptions and perhaps uncover a blind spot we may have been missing, we conducted
                        interviews with 89 survey participants who were in one way or the other fans of 88rising. The
                        questions revolved around the <span className="font-bold">perceptions of 88rising as a brand and their artist as well as
                        respondents music sharing habits to better understand how artists are discovered. </span>
                    </p>

                    <p className="text-base font-foundersGrotesk mt-7">
                        At the point, <span className="font-bold">what kind of fans we should be targeting remained unclear to me.</span> However,
                        I saw
                        the survey as a means to better under the fans through their habits, aiming to pinpoint the
                        exact areas of disconnect between the then and artists.
                    </p>

                </div>


            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        SURVEY RESULTS
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">


                    </p>

                </div>

                <div className="col-start-3 col-span-4 mt-10">
                    <p className="text-base font-foundersGrotesk">
                        The 2 main points we found out from the survey was:
                    </p>

                </div>

                <div className="col-start-3 col-span-4 mt-10 ml-5">

                    <ol className="text-base font-foundersGrotesk font-bold list-decimal">
                        <li>
                            62% <span className="font-normal">of respondents were not aware of 88rising&apos;s
                            frequent releases</span>
                        </li>
                        <li>
                            41% <span className="font-normal">of respondents attributed 88rising&apos;s decline in
                            popularity to their lack of engagement stating:</span>
                        </li>
                    </ol>

                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-4">
                    <Image src="/img/88rising/surveyquote.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-6 col-span-2 mt-10">
                    <p className="text-base font-foundersGrotesk">
                        Survey Participant
                    </p>
                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-20">
                <div className="col-start-3 col-span-4 mt-10">
                    <p className="text-base font-foundersGrotesk">
                        While the first assumption that I made was wrong (Their music weren’t just as good compared to
                        the older artist.), the second was more in line with the issue (The audience had not been able
                        to make a connection with the newer artist, hence their reach being low.). After the survey, we
                        were clearly able to identify 2 kinds of fans:
                    </p>

                </div>

                <div className="col-start-3 col-span-4 mt-10 ml-5">

                    <ol className="text-base font-foundersGrotesk font-bold list-decimal">
                        <li>
                            die hard fans: <span className="font-normal">those who actively seek out and engage with 88rising be it through social
                            media or song listen and are fairly up to date with latest releases or their favorite
                            artists.</span>
                        </li>
                        <li>
                            Casual fans: <span className="font-normal">those who gravitate towards 88rising’s renowned artists but show limited
                            awareness of other talents on the roster. While they are interested in knowing more about
                            these lesser-known artists, casual fans most of the time, will only engage with artists if
                            they appear in their feeds. </span>
                        </li>
                    </ol>

                </div>

                <div className="col-start-3 col-span-4 mt-10">
                    <p className="text-base font-foundersGrotesk">
                        Moving forward we chose to target <span className="font-bold"> casual fans </span>as we observed
                        they are the segment of fans that
                        has experienced a decline of engagement with the brand. Focusing on this fan segment will
                        provide 88rising with more opportunities to foster stronger brand loyalty and spur growth by
                        leveraging their diverse roster of talents.
                    </p>

                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-5">
                    <Image src="/img/88rising/sprintprocess.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-5 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Figure 3: Journey mapping and HMW’s generated during a working session.
                    </p>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-5">
                    <Image src="/img/88rising/journeymap.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

                <div className="col-start-3 col-span-5 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Figure 4: Simplified journey of fans </p>
                </div>

                <div className="col-start-3 col-span-4 mt-7">
                    <p className="text-base font-foundersGrotesk ">
                        We discovered a notable gap between fans and 88rising during the consumption phase. While fans
                        encounter content sporadically, the effort required to seek out more is often hindered by the
                        scattered distribution of 88rising&apos;s content across various online platforms. </p>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        EXISTING TOUCHPOINT
                    </h3>
                </div>

                <div className="col-start-3 col-span-6 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/existingsite.webm" type="video/webm"></source>
                    </video>
                </div>

                <div className="col-start-3 col-span-5 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Figure 5: 88risings current website and YouTube channel </p>
                </div>

                <div className="col-start-3 col-span-4 mt-7">
                    <p className="text-base font-foundersGrotesk ">
                        88risings current site only focuses of sale, lacking information about artist themselves or
                        music, which may give the wrong impression of the label. Additionally, their YouTube channel
                        houses content sparsed across various platform making it hard for fans to discover and further
                        engagement. </p>
                </div>

                <div className="col-start-3 col-span-4 mt-7">
                    <p className="text-base font-foundersGrotesk ">
                        This led us to the question: </p>
                </div>

                <div className="col-start-3 col-span-4 mt-7">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk text-customRed">
                        How might we create a centralized platform for casual fans, <span className="font-bold"> simplifying the discovery and
                        supporting lesser-known artists </span>to further their reach and engagement while establishing
                        connections with the audience </h3>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-40">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        CONTENT STRATEGY
                    </h3>
                </div>

                <div className="col-start-3 col-span-4 mt-7">
                    <p className="text-base font-foundersGrotesk ">
                        <span className="font-bold"> Collaborative promotion: </span>Promoting discovery and increasing
                        exposure for the
                        lesser-known artists of 88rising by surfacing collaborative content with established talents.
                    </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        <span className="font-bold"> Personifying artist: </span>Showcasing the personalities of
                        artists, to create a memorable first impression through unconventional means: using stickers and
                        short clips that personify the artists and highlight them in a more relatable light.</p>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">
                <div className="col-start-1 col-span-full video-container mt-10">
                    <video className="w-full" preload="auto" poster="/img/88rising/videothumbnail.png" controls>
                        <source src="/video/88rising/demo.mov" type="video/mp4"></source>
                    </video>
                </div>

                <div className="col-start-1 col-span-5 mt-5">
                    <p className="text-base font-foundersGrotesk text-customGray">
                        Script by Claret Egwim & Luke Do, Video by Justin Yu, Voiceover by Angie Yu </p>
                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">
                <div className="col-start-3 col-span-7 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/homepage.mov" type="video/mp4"></source>
                    </video>
                </div>

                <div className="col-start-3 col-span-4 mt-12">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        LANGUAGE DRIVEN ARTIST DISCOVERY
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The landing page features an array of Asian languages alongside their respective countries,
                        fostering exploration and discoverability. Designed with the aim of initiating connections, it
                        invites users to gravitate towards a language or country they resonate with, facilitating the
                        discovery of artists from the same cultural background.

                    </p>


                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">
                <div className="col-start-3 col-span-7 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/collaborations.mov" type="video/mp4"></source>
                    </video>
                </div>

                <div className="col-start-3 col-span-4 mt-12">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        BEHIND THE BEAT COLLABORATIONS
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The collaboration page adopts an emotion-centric approach, showcasing behind-the-scenes content
                        from music videos to humanize the artists. This aims to present artists in a more relatable
                        light. Additionally, fans are offered direct links to the song on various streaming platforms,
                        enhancing their immersive experience.

                    </p>


                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">
                <div className="col-start-3 col-span-7 video-container mt-10">
                    <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                        <source src="/video/88rising/artists.mov" type="video/mp4"></source>
                    </video>
                </div>

                <div className="col-start-3 col-span-4 mt-12">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        CELEBRATING UNIQUE PERSONALITIES
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The artist page adopts an innovative approach, aiming to highlight the distinctive personalities
                        of the artists, which 88rising themselves consider. Utilizing a brief introductory video to
                        offer insight into their essence, a diverse collection of quirky stickers tailored to each
                        artist, and an assortment of video content including music videos, behind-the-scenes footage,
                        and exploratory content, the page offers a multifaceted glimpse into the artists&apos; worlds.

                    </p>


                </div>
            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-4 col-span-6 ml-20">
                    <Image src="/img/88rising/artistlink.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-96">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-caseStudyHeader font-foundersGrotesk font-medium">
                        REFLECTION
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        The process of landing this project, was not an easy one. It took us quite some time to believe
                        this was the right space, because we were constantly seeking for something more. Something to
                        make it “perfect”. This project was yet again another reminder that the process is never linear.
                        There’s always something that can be done to improve your work, but being a good designer is
                        also knowing when to look at your project and say “stop, this is it”.
                    </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        So grateful for my team. This was a challenging one for all of us, but we held each other down
                        and continued to work as a team and as friends!
                    </p>

                </div>

            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
                <div className="bg-white py-40 col-start-1 col-span-full">

                </div>
            </div>


        </main>
    )
        ;
}
