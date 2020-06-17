import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import { Router } from "./router";
import { connect } from "mongoose";


class App {

    public app: express.Application;
    public router = new Router();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
        this.mongoSetup();
    }

    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        dotenv.config();
    }

    private async mongoSetup(){
        try{
            await connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
            console.log("Successfully connected to " + process.env.MONGO_URL);
        }
        catch(err){
            console.log(err);
        }
        
    }

}

export default new App().app;