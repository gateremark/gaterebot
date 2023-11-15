"use client";

import Image from "next/image";
import { FormEvent } from "react";
import ChatSidebar from "@/app/components/ChatSidebar";
import { IoSend } from "react-icons/io5";
import { useChat } from "ai/react";
import Message from "@/app/components/Message";

export default function Home() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } =
        useChat();

    // const [prompt, ai] = messages;
    // const { content } = ai || {};
    // console.log("Prompt:", prompt);
    // console.log("AI:", ai);
    // console.log("Content:", content);
    // setMessage((s) => `${s}${content}`);
    // console.log("Messages:", messages);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const syntheticEvent = e as unknown as FormEvent<HTMLFormElement>;
            // Submit the form
            handleSubmit(syntheticEvent);
        }
    };

    return (
        <>
            <title>New Chat</title>

            <div className="grid h-screen grid-cols-[260px_1fr]">
                <ChatSidebar />
                <div className="bg-[#343541] flex flex-col overflow-hidden">
                    <div className=" flex-1 text-[#ececf1] lg:px-28 md:px-8 pb-10 overflow-scroll">
                        {messages.map((m) => (
                            <Message key={m.id} {...m} isLoading={isLoading} />
                        ))}
                    </div>

                    <form
                        action=""
                        className=" bg-gradient-to-t from-[#343541] pb-10 from-[70%] px-10"
                        onSubmit={handleSubmit}
                    >
                        <fieldset
                            className=" relative flex justify-center items-center gap-2 "
                            disabled={isLoading}
                        >
                            <textarea
                                value={input}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                rows={1}
                                placeholder={
                                    isLoading ? "" : "Send a message..."
                                }
                                className=" bg-[#40414F] w-[75%] resize-none rounded-lg text-[#ffffff] p-4 focus:outline-none overflow-y-hidden"
                            />
                            <button
                                type="submit"
                                className={`absolute right-[15%] focus:outline-none p-[6px] rounded transition ease-in-out duration-150 ${
                                    !isLoading &&
                                    input !== "" &&
                                    "  text-[#ffffff] bg-[#19C37D] "
                                }`}
                            >
                                <IoSend
                                    className={`text-xl transition ease-in-out duration-150 ${
                                        !isLoading && input !== ""
                                            ? "text-[#ffffff] "
                                            : "text-[#99999990]"
                                    } `}
                                />
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
