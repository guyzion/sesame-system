import { Entry, EntryModel} from "./entry.model";
import { Request, Response } from "express";

export class EntryController{
    
    public async addEntry (req: Request, res: Response){
        const newEntry = new EntryModel(req.body);
        const entry = await newEntry.save().catch(error => res.send(error));
        res.json(entry);
   
        
    }

    public async getEntryRequests(req: Request, res: Response){
        const requests = await EntryModel.find({}).catch(error => res.send(error));
        res.json(requests);
    }

    public async getStatus(req: Request, res: Response){
        const ret = await EntryModel.findById(req.query._id).catch(error => res.send(error));
        const entry = new EntryModel(ret);
        res.send(entry.isApproved);
    }
}
