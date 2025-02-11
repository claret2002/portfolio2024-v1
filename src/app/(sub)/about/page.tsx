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


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-36">

                <div className="col-start-3 col-span-3 ">
                    <Image src="/img/about/claretaboutpfp.png"
                           alt=""
                           width={4792}
                           height={2327}
                    >
                    </Image>
                </div>

            </div>

            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 mt-10">

                <div className="col-start-3 col-span-4">
                    <h3 className="text-base font-foundersGrotesk font-medium">
                        Hi There!
                    </h3>
                    <p className="text-base font-foundersGrotesk mt-5">
                        I'm sure you already know, but name is Claret and I sometimes also go by my native name, Amara.
                        I recently just completed my studies at Simon Fraser University which is exciting...I think. 
                        Through out my journey there, I developed a love for all things design, but of recent I’ve
                        particularly grown an interest in exploring the different ways stories can be told within this
                        field and how I can continuously use design as a tool to challenge and make a statement in
                        our world today.
                        

                    </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        Outside of my design life, you can always see me out in the Summer exploring whatever city I'm in.
                        Right now I'm in Toronto and loving every bit of it. I’m Nigerian or as I like to call us -
                         “The Giants of Africa” and I enjoy exploring different ways to celebrate my
                        culture and introduce people to it in anyway I can (music, hair, clothing etc). Speaking of
                        music, you can check out some of the recent African beats I am currently in love with. <span
                        className="underline hover:text-customGray ease-in-out duration-300"> <a
                        href="https://open.spotify.com/playlist/47TMnG4C6TgK6udS6AlKF1?si=515dae53dd9a4d26">here</a>. </span>
                    </p>

                    <p className="text-base font-foundersGrotesk mt-5">
                        Looking forward to connecting with you!

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
