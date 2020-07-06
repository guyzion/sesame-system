import { Application } from "express";
import { UserController } from "./user/user.controller";
import { EntryController } from "./entry/entry.controller"
import { AreaController } from "./area/area.controller"


export class Router {       

    public userController = new UserController();
    public entryController = new EntryController();

    public routes(app: Application): void {
        
        app.route("/users")
            .get(this.userController.getUsers)
            .post(this.userController.addNewUser);
        
        app.route("/users/login")
            .post(this.userController.login)

        app.route("/entries")
            .get(this.entryController.getEntryRequests)
            .post(this.entryController.addEntry);
        
        app.route("/entries/status")
            .get(this.entryController.getStatus);
        
        app.route("/compounds")
            .get(AreaController.getCompounds)
            .post(AreaController.addNewCompound);
        
        app.route("/branches")
            .get(AreaController.getBranches)
            .post(AreaController.addNewBranch);
    }

}