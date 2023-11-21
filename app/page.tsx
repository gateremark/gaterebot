"use client";

import Image from "next/image";
import { Toaster, toast } from "sonner";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        toast.success(
            `Welcome ${
                session?.user?.name ? session?.user?.name : session?.user?.email
            }!`
        );
    }

    // console.log(session?.user);
    // console.log(session?.user?.name ?? "No user found");

    return (
        <div
            className="bg-[#050816] h-screen bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dvuazircp/image/upload/v1700070833/new_portfolio/herobg_lbcdc4.webp')`,
            }}
        >
            <Toaster richColors position="top-right" closeButton />
            <section className="flex flex-col gap-6 justify-center items-center">
                <h1 className=" text-[#ffffff] md:text-5xl text-3xl playpen">
                    Hello{" "}
                    {session?.user?.name
                        ? session?.user?.name
                        : session?.user?.email}{" "}
                </h1>
                <Image
                    src={session?.user?.image as string}
                    priority={true}
                    width={100}
                    height={100}
                    alt="Profile "
                    className="rounded-md"
                />
                <h1 className=" text-[#ffffff] md:text-3xl text-xl playpen">
                    Welcome to gaterebot
                </h1>
                {/* Link to chat */}
                <div className="flex gap-3">
                    <Link
                        href="/chat"
                        className="bg-[#ffffff] text-[#050816] p-2 md:p-3 rounded-lg hover:bg-[#646464] playpen cursor-pointer transition ease-in-out duration-500"
                    >
                        Continue to Chat
                    </Link>
                    <button
                        className="bg-[#ffffff] text-[#050816] p-2 md:p-3 rounded-lg hover:bg-[#646464] playpen cursor-pointer transition ease-in-out duration-500"
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </div>
            </section>
        </div>
    );
}
