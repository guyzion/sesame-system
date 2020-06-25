import { model, Schema, Document } from "mongoose";


interface EntryInterface extends Document {
    id: String;
    name: String;
    compoundId: String;
    branchId: String;
    licensePlateNumber: String;
    startDate: Date;
    endDate: Date;
    comments: String;
    isEscorted: Boolean;
    isApproved: Boolean;
}

const EntrySchema = new Schema({
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

export const Area = model<EntryInterface>("User", EntrySchema);




