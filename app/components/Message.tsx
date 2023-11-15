"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Message = ({ role, content }) => {
    const { data: session } = useSession();

    return (
        <>
            {role === "user" ? (
                <div className="p-4 flex gap-5 items-start">
                    <Image
                        src={session?.user?.image}
                        priority={true}
                        width={40}
                        height={40}
                        alt="User:"
                        className="rounded inline"
                    />

                    <div className="pt-1">{content}</div>
                </div>
            ) : (
                <div className="bg-[#444654] h-fit p-4 flex gap-5 items-start">
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebotorig_ymxuzb.webp"
                        priority={true}
                        width={40}
                        height={40}
                        alt="gaterebot: "
                        className="rounded inline"
                    />
                    <div className="pt-1 text-[#d1d5db]">{content}</div>
                </div>
            )}
        </>
    );
};

export default Message;
