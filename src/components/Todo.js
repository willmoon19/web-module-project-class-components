import React from "react";

const ToDo = (props) => {

const handleClick = () => {
    props.toggle(props.item.id)
}


        return (
            <div onClick={handleClick} className={`item${props.item.purchased ? "purchased" : ""}`}>
                <p>{props.item.name}</p>
            </div>
        )
    
}

export default ToDo