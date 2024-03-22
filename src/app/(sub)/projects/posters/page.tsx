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
                        PROJECT: POSTERS
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
                <div className="bg-white py-52 col-start-1 col-span-full">

                </div>
            </div>

            <div className="flex flex-row justify-center">
                <div>
                    <h2 className="font-foundersGrotesk text-5xl ">COMING SOON</h2>
                </div>
            </div>


            <div className="mx-custom-margin grid grid-cols-10 gap-x-5 ">
                <div className="bg-white py-40 col-start-1 col-span-full">

                </div>
            </div>


        </main>
    );
}
