"use client";

import { FormEvent } from "react";
import ChatSidebar from "@/app/components/ChatSidebar";
import { IoSend } from "react-icons/io5";
import { useChat } from "ai/react";
import Message from "@/app/components/Message";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
    const { data: session } = useSession();
    const user = session?.user;
    const email = user?.email;
    const bottomRef = useRef<HTMLDivElement>(null);

    const { messages, input, handleInputChange, handleSubmit, isLoading } =
        useChat();
    // console.log("Messages:", messages);
    // const [prompt, ai] = messages;
    // console.log("Prompt:", prompt?.content);
    // messages.map((m) => console.log("new content:", m.content));
    // console.log("AI:", ai?.content);
    // const userData = prompt?.content + "\n" + ai?.content;
    // console.log("User Data:", userData);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [messages]);

    const mongoHandleSubmit = async () => {
        try {
            // console.log("Sending data:", {
            //     email: email,
            //     title: input,
            //     messages: messages,
            // });

            const response = await fetch("/api/chat/createNewChat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    title: input,
                    messages: messages,
                }),
            });

            const json = await response.json();
            // console.log("Response:", json);
        } catch (error) {
            console.error("Error submitting the chat:", error);
        }
    };

    // setTimeout(() => {
    //     mongoHandleSubmit();
    // }, 10000);
    // setTimeout(mongoHandleSubmit, 10000);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const syntheticEvent = e as unknown as FormEvent<HTMLFormElement>;
            // Submit the form
            // handleSubmit(syntheticEvent);
            finalSubmit(e);
        }
    };
    const finalSubmit = (e: any) => {
        e.preventDefault();
        handleSubmit(e);
        mongoHandleSubmit();
    };
    // console.log(messages);
    // console.log("Messages:", messages[0]?.content);
    // console.log("Input:", input);

    return (
        <>
            <title>New Chat</title>

            <div className="flex h-screen">
                <ChatSidebar />
                <div className="bg-[#343541] flex flex-1 flex-col overflow-hidden">
                    {!messages.length && !isLoading && (
                        <div className="m-auto h-screen flex flex-col justify-center items-center text-center">
                            <Image
                                src="https://res.cloudinary.com/dvuazircp/image/upload/v1699262306/new_portfolio/gaterebotorig_ymxuzb.webp"
                                priority={true}
                                width={300}
                                height={300}
                                alt="gaterebot logo"
                                className="w-1/2"
                            />
                            <h1 className="text-4xl font-bold text-white/50 mt-2">
                                Ask me a question
                            </h1>
                        </div>
                    )}
                    <div className=" flex-1 text-[#ececf1] lg:px-28 md:px-8 pb-10 overflow-y-scroll">
                        {messages.map((m) => (
                            <Message key={m.id} {...m} isLoading={isLoading} />
                        ))}
                        <div ref={bottomRef}></div>
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
                                className=" bg-[#40414F] md:w-[75%] w-[100%] resize-none rounded-lg text-[#ffffff] p-4 focus:outline-none overflow-y-hidden"
                            />
                            <button
                                type="submit"
                                className={`absolute md:right-[15%] right-[5%] focus:outline-none p-[6px] rounded transition ease-in-out duration-150 ${
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
