import { model, Schema, Document } from "mongoose";


interface AreaInterface extends Document {
    name: string;
    parent: string;
}

const AreaSchema = new Schema({
    name:  {
        type: String,
        required: "Enter a name"
    },
    parent:  {
        type: String,
    },
})

export const Area = model<AreaInterface>("Area", AreaSchema);




