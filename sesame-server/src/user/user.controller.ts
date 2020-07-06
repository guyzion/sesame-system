import { User } from "./user.model";
import { Request, Response } from "express";

export class UserController{
    
    public async addNewUser(req: Request, res: Response){
        const newUser = new User(req.body);
        const user = await newUser.save().catch(err => res.send(err));
        res.json(user);
    }

    public async getUsers(req: Request, res: Response){
        let users = await User.find({}).catch(err => res.send(err));
        res.json(users);
    }

    public async login(req: Request, res: Response){
        const tryUser = new User(req.body);
        const ret = await User.findOne({id: tryUser.id}).catch(error => res.status(404).send(error));
        console.log(ret);
        const user = new User(ret);
        console.log(user);
        if(user.password == tryUser.password) res.send({});
    }
}
