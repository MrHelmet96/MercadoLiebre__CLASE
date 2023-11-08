import React from "react";

export default function Menu(props) {
    return(
        <>
        <ul>
            
                {props.maps((item, index) => {
                    <li key={index}>{item}</li>
                }
                )}
            
        </ul>
        </>
    )
}