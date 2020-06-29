import { model, Schema, Document } from "mongoose";


interface UserInterface extends Document {
    id: string;
    username: string;
    password: string;
}

const UserSchema = new Schema({
    id: {
        type: String,
        required: "Enter an id",
    },
    username:  {
        type: String,
        required: "Enter a username"
    },
    password: {
        type: String,
        required: "Enter a password"
    }
})

export const User = model<UserInterface>("User", UserSchema);




