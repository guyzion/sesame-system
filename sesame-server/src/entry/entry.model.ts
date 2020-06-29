import { model, Schema, Document } from "mongoose";


interface EntryInterface extends Document {
    id: string;
    name: string;
    compoundId: string;
    branchId: string;
    licensePlateNumber: string;
    startDate: Date;
    endDate: Date;
    comments: string;
    isEscorted: boolean;
    isApproved: boolean;
}

const EntrySchema = new Schema({
    id: {
        type: String,
        required: "Enter an id",
    },
    name:  {
        type: String,
        required: "Enter a name"
    },
    compoundId: {
        type: String,
        required: "Enter a compound id"
    },
    branchId: {
        type: String,
        required: "Enter a branch id"
    },
    licensePlateNumber: {
        type: String,
        required: "Enter a compound license plate number"
    },
    startDate: {
        type: Date,
        required: "Enter a start date"
    },
    endDate: {
        type: Date,
        required: "Enter an end date",
    },
    comments: {
        type: String,
    },
    isEscorted: {
        type: Boolean,
    },
    isApproved: {
        type: Boolean,
    }
})

export const Entry = model<EntryInterface>("Entry", EntrySchema);




