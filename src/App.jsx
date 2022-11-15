import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {    
    const [squares, setSquares] = React.useState(boxes)
    
    const toggle = () => {
        console.log('clicked!')
    }

    const squareElements = squares.map(square => (
        <Box toggle={toggle} key={square.id} on={square.on} />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
