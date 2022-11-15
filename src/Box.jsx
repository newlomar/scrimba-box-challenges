import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div onClick={() => props.toggle(props.id)} style={styles} className="box"></div>
    )
}