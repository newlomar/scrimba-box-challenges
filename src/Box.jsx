import React from "react"

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)

    const handleClick = () => {
        setOn(prevState => !prevState)
    }

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    return (
        <div onClick={handleClick} style={styles} className="box"></div>
    )
}