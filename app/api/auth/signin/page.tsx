"use client";

import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Signin = () => {
    const [providers, setProviders] = useState<Record<string, any> | null>(
        null
    );
    const router = useRouter();
    useEffect(() => {
        const fetchProviders = async () => {
            const providers = await getProviders();
            // Handle providers data as needed
            console.log(providers);
            setProviders(providers as Record<string, any> | null);
        };

        fetchProviders();
    }, []);

    const handleSignIn = async (providerId: string) => {
        const result = await signIn(providerId);
        if (result?.url) {
            // Redirect to home page after successful sign-in
            router.push("/");
        }
    };
    return (
        <div className="flex w-full justify-center items-center">
            <div className=" relative flex flex-col justify-center items-center h-screen bg-[#000000] w-[60%] text-[#ffffff]">
                <Image
                    src="/gaterebot.webp"
                    width={450}
                    height={450}
                    alt="Picture of the author"
                />
            </div>
            <div className="flex flex-col justify-center items-center h-screen bg-[#00002E] w-[40%] text-[#ffffff]">
                {" "}
                <div className="flex flex-col gap-3">
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <div
                                key={provider.name}
                                style={{ marginBottom: 0 }}
                                className=""
                            >
                                {provider.id === "github" ? (
                                    <button
                                        className="flex gap-2 items-center justify-center bg-[#000000] px-4 py-3 text-xl hover:bg-[#0000FF] rounded transition ease-in-out duration-150 cursor-pointer"
                                        onClick={() =>
                                            handleSignIn(provider.id)
                                        }
                                    >
                                        <FaGithub className="text-2xl" />
                                        Sign in with {provider.name}
                                    </button>
                                ) : (
                                    <button
                                        className="flex gap-2 items-center justify-center text-[#000000] bg-[#ffffff] px-4 py-3 text-xl hover:bg-[#0000FF] rounded transition ease-in-out duration-150 cursor-pointer"
                                        onClick={() =>
                                            handleSignIn(provider.id)
                                        }
                                    >
                                        <FcGoogle className="text-2xl" />
                                        Sign in with {provider.name}
                                    </button>
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Signin;
