import { User } from "./user.model";
import { Request, Response } from "express";

export class UserController{
    
    public async addNewUser(req: Request, res: Response){
        try{
            let newUser = new User(req.body);
            let user = await newUser.save();
            res.json(user);
        }
        catch(err){
            res.send(err);
        }   
    }

    public async getUsers(req: Request, res: Response){
        try{
            let users = await User.find({});
            res.json(users);
        }
        catch(err){
            res.send(err);
        }
    }
}
