import { model, Schema, Document } from "mongoose";


interface UserInterface extends Document {
    id: String;
    username: String;
    password: String;
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

export const User = model("User", UserSchema);




