export interface Entry {
    _id? : string;
    id: string;
    name: string;
    compoundId: string;
    branchId: string;
    licensePlateNumber: string;
    startDate: Date;
    endDate: Date;
    comments: string;
    isEscorted: boolean;
}