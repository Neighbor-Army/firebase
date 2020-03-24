import React from "react";
import "./RequestHelp.scss";

const RequestHelp = () => {
    return (
        <div className="request-help">
            <div className="request-help__header-wrap">
                <h1 className="hero-text">Text HELP to (917) 634-4426</h1>
                <p>
                    Please call or text us. You will be prompted with a few
                    short questions and we will call you ASAP.
                </p>
            </div>
            <p className="request-help__footnote">
                Powered by the generosity of{" "}
                <a
                    href="https://www.notion.so"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Notion
                </a>
                {", "}
                <a
                    href="https://www.onfleet.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    OnFleet
                </a>
                , and amazing volunteers
            </p>
        </div>
    );
};

export default RequestHelp;
