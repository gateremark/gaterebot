"use client";

import Image from "next/image";
import { Toaster, toast } from "sonner";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    if (session) {
        toast.success(`Welcome ${session?.user?.name}!`);
    }

    console.log(session?.user);
    // console.log(session?.user?.name ?? "No user found");

    return (
        <>
            <Toaster richColors position="bottom-right" closeButton />
            <section className="flex flex-col gap-6">
                <header>Welcome to Home Page</header>
                <Image
                    src={session?.user?.image}
                    priority={true}
                    width={50}
                    height={50}
                    alt="Profile "
                    className="rounded-full"
                />
            </section>
        </>
    );
}
