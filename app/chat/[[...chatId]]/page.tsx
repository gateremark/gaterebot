"use client";

import Image from "next/image";
import ChatSidebar from "@/app/components/ChatSidebar";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { useChat } from "ai/react";
import Message from "@/app/components/Message";

export default function Home() {
    const [loading, setLoading] = useState("");
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    // const [prompt, ai] = messages;
    // const { content } = ai || {};
    // console.log("Prompt:", prompt);
    // console.log("AI:", ai);
    // console.log("Content:", content);
    // setMessage((s) => `${s}${content}`);
    // console.log("Messages:", messages);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            // Submit the form
            handleSubmit(e);
        }
    };

    return (
        <>
            <title>New Chat</title>

            <div className="grid h-screen grid-cols-[260px_1fr]">
                <ChatSidebar />
                <div className="bg-[#343541] flex flex-col">
                    <div className=" flex-1 text-[#ececf1] lg:px-28 md:px-8">
                        {messages.map((m) => (
                            <Message key={m.id} {...m} />
                        ))}
                    </div>

                    <form
                        action=""
                        className=" bg-gradient-to-t from-[#343541] from-[70%] fixed bottom-0 w-[80%] pb-8 px-10"
                        onSubmit={handleSubmit}
                    >
                        <fieldset className=" relative flex justify-center items-center gap-2 ">
                            <textarea
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                rows={1}
                                placeholder="Send a message..."
                                className=" bg-[#40414F] w-[80%] resize-none rounded-lg text-[#ffffff] p-4 focus:outline-none overflow-y-hidden"
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
