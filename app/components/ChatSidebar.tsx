"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";

const ChatSidebar = () => {
    const { data: session } = useSession();
    return (
        <div className=" bg-[#202123] text-[#ffffff] flex flex-col pl-5">
            <div className="flex-1 ">Sidebar</div>

            <button
                className="flex items-center gap-5 py-2 hover:bg-[#000000]"
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
