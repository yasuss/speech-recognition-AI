import * as express from "express";
import bodyParser from "body-parser";

const runApp = () => {
    const server = express();

    server.use(bodyParser);

    server.post("/audio", () => {});
};

runApp();
