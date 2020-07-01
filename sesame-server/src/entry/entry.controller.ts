import { Entry, EntryModel} from "./entry.model";
import { Request, Response } from "express";

export class EntryController{
    
    public async addEntry (req: Request, res: Response){
        let newEntry = new EntryModel(req.body);
        let entry = await newEntry.save().catch(error => res.send(error));
        res.json(entry);
   
    }

    public async getEntryRequests(req: Request, res: Response){
        let requests: Response<Entry[]> = await EntryModel.find({}).catch(error => res.send(error));
        res.json(requests);
    }

    public async getStatus(req: Request, res: Response){
        let entry: Entry = await EntryModel.findById({_id: req.params._id}).catch(error => res.send(error)) as any;
        res.send(entry.isApproved);
    }
}
