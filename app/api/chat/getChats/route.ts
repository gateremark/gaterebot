import Chat from "@/models/chat";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const chats = await Chat.find().sort({ createdAt: -1 });

        return NextResponse.json({ chats }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
}
