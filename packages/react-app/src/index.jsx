import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";

import App from "./App";
import { DAPP_CONFIG } from "./config";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <React.StrictMode>
        <DAppProvider config={DAPP_CONFIG}>
            <App />
        </DAppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);