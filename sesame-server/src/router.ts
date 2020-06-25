import { Application } from "express";
import { UserController } from "./user/user.controller"


export class Router {       

    public userController = new UserController();

    public routes(app: Application): void {
        
        app.route("/user")
            .get(this.userController.getUsers)
            .post(this.userController.addNewUser);
        
    }

}