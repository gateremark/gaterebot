import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI ?? "MONGODB_URI is not defined");
mongoose.Promise = global.Promise;

const chatSchema = new Schema(
    {
        email: String,
        title: String,
        content: Array,
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;