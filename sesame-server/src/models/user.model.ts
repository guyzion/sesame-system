import { model, Schema } from "mongoose";

export const User = model("User", new Schema({
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
);
