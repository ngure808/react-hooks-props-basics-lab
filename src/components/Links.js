import React from "react";

function Links(props){
    return (
        <div>
            <h3>Links</h3>
            <a href= {props.link1}>https://github.com/liza</a>
            <a href= {props.link2}>https://www.linkedin.com/in/liza/</a>
        </div>
    )
}

export default Links;
