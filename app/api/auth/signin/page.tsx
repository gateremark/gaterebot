"use client";

import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import ReactTyped from "react-typed";

const Signin = () => {
    const [providers, setProviders] = useState<Record<string, any> | null>(
        null
    );
    // const router = useRouter();

    useEffect(() => {
        const fetchProviders = async () => {
            const providers = await getProviders();
            // Handle providers data as needed
            // console.log(providers);
            setProviders(providers as Record<string, any> | null);
        };

        fetchProviders();
    }, []);

    return (
        <div className="flex flex-wrap w-full justify-center items-center">
            <div className=" relative flex flex-col justify-center items-center md:h-screen h-[40vh] bg-[#000000] w-full md:w-[60%] text-[#ffffff]">
                <Image
                    src="https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebotorig_ymxuzb.webp"
                    priority={true}
                    width={450}
                    height={450}
                    alt="gaterebot logo"
                    className="w-1/2"
                />
            </div>
            <div className="flex flex-col gap-10 justify-center items-center md:h-screen h-[60vh] bg-[#00002E] w-full md:w-[40%] text-[#ffffff]">
                {" "}
                {providers && (
                    <>
                        <h1 className="text-4xl">Hello there!</h1>
                        <h1 className="text-xl text-center">
                            <ReactTyped
                                strings={[
                                    "Welcome to gaterebot!",
                                    "Write an application email for a job...",
                                    "Help me write a cover letter for an internship...",
                                    "Help me debug the Python script...",
                                ]}
                                typeSpeed={100}
                                loop
                                backSpeed={30}
                                cursorChar="|"
                                showCursor={true}
                            />
                        </h1>
                    </>
                )}
                <div className="flex flex-col gap-3">
                    {providers ? (
                        Object.values(providers).map((provider) => (
                            <div
                                key={provider.name}
                                style={{ marginBottom: 0 }}
                                className=""
                            >
                                {provider.id === "github" ? (
                                <button
                                    className="flex gap-2 items-center justify-center bg-[#000000] px-4 py-3 text-xl hover:bg-[#0000FF] rounded transition ease-in-out duration-150 cursor-pointer"
                                    onClick={() => signIn(provider.id)}
                                >
                                    <FaGithub className="text-2xl" />
                                    Sign in with {provider.name}
                                </button>
                                
                                 ) : (
                                     <button
                                         className="flex gap-2 items-center justify-center text-[#000000] bg-[#ffffff] px-4 py-3 text-xl hover:bg-[#0000FF] rounded transition ease-in-out duration-150 cursor-pointer"
                                         onClick={() => signIn(provider.id)}
                                     >
                                         <FcGoogle className="text-2xl" />
                                         Sign in with {provider.name}
                                     </button>
                                 )}
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center h-screen">
                            {" "}
                            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#ffffff]"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signin;
