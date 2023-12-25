import React from "react";
import { render } from "react-dom";
import { App } from "app/App";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), `.env`) });

render(<App />, document.getElementById("root"));
