"use client";

import { signOut } from "next-auth/react";

const ChatSidebar = () => {
    return (
        <div className="bg-[#202123] text-[#ffffff] flex flex-col ">
            <div className="flex-1 pl-5">Sidebar</div>
            <button className="py-6 inline" onClick={() => signOut()}>
                Logout
            </button>
        </div>
    );
};

export default ChatSidebar;
