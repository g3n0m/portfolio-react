import React from "react";
import Forever from "./works/Forever";
import Rss from "./works/Rss";
import Chienergy from "./works/chienergy";
import Herbalife from "./works/herbalife";
import Aeroflot from "./works/aeroflot";

function Works() {
    return (
        <article className="works" id="works">
            <div className="title"><h2>Мои работы</h2></div>
            <div className="projects">
                <Forever/>
                <Rss/>
                <Chienergy/>
                <Herbalife/>
                <Aeroflot/>
            </div>
            <div className="title last"><h2>... и многое другое!</h2></div>
        </article>
    );
}

export default Works;
