import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen antialiased bg-customRed">
            <div className="mx-custom-margin grid grid-cols-11 gap-x-5 mb-10 ">
                <div className="col-start-1 col-span-full mt-80 ">
                    <div className="flex flex-row justify-center">
                        <h4 className="text-white font-testFounders text-4xl font-regular">
                            DISCLAIMER:
                        </h4>
                    </div>
                </div>
                <div className="col-start-1 col-span-full mt-8">
                    <div className="flex flex-row justify-center">
                        <p className="text-center font-testFounders text-base text-white font-regular">
                            THE PROJECT CONTAINS GRAPHIC CONTENT DEPICTING SCENES OF SLAVERY AND INCLUDING VIOLENT
                            IMAGERY.
                            VIEWER DISCRETION IS ADVISED. THESE DEPICTIONS ARE INTENDED TO CONVEY THE HARSH REALITIES OF
                            HISTORICAL EVENTS AND MAY BE DISTURBING TO SOME VIEWERS. THE CONTENT IS PRESENTED FOR
                            EDUCATIONAL
                            PURPOSES AND TO PROVOKE THOUGHTFUL REFLECTION VIEWER DISCRETION IS ADVISED.
                        </p>
                    </div>
                </div>

                <div className="row-start-3 mt-28 col-span-full col-start-1">
                    <div className="flex flex-row justify-center">
                        <a href="/">
                            <button
                                className="font-testFounders text-4xl border-white py-5 px-56 outline outline-1 text-white outline-white">
                                VIEW PROJECT
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
