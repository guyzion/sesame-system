import { Area } from "./area.model";
import { Request, Response } from "express";

export class AreaController{
    
    static async addNewCompound(req: Request, res: Response){
        let newArea = new Area(req.body);
        let area = await newArea.save().catch(error => res.send(error));
        res.json(area);
    }

    static async getCompounds(req: Request, res: Response){
        let areas = await Area.find({parentId: {$exists: false}}).catch(error => res.send(error));
        res.json(areas);
    }

    static async addNewBranch(req: Request, res: Response){
        let newArea = new Area(req.body);
        let area = await newArea.save().catch(error => res.send(error));
        res.json(area);
    }

    static async getBranches(req: Request, res: Response){
        let areas = await Area.find({parentId: {$exists: true}}).catch(error => res.send(error));
        res.json(areas);
    }



}
