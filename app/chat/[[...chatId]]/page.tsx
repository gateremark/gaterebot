"use client";

import Image from "next/image";
import ChatSidebar from "@/app/components/ChatSidebar";
import { IoSend } from "react-icons/io5";
import { use, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("");
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(message);
    };

    return (
        <>
            <title>New Chat</title>

            <div className="grid h-screen grid-cols-[260px_1fr]">
                <ChatSidebar />
                <div className="bg-[#343541] flex flex-col">
                    <div className=" flex-1 text-[#c5c5d2] lg:px-32 md:px-10">
                        Chat Window
                    </div>

                    <form action="" className=" p-10" onSubmit={handleSubmit}>
                        <fieldset className="relative flex justify-center items-center gap-2 ">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="1"
                                placeholder="Send a message..."
                                className=" bg-[#40414F] w-[80%] resize-none rounded-lg text-[#ffffff] p-4 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-[13%] focus:outline-none"
                            >
                                <IoSend className=" text-xl text-[#99999990]" />
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
