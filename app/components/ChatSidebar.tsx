"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillMessage } from "react-icons/ai";
import classNames from "classnames";
// import { IoChevronBackSharp } from "react-icons/io5";

const ChatSidebar = () => {
    const { data: session } = useSession();
    const [chatList, setChatList] = useState([]);
    const [openSidebar, setOpenSidebar] = useState(true);
    const [filteredData, setFilteredData] = useState([])

    const user = session?.user;
    const email = user?.email;
    // console.log("email: ", email);

    // const params = new URLSearchParams({ email: email ?? '' });
    // console.log("params")

    useEffect(() => {
        const getChats = async () => {
            try {
                const response = await fetch(`/api/chat/getChats`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const json = await response.json();
                // console.log("Response:", json);
                setChatList(json?.chats);
            } catch (error) {
                console.error("Error getting chats:", error);
            }
        };

        getChats();
    }, [email]);
    // console.log("chatList", chatList);

    useEffect(()=>{
       const filteredData = chatList.filter((chat:any)=> chat.email == email)
       setFilteredData(filteredData);
    }, [chatList])

    // console.log(filteredData)

    return (
        <div
            className={classNames(
                " bg-[#202123] text-[#ffffff] md:flex flex-col px-5 overflow-hidden w-[260px] hidden ",
                {
                    "translate-x-0": openSidebar,
                    "-translate-x-full": !openSidebar,
                }
            )}
        >
            <div className="flex items-center relative">
                <Link
                    href="/chat"
                    className="p-3 bg-[#40414F] flex flex-1 gap-2 items-center hover:bg-[#000000] my-2 rounded-md"
                >
                    {" "}
                    <Image
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebotorig_ymxuzb.webp"
                        priority={true}
                        width={30}
                        height={30}
                        alt="gaterebot Image"
                        className="rounded inline"
                    />
                    New Chat{" "}
                </Link>
                {/* <IoChevronBackSharp
                    className=" text-2xl font-bold animate-pulse cursor-pointer absolute -right-5"
                    onClick={() =>
                        setOpenSidebar((openSidebar) => !openSidebar)
                    }
                /> */}
            </div>

            <div className="flex-1 overflow-y-scroll">
                {filteredData.map((chat: any) => (
                    <Link key={chat._id} href={`/chat/${chat._id}`}>
                        <div
                            title={chat.title}
                            className="flex items-center gap-2 py-2 px-3 hover:bg-[#000000] rounded-md"
                        >
                            <AiFillMessage className="text-xl" />
                            <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                {chat.title}
                            </span>
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
                    alt="Profile Image"
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
