"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
// import { useState, useEffect } from "react";
// import remarkGfm from "remark-gfm";

interface MessageProps {
    role: string;
    content: string;
    isLoading: boolean;
}

const Message: React.FC<MessageProps> = ({ role, content, isLoading }) => {
    // const [chatList, setChatList] = useState([]);
    const { data: session } = useSession();
    const email = session?.user?.email;

    // useEffect(() => {
    //     const getChats = async () => {
    //         try {
    //             const response = await fetch(
    //                 `/api/chat/getChats?email=${email}`,
    //                 {
    //                     method: "GET",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                     },
    //                 }
    //             );

    //             const json = await response.json();
    //             console.log("Response:", json);
    //             setChatList(json?.chats ?? []);
    //             console.log("ChatList:", chatList);
    //         } catch (error) {
    //             console.error("Error getting chats:", error);
    //         }
    //     };

    //     getChats();
    // }, [email]);

    return (
        <>
            {/* <div className="flex-1 overflow-y-scroll">
                {chatList.map((chat: any) => (
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
            </div> */}

            {role === "user" ? (
                <div className="p-4 flex gap-5 items-start">
                    <Image
                        src={session?.user?.image as string}
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
                    <div className="pt-1 text-[#d1d5db] prose prose-invert rounded overflow-x-hidden">
                        {/* {isLoading ? (
                            <div className="animate-pulse flex gap-1">
                                <div className="h-3 bg-[#d1d5db] rounded-full w-3"></div>
                                <div className="h-3 bg-[#d1d5db] rounded-full w-3"></div>
                                <div className="h-3 bg-[#d1d5db] rounded-full w-3"></div>
                            </div>
                        ) : ( */}
                        <Markdown rehypePlugins={[rehypeHighlight]}>
                            {content}
                        </Markdown>

                        {/* )} */}
                    </div>
                </div>
            )}
        </>
    );
};

export default Message;
