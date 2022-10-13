import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assetes/react1.jpg";
import React2 from "../assetes/react2.jpg";

export default function AboutContent() {
    return (
        <div className="about">
            <div>
                <div className="left">
                    <h1>Who Am I?</h1>
                    <p>Im a react front-end developer. I create responsive secure website for my client.</p>
                </div>
                <Link to="/contact">
                    <button className="btn">
                        Contact
                    </button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
};