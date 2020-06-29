import { Entry } from "./entry.model";
import { Request, Response } from "express";

export class EntryController{
    
    public async addEntry (req: Request, res: Response){
        try{
            let newEntry = new Entry(req.body);
            let user = await newEntry.save();
            res.json(user);
        }
        catch(err){
            res.send(err);
        }   
    }

    public async getEntryRequests(req: Request, res: Response){
        try{
            let users = await Entry.find({});
            res.json(users);
        }
        catch(err){
            res.send(err);
        }
    }
}
