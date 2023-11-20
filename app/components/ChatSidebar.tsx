"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";

const ChatSidebar = () => {
    const { data: session } = useSession();
    const [chatList, setChatList] = useState([]);

    const user = session?.user;
    const email = user?.email;

    useEffect(() => {
        const getChats = async () => {
            try {
                const response = await fetch(
                    `/api/chat/getChats?email=${email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const json = await response.json();
                console.log("Response:", json);
                setChatList(json?.chats ?? []);
            } catch (error) {
                console.error("Error getting chats:", error);
            }
        };

        getChats();
    }, [email]);

    return (
        <div className=" bg-[#202123] text-[#ffffff] flex flex-col px-5">
            <Link
                href="/chat"
                className="p-3 bg-[#40414F] flex gap-2 items-center hover:bg-[#000000] my-2 rounded-md"
            >
                {" "}
                <Image
                    src="https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebotorig_ymxuzb.webp"
                    priority={true}
                    width={30}
                    height={30}
                    alt="gaterebot: "
                    className="rounded inline"
                />
                New Chat{" "}
            </Link>

            <div className="flex-1 overflow-auto">
                {chatList.map((chat: any) => (
                    <Link href={`/chat/${chat._id}`}>
                        <div className="flex items-center gap-2 py-2 px-3 hover:bg-[#000000] rounded-md">
                            <AiFillMessage className="text-xl" />
                            <div className="flex items-center gap-2">
                                <span>{chat.title}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <button
                className="flex items-center gap-5 p-2 hover:bg-[#000000] bg-[#40414F] rounded-md my-3"
                onClick={() => signOut()}
            >
                <Image
                    src={session?.user?.image as string}
                    priority={true}
                    width={40}
                    height={40}
                    alt="User:"
                    className="rounded-full inline"
                />
                <div className="flex items-center gap-2">
                    <span>Logout</span>
                    <LuLogOut />
                </div>
            </button>
        </div>
    );
};

export default ChatSidebar;
